import type { InjectionKey } from 'vue'

export const model = Symbol() as InjectionKey<HTMLInputElement | null>
