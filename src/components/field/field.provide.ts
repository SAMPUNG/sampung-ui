import type { InjectionKey } from 'vue'

import type { FieldExpose } from './field.interface'

export default Symbol('field') as InjectionKey<FieldExpose>
