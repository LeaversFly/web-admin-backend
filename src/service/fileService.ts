import execute from "../utils/db"
import IFile from "../models/file"

export const getFileList = async () => {
    const sql = 'select * from bt_file'

    const result = await execute(sql)

    return result as Array<IFile[]>
}

export const getFileById = async (id: string) => {
    const sql = `select * from bt_file where id = ${id}`

    const result = await execute(sql)

    return result as IFile
}