import execute from "../utils/db"
import IFile from "../models/file"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export async function getFileList() {
    const sql = 'select * from bt_file'

    const result = await execute(sql)

    return result as Array<IFile[]>
}

export async function getFileCount() {
    const sql = 'select count(*) from bt_file'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export async function getFileById(id: string) {
    const sql = `select * from bt_file where id = ${id}`

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
    const sql = `select * from bt_file where user_id = ${id}`

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

    for (let i = 0; i <= 7; i++) {
        const sql = `select count(*) as y,send_time as x  from bt_file where
                        to_days(CURDATE()) - to_days(send_time) <= ${i} and
                        ${i >= 1 ? i - 1 : 0} <= to_days(CURDATE()) - to_days(send_time) `

        const res = await execute(sql)

        if (res[0]['x']) {
            res[0]['x'] = dayjs.utc(res[0]['x']).format('YYYY-MM-DD')
        }

        result.push(res[0])
    }
    return result as object[]
}