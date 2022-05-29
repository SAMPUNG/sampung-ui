/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}// declaration.d.ts
declare module '*.module.scss' {
  const content: {[className: string]: string};
  export default content;
}
declare module '*.html?raw' {
  const template: string
  export default template
}
