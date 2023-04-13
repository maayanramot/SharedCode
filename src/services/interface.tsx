export interface Istore {
    codes: ICodes
}

export interface ICodes {
    value: ICode[]
}

export interface ICode {
    title: string
    content: string
}