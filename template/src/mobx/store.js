import Vue from 'vue';
import { observable, isObservable, toJS } from 'mobx';
import VueMobx from 'vue-mobx';

import TestModel from './test';

// 因为 vue-mobx 要求 Vue 的版本 >= 2
// 而 mpvue 的目前版本是 1.x
// 所以这里加一个 version 属性 绕过检测
Vue.version = '2.0.1';

Vue.use(VueMobx, {
    toJS: toJS, // must
    isObservable: isObservable, // must
    observable: observable // optional
});

// models
export default {
    test: TestModel
};
