express + typescript实践

逻辑链路:
middleware -> routes(api) —> service —> mysql

代码结构:
-config # 配置目录
-src 
    -common # 公共类目录 *
        -Result.tx # 统一返回类型
    -enums # 枚举类型目录
        -ResultEnum # 返回的状态码和信息枚举
    -middleware # 中间件 *
        - index.ts # 项目启动类定义
        - registerExperssConfig.ts # 挂载express框架
        - registerNacosClient.ts # 挂载nacos clinet（注册中心 和 配置中心）
        - responseHeader.ts # 设置返回头（跨域配置）
        - validator.ts # 校验器
    -models # 数据模型层
    -routes  # 请求路由
        -index.ts # 路由挂载
        -api\private\v1 # 请求路径
    -service # 业务代码（具体逻辑实现）
    -types # 类型目录
    -utils # 工具类目录
        -DBUtils.ts 数据库连接工具类
        -log # 日志工具类 *
        -utils.ts # 配置加载工具 * 
    -app.ts # 主启动