export declare type SelectOptionRecord = {
  icon?: string
  legend: string
  name: SelectValue
}

export declare type SelectOption = SelectValue | SelectOptionRecord

export declare type SelectProps = {
  modelValue: SelectValue
  options: SelectOption[]
}

export declare type SelectValue = string | number | boolean | undefined
