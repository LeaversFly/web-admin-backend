import { Express, Router, Request, Response, NextFunction } from "express";
import user from './user'
import file from './file'
import { Result } from "../common/Result";
import { ResultCodeEnum, ResultMessageEnum } from "../enums/ResultEnums";


// 路由配置接口
export interface IRouterConf {
    path: string,
    router: Router
}

// 路由配置
const routerConf: Array<IRouterConf> = []

routerConf.push(user)
routerConf.push(file)

// 挂载路由中间件
const routes = (app: Express) => {
    // 挂载所有路由
    routerConf.forEach(conf => app.use(conf.path, conf.router))

    // 兜底路由
    app.use('/*', (req: Request, res: Response, next: NextFunction) => {
        res.send(new Result(ResultCodeEnum.PAGE_NOT_FOUND, ResultMessageEnum.PAGE_NOT_FOUND.toString()))
    })
}

export default routes