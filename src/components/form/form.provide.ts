import type { InjectionKey } from 'vue'

export const model = Symbol() as InjectionKey<HTMLFormElement | null>
