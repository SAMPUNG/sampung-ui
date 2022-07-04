export declare type AbsolutePosition = {
  bottom?: StyleProperty
  left?: StyleProperty
  right?: StyleProperty
  top?: StyleProperty
  zIndex?: number
}
export declare type AbsolutePositionStyle = AbsolutePosition & {
  position: 'absolute'
}

export declare type Appearance =
  | 'dashed'
  | 'fill'
  | 'legacy'
  | 'outline'
  | 'text'

export declare type Bem = {
  block: string
  element?: string
  modifier?: string
}

export declare type Direction = 'horizontal' | 'vertical'

export declare type Palette =
  | 'error'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

export declare type Transform = {
  transform?: string
}

export declare type ScrollStyle = {
  transform: string
  width: string
}

export declare type Style = AbsolutePositionStyle & Size & Transform

export declare type Size = {
  height?: StyleProperty
  width?: StyleProperty
}

export declare type StyleProperty = number | string | undefined

export declare type Theme = 'dark' | 'light'
