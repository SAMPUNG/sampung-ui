export declare type Absolute = Location & {
  position: 'absolute'
}

export declare type Block = {
  display: 'block' | 'inline-block'
  width?: string
}

export declare type Flex = {
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  display: 'flex'
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?:
    | 'baseline'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
}

export declare type Location = {
  bottom?: Property
  left?: Property
  right?: Property
  top?: Property
  zIndex?: number
}

export declare type Position = {
  position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
}

export declare type Transform = {
  transform?: string
}

export declare type ScrollStyle = {
  transform: string
  width: string
}

export declare type Sticky = Location & {
  position: 'sticky'
}

export declare type Style = Location & Position & Size & Transform

export declare type Size = {
  height?: Property
  width?: Property
}

export declare type Property = number | string | undefined
