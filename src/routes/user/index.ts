import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'
import IUser from '../../models/user'
import { getUserById, getUserList } from '../../service/userService'

const user = express.Router()

user.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getUserList()
    res.send(new Result<IUser[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

user.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getUserById(req.params.id)
    res.send(new Result<IUser>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

const routes: IRouterConf = {
    path: '/user',
    router: user
}

export = routes