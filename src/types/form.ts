export declare enum FormEnctype {
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain'
}

export declare enum FormMethod {
  'get',
  'post'
}

declare enum FormTargetPage {
  '_blank',
  '_self',
  '_parent',
  '_top',
}
export declare type FormTarget = FormTargetPage | string
