import rateLimit from 'express-rate-limit'
import { Express } from 'express'
import express from 'express'
import log from '../../utils/log'
import responseHeader from './requestHeader'

const limiter = rateLimit({
    max: 200,
    windowMs: 60 * 60 * 1000,
    standardHeaders: true,
    legacyHeaders: true,
    message: 'Too many request from this IP'
})

const requestHandle = (app: Express) => {
    // cors 配置
    app.all('*', responseHeader)

    // 解析application/json
    app.use(express.json())

    // 解析appliction/urlencoded
    app.use(express.urlencoded({ extended: true }))

    // 所有接口限制请求次数
    app.use(limiter)
}

export default requestHandle