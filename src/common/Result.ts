import { ResultCodeEnum, ResultMessageEnum } from "../enums/ResultEnums";

export class Result<T>{
    private code: ResultCodeEnum
    private message: ResultMessageEnum | string
    private data: T | object | string

    constructor(code: ResultCodeEnum, message: ResultMessageEnum | string, data?: T | object) {
        this.code = code
        this.message = message
        // ??运算符与||比较相似，但??不会把0排除
        this.data = data ?? ''
    }

    set setCode(code: ResultCodeEnum) {
        this.code = code
    }

    set setMessage(message: ResultMessageEnum) {
        this.message = message
    }

    set setData(data: T) {
        this.data = data
    }

    public static success<T>(data: T) {
        return new Result(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS, data)
    }

    public static error<T>(errMsg: ResultMessageEnum | string) {
        return new Result(ResultCodeEnum.ERROR, errMsg)
    }

    public static errorParams() {
        return new Result(ResultCodeEnum.REQUEST_PARAMS_ERROR, ResultMessageEnum.REQUEST_PARAMS_ERROR)
    }

    public toString() {
        return {
            code: this.code,
            message: this.message,
            data: this.data
        }
    }
}