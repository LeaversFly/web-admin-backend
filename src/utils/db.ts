import Utils from "./Utils";
const mysql = require("mysql2");

const config = Utils.getInstance().getConfig<object>("db_config") as object;

const pool = mysql.createPool(config);

const execute = (sql: string) => {
    return new Promise<any>((resolve, reject) => {
        pool.getConnection((error: any, connection: any) => {
            if (error) {
                reject(error);
            } else {
                connection.query(sql, (error: any, results: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                    connection.release(); // 释放该链接，把该链接放回池里供其他人使用
                });
            }
        });
    });
}

export default execute;