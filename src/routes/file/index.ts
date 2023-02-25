import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'
import IFile from '../../models/file'
import { getFileList } from '../../service/fileService'

const file = express.Router()

file.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileList()
    res.send(new Result<IFile[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

const routes: IRouterConf = {
    path: '/file',
    router: file
}

export = routes