import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'

const user = express.Router()

user.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    res.send(new Result<string>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString()))
})

const routes: IRouterConf = {
    path: '/user',
    router: user
}

export = routes