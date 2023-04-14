export interface Istore {
    codes: ICodes
}

export interface ICodes {
    value: ICode[]
}

export interface ICode {
    _id: string
    title: string
    content: string
}