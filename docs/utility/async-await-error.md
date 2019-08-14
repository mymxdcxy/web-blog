---
sidebarDepth: 0
---

## async await优雅的捕获错误

#### 通常处理async await的错误是使用:
```javascript
try{
  
}catch(e){

}
```
假如有多个async await ↓
```javascript
async function http() {
  try{
    await ajax1()
    await ajax2()
    await ajax3()
    // ...
  }catch(e){
    console.log(e)
  }
}
```
以上这种方式只能捕获第一个错误 ↑，如果使用 `try catch` 嵌套捕获每个错误，首先代码的可读性很差，其次也影响性能



#### 如何更优雅的处理：
* 1、自己手动写一个函数处理一下 `promise`返回结果
 ```javascript
export default function to(promise) {
  return promise.then(data => {
    return [null, data];
  }).catch(err => [err]);
}

//使用
async function http() {
    let [err1,data1] = await to(ajax1())
    let [err2,data2] = await to(ajax2())
    let [err3,data3] = await to(ajax3())  
}
 ```
* 2、使用第三方别人已经封装好的`await-to-js`模块
 ```javascript
// 首先下载安装 npm install await-to-js -S

import to from 'await-to-js'

//使用
async function http() {
    let [err1,data1] = await to(ajax1())
    let [err2,data2] = await to(ajax2())
    let [err3,data3] = await to(ajax3())  
}
 ```


