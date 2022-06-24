export declare type AbsolutePosition = {
  bottom?: number | string
  left?: number | string
  right?: number | string
  top?: number | string
  zIndex?: number | string
}
export declare type AbsolutePositionStyle = AbsolutePosition & {
  position: 'absolute'
}

export declare type Appearance = 'fill' | 'legacy' | 'outline'

export declare type Style = {
  height?: string
  transform?: string
  width?: string
}

export declare type Theme = 'dark' | 'light'
