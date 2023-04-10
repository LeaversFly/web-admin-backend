import execute from "../utils/db"
import IFile from "../models/file"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import { IPage } from '../types'
import fs from 'fs'

dayjs.extend(utc)

export async function getFileList(query: any) {
    const { pageNum, pageSize }: IPage = query

    const sql = `select * from bt_file 
    order by id desc 
    limit ${(pageNum - 1) * pageSize},${pageSize}`

    let result = await execute(sql)

    result = result.map((item: IFile) => {
        item.send_time = dayjs(item.send_time).format('YYYY-MM-DD HH:MM:ss')
        return item
    })

    console.log(result);

    return result as Array<IFile[]>
}

export async function getFileSum() {
    const sql = 'select count(*) from bt_file'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export async function getFileById(id: string) {
    const sql = `select * from bt_file where id = ${id} `

    const result = await execute(sql)

    return result as IFile
}

export async function getValidFile() {
    const sql = 'select * from bt_file where validity = 1'

    const result = await execute(sql)

    return result as IFile[]
}

export async function getValidFileCount() {
    const sql = 'select count(*) from bt_file where validity = 1'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export async function getFileListByUserId(id: string) {
    const sql = `select * from bt_file where user_id = ${id} `

    const result = await execute(sql)

    return result as IFile[]
}

export async function getYesterdayCount() {
    const sql = 'select count(*) from bt_file where to_days(CURDATE()) - to_days(send_time) <= 1'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export async function get8DaysFileCount() {
    let result = []

    for (let i = 7; i >= 1; i--) {
        const sql = `select count(*) as y from bt_file where
to_days(CURDATE()) - to_days(send_time) <= ${i} and
                        ${i - 1} <= to_days(CURDATE()) - to_days(send_time); `

        const res = await execute(sql)

        res[0]['x'] = dayjs().subtract(i, 'day').format('YYYY-MM-DD')

        result.push(res[0])
    }

    return result as object[]
}

export async function deleteAllFiles() {
    const root = 'C:\\Users\\廖飞\\IdeaProjects\\bocchi-transfer\\src\\main\\resources\\static'

    const dir = fs.readdirSync(root)

    dir.forEach(folder => {
        const files = fs.readdirSync(root + '\\' + folder)
        if (files.length !== 0) {
            files.forEach(item => {
                if (item !== '天翼网盘下载.txt') {
                    fs.unlinkSync(root + '\\' + folder + '\\' + item)
                }
            })
        }
    })

    return true
}