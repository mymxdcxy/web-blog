---
sidebarDepth: 0
---

## pm2部署node项目-简易命令

#### 安装
`npm install -g pm2`


#### 命令
* 启动进程(确保需要cd 到工程根目录) `pm2 start <file>` ，如Express脚手架生成的项目启动文件在`bin`目录下的`www.js`则运行 `pm2 start bin/www`
* 停止 指定/所有进程 `pm2 stop <id | all>`
* 重启 指定/所有进程 `pm2 restart <id | all>`
* 杀死 指定/所有进程 `pm2 delete <id | all>`
* 查看进程详情 `pm2 show <AppName | id>`
* 查看所有启动的进程列表 `pm2 list`
* 启动 `npm` 命令  `pm2 start npm --name '进程名称' --start`，`--start`是在`package.json`的 `scripts`对象里配置的，根据自身项目里对象配置的key决定       
* 配置文件启动 `pm2 start pm2.config.js`


#### 配置pm2的启动文件
* `pm2` 启动的方式可以进行很多的扩展，比如设置环境，设置错误信息打印，设置输入信息打印等等高级功能。那么一条命令就不能完成这些任务，所有 pm2 提供了配置文件的方式来启动～
* 在项目跟目录下新建 `pm2.config.js` 文件，内容如下:
```javascript
module.exports = {
  apps: [
    {
      name: 'name',  // 应用名称
      script: './bin/www.js',  // 启动文件地址
      cwd: './', // 当前工作路径
      watch:[ // 监控变化的目录，一旦变化，自动重启
        'src',
        'build'
      ],
      ignore_watch:[  // 忽略监听的文件目录
        'node_modules',
        'logs',
        'public',
      ],
      node_args: '--harmony',  // node的启动模式
      env:{
        NODE_ENV: 'development', // 设置运行环境，此时process.env.NODE_ENV的值就是development
        ORIGIN_ADDR: '' // process.env.REMOTE_ADDR
      },
      env_production:{
        NODE_ENV: 'production'
      },
      out_file: './logs/out.log',  // 普通日志输出
      error_file : './logs/err.log', //错误日志输出
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }   
  ]
}
```
