import Vue from 'vue';
import App from './App';
{{#if_eq stateConf 'vuex'}}
import store from './vuex/index';

Vue.prototype.$store = store;
{{/if_eq}}
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
    // 这个字段走 app.json
    config: {
        pages: [
            'pages/logs/logs', 
            '^pages/index/index', 
            {{#if state}}
            'pages/counter/counter'
            {{/if}}
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }
}
