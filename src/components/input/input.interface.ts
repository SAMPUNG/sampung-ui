export declare type InputEmits = {
  (event: 'blur', name?: string): void
  (event: 'foucs', name?: string): void
  (event: 'update:modelValue', value: InputValue, name?: string): void
}

export declare type InputProps = {
  inline?: boolean
  max?: number
  min?: number
  modelValue: InputValue
  name?: string,
  placeholder ?: string
  step?: number
  type?: InputType
}

export declare type InputType = 
  'button' |
  'checkbox' |
  'color' |
  'date' |
  'email' |
  'file' |
  'hidden' |
  'image' |
  'month' |
  'number' |
  'password' |
  'radio' |
  'range' |
  'reset' |
  'search' |
  'submit' |
  'tel' |
  'text' |
  'time' |
  'url' |
  'waeek'

export declare type InputValue = string | number | boolean

