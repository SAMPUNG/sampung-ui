import component from './effect.component'
import resolveInstall from '@/utils/install'

export const Effect = resolveInstall(component)
export default Effect

declare module 'vue' {
  export interface GlobalComponents {
    SamEffect: typeof component
  }
}
