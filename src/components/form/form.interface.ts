export declare type FormAutocomplete = 'on' | 'off'

export declare type FormEmits = {
  (event: 'reset', name?: string): void
  (event: 'submit', name?: string): void
}

export declare type FormEnctype =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'

export declare type FormMethod = 'get' | 'post'

export declare type FormProps = {
  action?: string
  autocomplete?: FormAutocomplete
  disabled?: boolean
  enctype?: FormEnctype
  method?: FormMethod
  name?: string
  target?: FormTarget | string
}

export declare type FormTarget = '_blank' | '_self' | '_parent' | '_top'
