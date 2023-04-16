export interface Istore {
  codes: ICodes
}

export interface ICodes {
  value: ICode[]
}

export interface ICode {
  _id: string
  title: string
  code: string
  missingCode: string
}
