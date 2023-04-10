// mysql 配置
export interface IDBConfig {
    protocol?: string,
    host: string,
    database?: string,
    user: string,
    password: string,
    port: number,
    connectionLimit: number
}

// 分页参数接口
export interface IPage {
    pageNum: number,
    pageSize: number,
    pageCount: number,
}