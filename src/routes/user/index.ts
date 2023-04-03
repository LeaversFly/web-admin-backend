import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'
import IUser from '../../models/user'
import { getUserById, getUserCount, getUserList, updateRemainById } from '../../service/userService'

const user = express.Router()

user.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getUserList()
    res.send(new Result<IUser[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

user.get('/all/count', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getUserCount()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

user.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getUserById(req.params.id)
    res.send(new Result<IUser>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

user.put('/edit', async (req: Request, res: Response, next: NextFunction) => {
    const data = await updateRemainById(req.body.id, req.body.remain)
    res.send(new Result<boolean>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

const routes: IRouterConf = {
    path: '/user',
    router: user
}

export = routes