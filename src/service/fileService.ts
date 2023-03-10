import execute from "../utils/db"
import IFile from "../models/file"

export const getFileList = async () => {
    const sql = 'select * from bt_file'

    const result = await execute(sql)

    return result as Array<IFile[]>
}

export async function getFileCount() {
    const sql = 'select count(id) from bt_file'

    const result = await execute(sql)

    return result[0]['count(id)'] as number
}

export const getFileById = async (id: string) => {
    const sql = `select * from bt_file where id = ${id}`

    const result = await execute(sql)

    return result as IFile
}

export const getValidFile = async () => {
    const sql = 'select * from bt_file where validity = 1'

    const result = await execute(sql)

    return result as IFile[]
}

export const getFileListByUserId = async (id: string) => {
    const sql = `select * from bt_file where user_id = ${id}`

    const result = await execute(sql)

    return result as IFile[]
}