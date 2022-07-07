import Button from '@/components/button/button.component'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SamButton: typeof Button
  }
}
