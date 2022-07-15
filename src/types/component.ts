export declare type Absolute = Location & {
  position: 'absolute'
}

export declare type Appearance = 'dashed' | 'fill' | 'legacy' | 'outline'

export declare type Atom = HTMLElement | null | undefined

export declare type Bem = {
  block: string
  element?: string
  modifier?: string
}

export declare type Block = {
  display: 'block' | 'inline-block'
  width?: string
}

export declare type Container = 'parent' | 'body'

export declare type Direction = 'horizontal' | 'vertical'

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

export declare type Palette =
  | 'error'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'

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

export declare type Theme = 'dark' | 'light'
