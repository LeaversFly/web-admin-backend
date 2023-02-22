import IUser from "../models/user";
import execute from "../utils/db";

export const getUser = async () => {
    const sql = 'select * from bm_user';

    const result = await execute(sql);

    return result as Array<IUser>;
}