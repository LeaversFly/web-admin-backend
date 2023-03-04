import IUser from "../models/user";
import execute from "../utils/db";

export const getUserList = async () => {
    const sql = 'select * from bt_user';

    const result = await execute(sql);

    return result as Array<IUser>;
}

export const getUserById = async (id: string) => {
    const sql = `select * from bt_user where id = ${id}`;

    const result = await execute(sql);
    
    return result as IUser;
}