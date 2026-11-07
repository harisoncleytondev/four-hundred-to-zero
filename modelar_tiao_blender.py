"""
Script de Modelagem 3D Completa no Blender (bpy):
Personagem: Sebastião (Tião) — Período 01 (1835)
Papel no Site: Mestre Carpinteiro e Lavrador Escravizado • Vale do Paraíba

Características modeladas a partir da história do site:
1. Postura frontal firme sobre o pedestal circular preto com anel dourado (#D97706) e fundo/halo editorial.
2. Corpo completo e anatômico: cabeça esculpida, cabelo crespo volumoso com cachos, barba cerrada e bigode,
   olhos expressivos com brilho, tronco musculoso (peitoral, abdômen, clavículas, deltoides), braços, mãos com dedos,
   pernas e pés descalços calejados com dedos.
3. Vestimenta histórica: calça rústica de estopa/algodão cru dobrada abaixo do joelho e amarrada na cintura com corda de sisal.
4. Mestre Carpinteiro: malho/enxó de carpinteiro detalhado na mão, formão/cinzel preso ao cinto e roda d'água/engrenagem
   de madeira de engenho aos pés.
5. Lavrador do Vale do Paraíba: balaio de colheita com grãos de café cereja (vermelhos) e folhas verdes aos pés.
6. Resistência Silenciosa (Alforria da filha Benedita): tigela e colher de madeira entalhadas nos domingos, saquinho
   na cintura e moedas de cobre semi-enterradas no chão batido da senzala.
7. Grilhões: grilhão de ferro com elos rompidos no punho e grilhão de ferro no tornozelo.
"""

import bpy
import math


def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    for block in bpy.data.meshes:
        if block.users == 0:
            bpy.data.meshes.remove(block)
    for block in bpy.data.materials:
        if block.users == 0:
            bpy.data.materials.remove(block)


