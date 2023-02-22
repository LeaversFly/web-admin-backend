import express from 'express'
import bootstrap from './middleware'

const app = express()

// 启动
bootstrap(app)