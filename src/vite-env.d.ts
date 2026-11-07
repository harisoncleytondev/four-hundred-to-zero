/// <reference types="vite/client" />
/// <reference types="@react-three/fiber" />

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  const content: string;
  export default content;
}
