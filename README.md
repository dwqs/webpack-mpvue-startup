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
 由于目前 mpvue 并不支持全局注入 `vuex`，所以各页面之间并不能共享 store；如果你想使用 `vuex`，可以用一个曲线的方式进行 store 的全局共享：

 * 将 `store` 打包到 `vendor.js` 里面去。 Vue 代码经过打包之后，会提取 commons chunk 打包到 `vendor.js` 中，这个 js 文件是每个页面的入口文件所依赖的。在应用初始化的时候初始化全局的 `store`， 更改 `CommonsChunkPlugin`： 

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

这种方式的缺点是不能使用 Vuex 提供的 `map*` 函数，如 `mapActions`、`mapGetters` 等，因为这些是 `this.$store` 的一个语法糖，而 mpvue 没法全局注入 Vuex，因而组件实例上并没有 `$store`，所以只能直接访问 `store` 实例进行相关操作。

* 直接在原型上定义 `$store`。 Vuex 会在组件的 `beforeCreate` 钩子中将 `store` 实例挂载到组件实例上去，代码见 [vuexInit](https://github.com/vuejs/vuex/blob/dev/src/mixin.js#L22-L33)，因而可以在应用初始化时直接将 `store` 实例定义在原型上：

```js
// ...
import Vue from 'vue';
import store from 'path/to/store';

Vue.prototype.$store = store;
//...
```

这样每个组件实例上都会 `$store`，可以使用 Vuex 的完整功能。

## TODO

* 增加对 [Revuejs](https://github.com/dwqs/revuejs) 的支持