def create_material(name, hex_color, roughness=0.5, metallic=0.0, emission_strength=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = next(n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED")

    hex_clean = hex_color.lstrip('#')
    r = int(hex_clean[0:2], 16) / 255.0
    g = int(hex_clean[2:4], 16) / 255.0
    b = int(hex_clean[4:6], 16) / 255.0
    # Conversão aproximada sRGB -> Linear
    rgba = (r ** 2.2, g ** 2.2, b ** 2.2, 1.0)

    bsdf.inputs["Base Color"].default_value = rgba
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission_strength > 0 and "Emission Color" in bsdf.inputs:
        bsdf.inputs["Emission Color"].default_value = rgba
        bsdf.inputs["Emission Strength"].default_value = emission_strength

    mat.diffuse_color = rgba
    return mat


def assign_mat(obj, mat):
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)
    for poly in obj.data.polygons:
        poly.use_smooth = True


def add_sphere(name, loc, radius=1.0, scale=(1, 1, 1), rot=(0, 0, 0), mat=None, parent=None):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=20, radius=radius, location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = scale
    if mat:
        assign_mat(obj, mat)
    if parent:
        obj.parent = parent
    return obj


def add_cylinder(name, loc, radius=1.0, depth=1.0, scale=(1, 1, 1), rot=(0, 0, 0), mat=None, parent=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=radius, depth=depth, location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = scale
    if mat:
        assign_mat(obj, mat)
    if parent:
        obj.parent = parent
    return obj


def add_cube(name, loc, size=1.0, scale=(1, 1, 1), rot=(0, 0, 0), mat=None, parent=None, bevel=0.03):
    bpy.ops.mesh.primitive_cube_add(size=size, location=loc, rotation=rot)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = scale
    if bevel > 0:
        mod = obj.modifiers.new(name="Bevel", type='BEVEL')
        mod.width = bevel
        mod.segments = 3
    if mat:
        assign_mat(obj, mat)
    if parent:
        obj.parent = parent
    return obj


def add_torus(name, loc, major_r=1.0, minor_r=0.25, scale=(1, 1, 1), rot=(0, 0, 0), mat=None, parent=None):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major_r,
        minor_radius=minor_r,
        major_segments=36,
        minor_segments=18,
        location=loc,
        rotation=rot,
    )
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = scale
    if mat:
        assign_mat(obj, mat)
    if parent:
        obj.parent = parent
    return obj


def build_tiao():
    clear_scene()

    # Materiais PBR
    mats = {
        "skin": create_material("Tiao_Skin", "#3B1E10", roughness=0.46, metallic=0.05),
        "hair": create_material("Tiao_Hair", "#0B0705", roughness=0.88),
        "eye_white": create_material("Tiao_EyeWhite", "#F8FAFC", roughness=0.15),
        "eye_dark": create_material("Tiao_EyeDark", "#090402", roughness=0.08),
        "burlap": create_material("Tiao_Burlap", "#C8B08C", roughness=0.9),
        "burlap_dark": create_material("Tiao_BurlapDark", "#9C825E", roughness=0.92),
        "rope": create_material("Tiao_Rope", "#8C6D46", roughness=0.95),
        "iron": create_material("Tiao_Iron", "#334155", roughness=0.35, metallic=0.85),
        "wood": create_material("Tiao_Wood", "#5C2C10", roughness=0.72),
        "wood_carved": create_material("Tiao_WoodCarved", "#8B4513", roughness=0.62),
        "copper": create_material("Tiao_CopperCoin", "#D97706", roughness=0.25, metallic=0.92),
        "coffee_red": create_material("Tiao_CoffeeCherry", "#991B1B", roughness=0.32),
        "coffee_leaf": create_material("Tiao_CoffeeLeaf", "#166534", roughness=0.55),
        "soil": create_material("Tiao_Soil", "#2A1810", roughness=0.95),
        "pedestal": create_material("Tiao_Pedestal", "#141418", roughness=0.4, metallic=0.5),
        "gold_ring": create_material("Tiao_GoldRing", "#D97706", roughness=0.25, metallic=0.8, emission_strength=0.3),
        "halo_bg": create_material("Tiao_HaloCircle", "#D8D4CC", roughness=0.9),
        "colonial_red": create_material("Tiao_ColonialBackdrop", "#8E1010", roughness=0.95),
    }

    root = bpy.data.objects.new("Sebastiao_Tiao_1835", None)
    bpy.context.collection.objects.link(root)

    # ==================== 1. PEDESTAL E CENÁRIO DO SITE ====================
    add_cylinder("Pedestal_Base", (0, 0, -0.08), radius=1.22, depth=0.16, mat=mats["pedestal"], parent=root)
    add_torus("Pedestal_Anel_Dourado", (0, 0, 0.005), major_r=1.07, minor_r=0.035, scale=(1, 1, 0.3), mat=mats["gold_ring"], parent=root)
    add_cylinder("Chao_Batido_Senzala", (0, 0, 0.01), radius=0.98, depth=0.02, mat=mats["soil"], parent=root)

    # Círculo Editorial (Halo Creme) atrás do personagem como no site
    add_cylinder("Halo_Editorial_Fundo", (0, 0.65, 1.45), radius=1.35, depth=0.02, rot=(math.pi / 2, 0, 0), mat=mats["halo_bg"], parent=root)

    # Adereço de Cenário 1: Roda de Engenho de Madeira (Mestre Carpinteiro)
    add_torus("Roda_Engenho_Aro", (-0.62, 0.22, 0.16), major_r=0.22, minor_r=0.04, rot=(1.3, 0.2, 0.4), mat=mats["wood"], parent=root)
    add_cube("Roda_Engenho_Raio1", (-0.62, 0.22, 0.16), size=1.0, scale=(0.42, 0.04, 0.04), rot=(1.3, 0.2, 0.4), mat=mats["wood_carved"], parent=root)
    add_cube("Roda_Engenho_Raio2", (-0.62, 0.22, 0.16), size=1.0, scale=(0.04, 0.04, 0.42), rot=(1.3, 0.2, 0.4), mat=mats["wood_carved"], parent=root)

    # Adereço de Cenário 2: Balaio de Café do Vale do Paraíba
    add_cylinder("Balaio_Cafe", (0.6, 0.15, 0.10), radius=0.2, depth=0.18, mat=mats["burlap_dark"], parent=root)
    add_torus("Balaio_Borda", (0.6, 0.15, 0.19), major_r=0.2, minor_r=0.02, mat=mats["rope"], parent=root)
    coffee_offsets = [(-0.06, -0.03, 0.2), (0.05, 0.02, 0.21), (0.0, -0.05, 0.22), (-0.08, 0.05, 0.19), (0.08, -0.04, 0.2)]
    for idx, (cx, cy, cz) in enumerate(coffee_offsets):
        add_sphere(f"Grao_Cafe_{idx}", (0.6 + cx, 0.15 + cy, cz), radius=0.042, scale=(1.0, 1.25, 0.8), mat=mats["coffee_red"], parent=root)
    add_sphere("Folha_Cafe_1", (0.48, 0.08, 0.2), radius=0.045, scale=(1.6, 0.8, 0.2), rot=(0.2, 0.3, 0.4), mat=mats["coffee_leaf"], parent=root)

    # Adereço de Cenário 3: Tigela Entalhada + Moedas de Cobre Escondidas (Alforria de Benedita)
    add_cylinder("Tigela_Entalhada", (-0.42, -0.42, 0.05), radius=0.12, depth=0.08, mat=mats["wood_carved"], parent=root)
    coin_coords = [(-0.24, -0.48, 0.022), (-0.18, -0.44, 0.025), (-0.21, -0.52, 0.028)]
    for i, cpos in enumerate(coin_coords):
        add_cylinder(f"Moeda_Cobre_Alforria_{i}", cpos, radius=0.038, depth=0.012, rot=(0.2, -0.15 * i, 0), mat=mats["copper"], parent=root)

    # ==================== 2. PERNAS, CALÇA DE ESTOPA E PÉS DESCALÇOS ====================
    for side, sx in [("Esq", -0.22), ("Dir", 0.22)]:
        # Coxa (Calça de Estopa)
        add_cylinder(f"Coxa_{side}", (sx, 0, 1.18), radius=0.155, depth=0.58, mat=mats["burlap"], parent=root)
        add_sphere(f"Quadril_Coxa_{side}", (sx, 0, 1.46), radius=0.155, mat=mats["burlap"], parent=root)
        # Barra dobrada da calça abaixo do joelho
        add_torus(f"Barra_Calca_{side}", (sx, 0, 0.82), major_r=0.138, minor_r=0.038, mat=mats["burlap_dark"], parent=root)
        # Joelho
        add_sphere(f"Joelho_{side}", (sx, -0.04, 0.82), radius=0.115, mat=mats["skin"], parent=root)
        # Panturrilha
        add_cylinder(f"Panturrilha_{side}", (sx, 0.01, 0.50), radius=0.11, depth=0.55, mat=mats["skin"], parent=root)
        # Tornozelo e Pé Descalço
        add_sphere(f"Tornozelo_{side}", (sx, 0.02, 0.18), radius=0.095, mat=mats["skin"], parent=root)
        add_cube(f"Pe_{side}", (sx, -0.09, 0.08), size=1.0, scale=(0.18, 0.36, 0.13), mat=mats["skin"], parent=root, bevel=0.04)
        # Dedos do pé
        for t_idx, tx in enumerate([-0.06, -0.03, 0.0, 0.03, 0.06]):
            add_sphere(f"Dedo_Pe_{side}_{t_idx}", (sx + tx, -0.28, 0.05), radius=0.024, mat=mats["skin"], parent=root)

    # Grilhão de Ferro no Tornozelo Esquerdo
    add_torus("Grilhao_Tornozelo", (-0.22, 0.01, 0.28), major_r=0.13, minor_r=0.035, mat=mats["iron"], parent=root)
    add_torus("Elo_Tornozelo_1", (-0.36, -0.02, 0.24), major_r=0.045, minor_r=0.015, rot=(0.5, 0.3, 0), mat=mats["iron"], parent=root)

    # ==================== 3. TRONCO MUSCULOSO E CINTURA ====================
    # Quadril / Cós da Calça de Estopa
    add_cylinder("Quadril_Calca", (0, 0, 1.58), radius=0.33, depth=0.34, mat=mats["burlap"], parent=root)
    add_torus("Cinto_Corda_Sisal", (0, 0, 1.74), major_r=0.32, minor_r=0.032, mat=mats["rope"], parent=root)

    # Saquinho de Moedas e Formão no Cinto
    add_sphere("Bolsa_Moedas_Cinto", (-0.26, -0.22, 1.68), radius=0.085, mat=mats["burlap_dark"], parent=root)
    add_cylinder("Formao_Cabo", (0.28, -0.18, 1.76), radius=0.024, depth=0.14, rot=(0.2, 0.35, 0), mat=mats["wood_carved"], parent=root)
    add_cube("Formao_Lamina", (0.31, -0.20, 1.64), size=1.0, scale=(0.032, 0.01, 0.14), rot=(0.2, 0.35, 0), mat=mats["iron"], parent=root)

    # Torso Superior Musculoso
    add_cylinder("Torso_Tronco", (0, 0, 2.08), radius=0.34, depth=0.58, mat=mats["skin"], parent=root)
    add_sphere("Torso_Topo", (0, 0, 2.34), radius=0.34, scale=(1.05, 0.88, 0.85), mat=mats["skin"], parent=root)

    # Peitorais Esculpidos
    add_sphere("Peitoral_Esq", (-0.135, -0.22, 2.18), radius=0.155, scale=(1.15, 0.85, 0.9), mat=mats["skin"], parent=root)
    add_sphere("Peitoral_Dir", (0.135, -0.22, 2.18), radius=0.155, scale=(1.15, 0.85, 0.9), mat=mats["skin"], parent=root)

    # Abdômen Definido (6-pack)
    for r_idx, az in enumerate([2.01, 1.91, 1.81]):
        add_sphere(f"Abs_Esq_{r_idx}", (-0.075, -0.27, az), radius=0.068, scale=(1.1, 0.6, 0.75), mat=mats["skin"], parent=root)
        add_sphere(f"Abs_Dir_{r_idx}", (0.075, -0.27, az), radius=0.068, scale=(1.1, 0.6, 0.75), mat=mats["skin"], parent=root)

    # Clavículas e Ombros (Deltoides)
    add_cylinder("Clavicula_Esq", (-0.16, -0.16, 2.42), radius=0.042, depth=0.26, rot=(0, 1.4, 0), mat=mats["skin"], parent=root)
    add_cylinder("Clavicula_Dir", (0.16, -0.16, 2.42), radius=0.042, depth=0.26, rot=(0, -1.4, 0), mat=mats["skin"], parent=root)

    # ==================== 4. BRAÇOS, GRILHÃO NO PUNHO E MALHO DE CARPINTEIRO ====================
    # Braço Esquerdo (Com Grilhão de Ferro no Punho)
    add_sphere("Ombro_Esq", (-0.42, 0, 2.32), radius=0.15, mat=mats["skin"], parent=root)
    add_cylinder("Braco_Sup_Esq", (-0.45, 0, 2.08), radius=0.11, depth=0.45, rot=(0, 0.08, 0), mat=mats["skin"], parent=root)
    add_sphere("Cotovelo_Esq", (-0.46, 0, 1.84), radius=0.10, mat=mats["skin"], parent=root)
    add_cylinder("Antebraco_Esq", (-0.44, -0.08, 1.62), radius=0.095, depth=0.42, rot=(0.25, 0, 0), mat=mats["skin"], parent=root)
    add_sphere("Mao_Esq", (-0.44, -0.14, 1.38), radius=0.10, mat=mats["skin"], parent=root)
    add_torus("Grilhao_Punho_Esq", (-0.44, -0.12, 1.48), major_r=0.115, minor_r=0.03, mat=mats["iron"], parent=root)
    add_torus("Elo_Rompido_Punho", (-0.55, -0.14, 1.43), major_r=0.04, minor_r=0.014, rot=(0.8, 0.4, 0), mat=mats["iron"], parent=root)

    # Braço Direito (Segurando o Malho / Enxó de Mestre Carpinteiro)
    add_sphere("Ombro_Dir", (0.42, 0, 2.32), radius=0.15, mat=mats["skin"], parent=root)
    add_cylinder("Braco_Sup_Dir", (0.45, 0, 2.08), radius=0.11, depth=0.45, rot=(0, -0.08, 0), mat=mats["skin"], parent=root)
    add_sphere("Cotovelo_Dir", (0.46, 0, 1.84), radius=0.10, mat=mats["skin"], parent=root)
    add_cylinder("Antebraco_Dir", (0.44, -0.10, 1.62), radius=0.095, depth=0.42, rot=(0.35, 0, 0), mat=mats["skin"], parent=root)
    add_sphere("Mao_Dir", (0.44, -0.18, 1.38), radius=0.10, mat=mats["skin"], parent=root)

    # Malho / Enxó de Mestre Carpinteiro na Mão
    add_cylinder("Malho_Cabo_Madeira", (0.44, -0.22, 1.52), radius=0.038, depth=0.82, rot=(0.15, 0, 0), mat=mats["wood"], parent=root)
    add_cube("Malho_Cabeca_Ferro", (0.44, -0.26, 1.82), size=1.0, scale=(0.36, 0.16, 0.16), rot=(0.15, 0, 0.08), mat=mats["iron"], parent=root, bevel=0.015)
    add_cylinder("Malho_Cunha_Topo", (0.44, -0.27, 1.92), radius=0.042, depth=0.05, rot=(0.15, 0, 0), mat=mats["wood_carved"], parent=root)

    # ==================== 5. PESCOÇO, ROSTO EXPRESSIVO, BARBA E CABELO CRESPO ====================
    add_cylinder("Pescoco", (0, 0, 2.58), radius=0.135, depth=0.26, mat=mats["skin"], parent=root)

    head_z = 2.88
    add_sphere("Cranio_Cabeca", (0, 0, head_z), radius=0.26, scale=(0.92, 0.98, 1.08), mat=mats["skin"], parent=root)
    add_sphere("Mandibula_Queixo", (0, -0.05, head_z - 0.12), radius=0.18, mat=mats["skin"], parent=root)

    # Orelhas
    add_sphere("Orelha_Esq", (-0.24, 0, head_z), radius=0.07, scale=(0.4, 0.5, 0.8), mat=mats["skin"], parent=root)
    add_sphere("Orelha_Dir", (0.24, 0, head_z), radius=0.07, scale=(0.4, 0.5, 0.8), mat=mats["skin"], parent=root)

    # Olhos com Íris e Sobrancelhas
    for side, ox in [("Esq", -0.085), ("Dir", 0.085)]:
        add_sphere(f"Olho_Esclera_{side}", (ox, -0.22, head_z + 0.03), radius=0.035, mat=mats["eye_white"], parent=root)
        add_sphere(f"Olho_Pupila_{side}", (ox, -0.245, head_z + 0.03), radius=0.018, mat=mats["eye_dark"], parent=root)
        add_cube(
            f"Sobrancelha_{side}",
            (ox, -0.23, head_z + 0.085),
            size=1.0,
            scale=(0.075, 0.02, 0.016),
            rot=(0, 0.08 if ox < 0 else -0.08, 0),
            mat=mats["hair"],
            parent=root,
        )

    # Nariz Esculpido
    bpy.ops.mesh.primitive_cone_add(vertices=20, radius1=0.044, radius2=0.012, depth=0.11, location=(0, -0.25, head_z - 0.01), rotation=(0.18, 0, 0))
    nose = bpy.context.active_object
    nose.name = "Nariz"
    assign_mat(nose, mats["skin"])
    nose.parent = root
    add_sphere("Narina_Esq", (-0.025, -0.25, head_z - 0.05), radius=0.022, mat=mats["skin"], parent=root)
    add_sphere("Narina_Dir", (0.025, -0.25, head_z - 0.05), radius=0.022, mat=mats["skin"], parent=root)

    # Barba Cerrada e Bigode
    add_sphere("Barba_Completa", (0, -0.09, head_z - 0.13), radius=0.21, scale=(0.96, 0.95, 0.85), mat=mats["hair"], parent=root)
    add_cylinder("Bigode", (0, -0.235, head_z - 0.075), radius=0.022, depth=0.14, rot=(0, math.pi / 2, 0), mat=mats["hair"], parent=root)
    add_sphere("Labios", (0, -0.235, head_z - 0.11), radius=0.036, scale=(1.4, 0.8, 0.65), mat=mats["skin"], parent=root)

    # Cabelo Crespo Volumoso Esculpido
    add_sphere("Cabelo_Base", (0, 0.02, head_z + 0.12), radius=0.27, mat=mats["hair"], parent=root)
    curl_positions = [
        (-0.14, -0.05, head_z + 0.20, 0.14),
        (0.14, -0.05, head_z + 0.20, 0.14),
        (0.0, -0.08, head_z + 0.28, 0.12),
        (-0.20, -0.06, head_z + 0.12, 0.11),
        (0.20, -0.06, head_z + 0.12, 0.11),
        (0.0, 0.12, head_z + 0.22, 0.14),
    ]
    for c_idx, (cx, cy, cz, cr) in enumerate(curl_positions):
        add_sphere(f"Cabelo_Cacho_{c_idx}", (cx, cy, cz), radius=cr, mat=mats["hair"], parent=root)

    # ==================== 6. CÂMERA E ILUMINAÇÃO DRAMÁTICA ====================
    bpy.ops.object.camera_add(location=(0, -4.5, 1.55), rotation=(math.radians(88), 0, 0))
    cam = bpy.context.active_object
    cam.name = "Camera_Tiao"
    cam.data.lens = 50
    bpy.context.scene.camera = cam

    bpy.ops.object.light_add(type='AREA', location=(2.8, -3.2, 3.8), rotation=(math.radians(55), 0, math.radians(38)))
    key_light = bpy.context.active_object
    key_light.name = "KeyLight_Sol_Vale"
    key_light.data.energy = 350
    key_light.data.size = 2.5
    key_light.data.color = (1.0, 0.93, 0.82)

    bpy.ops.object.light_add(type='AREA', location=(-2.8, -2.0, 2.2), rotation=(math.radians(70), 0, math.radians(-45)))
    fill_light = bpy.context.active_object
    fill_light.name = "FillLight_Dourada"
    fill_light.data.energy = 140
    fill_light.data.size = 2.0
    fill_light.data.color = (0.99, 0.85, 0.55)

    # Cor de fundo Vermelho Colonial (#8E1010) igual ao Ato I do site
    world = bpy.context.scene.world
    if not world:
        world = bpy.data.worlds.new("World_Colonial")
        bpy.context.scene.world = world
    world.use_nodes = True
    bg_node = next((n for n in world.node_tree.nodes if n.type == "BACKGROUND"), None)
    if bg_node:
        bg_node.inputs[0].default_value = ((0x8E / 255.0) ** 2.2, (0x10 / 255.0) ** 2.2, (0x10 / 255.0) ** 2.2, 1.0)
        bg_node.inputs[1].default_value = 1.0

    print("Modelagem completa de Sebastião (Tião - 1835) concluída com sucesso!")


if __name__ == "__main__":
    build_tiao()
