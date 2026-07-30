/** Types pour les imports vite-imagetools (`?as=picture`). */
declare module '*&as=picture' {
  const out: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default out;
}
