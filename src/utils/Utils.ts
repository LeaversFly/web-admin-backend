import config from 'config';

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

    private constructor() {
    }
}

export default Utils;