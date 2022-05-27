export declare type Option = {
  label: string
  value: string | number | boolean
}


export declare type CommonProps = {
  multiple?: boolean
  name?: string
  options?: Option[]
}

export declare type CommonEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
  (event: 'select', value: unknown, label: string, name?: string): void
}
