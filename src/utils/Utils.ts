import config from 'config';

const REGEXP = {
    Mail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
}

class Utils {
    private static instance: Utils;
    private randomString = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";

    public static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    public getConfig<T>(setting: string) {
        if (config.has(setting)) {
            return config.get<T>(setting);
        }
        return {};
    }

    // 下滑线转驼峰
    public static _ToHump(data: { [index: string]: string }) {
        if (!data) {
            return {};
        }

        let result: { [index: string]: string } = {};
        for (const key in data) {
            const value = key.replace(/\_(\w)/g, function (match, letter) {
                return letter.toUpperCase();
            });
            result[value] = data[key];
        }
        return result;
    }

    // 驼峰转下划线
    public static HumpTo_(data: { [index: string]: string }) {
        if (!data) {
            return {};
        }

        let result: { [index: string]: string } = {};
        for (const key in data) {
            const value = key.replace(/[A-Z]/g, function (match, letter) {
                return "_" + letter.toUpperCase();
            });
            result[value] = data[key];
        }
        return result;
    }

    public getRandomVerfiyCode(len = 8) {
        if (len <= 0) {
            len = 6;
        }
        let str = "";
        const randomStrLength = this.randomString.length;
        for (let i = 0; i < len; i++) {
            let randomIndex = Math.floor(Math.random() * (randomStrLength - 1));
            if (i % 2 === 0) {
                randomIndex = - randomIndex;
            }
            str += this.randomString.at(randomIndex);
        }
        return str;
    }

    // 正则表达式检查邮箱是否合法
    public static isMail(mail: string) {
        if (!mail) {
            return false;
        }
        return REGEXP.Mail.test(mail);
    }

    private constructor() {
    }
}

export default Utils;