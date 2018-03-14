# webpack-mpvue-startup

A template with webpack 3 + mpvue 1 setup for projects startup.

## Install/安装

Install it by [chare](https://github.com/dwqs/chare) or [vue-cli](https://github.com/vuejs/vue-cli)/可以通过 [chare](https://github.com/dwqs/chare) 或者 [vue-cli](https://github.com/vuejs/vue-cli) 来安装：

```
chare init dwqs/webpack-mpvue-startup your-project-name -o remote-url-of-your-project
```

Above command will init your project with this template, and associate it with the remote url./上述命令会初始你的项目, 并将你的项目关联到远程的 `remote-url`.

## 字段说明

如果通过 [chare](https://github.com/dwqs/chare) 或者 `vue-cli` 来安装, 在安装的过程中，会需要输入一些基本信息，可以查看 [meta.js](https://github.com/dwqs/webpack-mpvue-startup/blob/master/meta.js) 来了解. 咨询的信息都有默认值, 一般选择默认就行, 模板生成之后也可以再更改.

 * **state**: 状态管理工具选择，目前支持 vuex / mobx

 ## 状态全局共享
 由于目前 mpvue 并不支持全局注入 `vuex`，所以各页面之间并不能共享 store；如果你想使用 `vuex`，可以用一个曲线的方式进行 store 的全局共享：将 `store` 打包到 `vendor.js` 里面去。

Vue 代码经过打包之后，会提取 commons chunk 打包到 `vendor.js` 中，这个 js 文件是每个页面的入口文件所依赖的。在应用初始化的时候初始化全局的 `store`， 更改 `CommonsChunkPlugin`： 

```js

// ...
new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module, count) {
    return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf('node_modules') >= 0
    ) || /store/.test(module.resource)
    }
}),
// ...
```

## TODO

* 增加对 [Revuejs](https://github.com/dwqs/revuejs) 的支持
