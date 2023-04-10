import express, { NextFunction, Request, Response } from 'express'
import { IRouterConf } from '..'
import { Result } from '../../common/Result'
import { ResultCodeEnum, ResultMessageEnum } from '../../enums/ResultEnums'
import IFile from '../../models/file'
import { get8DaysFileCount, getFileById, getFileSum, getFileList, getFileListByUserId, getValidFile, getValidFileCount, getYesterdayCount, deleteAllFiles } from '../../service/fileService'

const file = express.Router()

file.get('/all', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileList(req.query)
    res.send(new Result<IFile[]>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/sum', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getFileSum()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/valid', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getValidFile()
    res.send(new Result<IFile>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/valid/count', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getValidFileCount()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/yesterday', async (req: Request, res: Response, next: NextFunction) => {
    const data = await getYesterdayCount()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.get('/8DaysCount', async (req: Request, res: Response, next: NextFunction) => {
    const data = await get8DaysFileCount()
    res.send(new Result<number>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
})

file.delete('/clear', async (req: Request, res: Response, next: NextFunction) => {
    const data = await deleteAllFiles()
    res.send(new Result<boolean>(ResultCodeEnum.SUCCESS, ResultMessageEnum.SUCCESS.toString(), data))
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