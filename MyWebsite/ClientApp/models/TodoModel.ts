export interface TodoModel {
    Status?: StatusEnums,
    Value?: string,
}

export enum StatusEnums {
    New = 1,
    Doing = 2,
    Done = 3
}