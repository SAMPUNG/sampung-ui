export declare type ControlPayload = Record<string, unknown>

export declare type IndicatorOffset = {
  transform: string
  width: string
}

export declare type TabsEmits = {
  (event: 'control', payload: ControlPayload): void
  (event: 'update:modelValue', value: TabsValue): void
}

export declare type TabsProps = {
  modelValue: TabsValue
  options: TabOption[]
}

export declare type TabOption = {
  icon?: string
  name: string
  title: string
}

export declare type TabsValue = string | number | undefined
