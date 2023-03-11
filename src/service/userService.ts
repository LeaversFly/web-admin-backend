import IUser from "../models/user";
import execute from "../utils/db";

export async function getUserList() {
    const sql = 'select * from bt_user';

    const result = await execute(sql);

    return result as Array<IUser>;
}

export async function getUserCount() {
    const sql = 'select count(*) from bt_user'

    const result = await execute(sql)

    return result[0]['count(*)'] as number
}

export const getUserById = async (id: string) => {
    const sql = `select * from bt_user where id = ${id}`;

    const result = await execute(sql);

    return result as IUser;
}