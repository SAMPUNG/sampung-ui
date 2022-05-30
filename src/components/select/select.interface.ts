export declare type CommonProps = {
  multiple?: boolean
  name?: string
  options?: SelectOption[]
}

export declare type CommonEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
  (event: 'select', value: unknown, label: string, name?: string): void
}

export declare type SelectEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
  (event: 'select', value: unknown, label: string, name?: string): void
  (event: 'update:modelValue', value: SelectValue, name?: string): void
}

export declare type SelectOption = {
  label: string
  value: string | number | boolean
}


export declare type SelectProps = {
  multiple?: boolean
  modelValue: SelectValue,
  options: SelectOption[]
  placeholder?: string
  teleport?: string
}

export declare type SelectValue = string | number | boolean | unknown[] | Record<string, unknown> | undefined
