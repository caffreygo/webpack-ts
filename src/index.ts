/**
 * import的数据未使用 webpack会自动删除
 * 
 * 在webpack dev server下，资源从内存中获取，需要设置publicPath，该路径相对于public: /dist/
 * 开发模式动态生成的html模板会引入 /dist/entry.js, 生产模式则是由我们自己的html模板决定
 * 
 * 支持Es6 import需要将ts.config.js的module设置为es6或者更高版本，最终编译结果的版本target也可以选择es6
 */
import { title, JC } from "./User";

console.log(JC.name);
