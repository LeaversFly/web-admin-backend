import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'
import IFile from '../../models/file'
import { getFileById, getFileCount, getFileList, getFileListByUserId, getValidFile } from '../../service/fileService'

const file = express.Router()

file.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileList()
    res.send(new Result<IFile[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/count', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileCount()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/valid', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getValidFile()
    res.send(new Result<IFile>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileById(req.params.id)
    res.send(new Result<IFile>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/self/:id', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileListByUserId(req.params.id)
    res.send(new Result<IFile[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

const routes: IRouterConf = {
    path: '/file',
    router: file
}

export = routes