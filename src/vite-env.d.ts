/// <reference types="vite/client" />

declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare namespace JSX {
  interface IntrinsicElements {
    'lite-youtube': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { videoid: string; playlabel?: string }, HTMLElement>
  }
}
