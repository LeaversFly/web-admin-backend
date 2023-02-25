import { Express, Router, Request, Response } from "express";
import user from './user'
import file from './file'


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
    // 根目录
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send('Hello express + ts')
    })

    routerConf.forEach(conf => app.use(conf.path, conf.router))
}

export default routes