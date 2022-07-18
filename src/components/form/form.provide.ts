import type { InjectionKey } from 'vue'

export const model = Symbol('form') as InjectionKey<HTMLFormElement | null>
