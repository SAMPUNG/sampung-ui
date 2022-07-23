export declare type Atom = HTMLElement | null | undefined

export declare type Bem = {
  block: string
  element?: string
  modifier?: string
}

export declare type Dataset = Record<string, Regular>

export declare type I18n = Record<Language, string>

export declare type LangOption = {
  legend: string
  name: Language
}

export declare type LangRecord = Record<string, I18n>

export declare type Language = 'en' | 'kr' | 'zh'

export declare type Props = Record<string, unknown>

export declare type Regular = string | number | boolean | undefined
