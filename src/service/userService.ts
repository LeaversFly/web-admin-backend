import IUser from "../models/user";
import { IPage } from "../types";
import execute from "../utils/db";

export async function getUserList(query: any) {
    const { pageNum, pageSize }: IPage = query

    const sql = `select * from bt_user 
    order by id desc 
    limit ${(pageNum - 1) * pageSize},${pageSize}`

    const result = await execute(sql);

    return result as Array<IUser>;
}

export async function getUserSum() {
    const sql = 'select count(*) from bt_user'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export async function getUserById(id: string) {
    const sql = `select * from bt_user where id = ${id}`;

    const result = await execute(sql);

    return result as IUser;
}

export async function updateRemainById(id: string, remain: string) {
    const sql = `update bt_user set remain = ${remain} where id = ${id}`;

    const result = await execute(sql)

    return true
}