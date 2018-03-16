<script>
{{#if_eq stateConf 'mobx'}}
import store from '@src/mobx/store.js';
{{/if_eq}}
{{#if_eq stateConf 'vuex'}}
import { mapGetters } from 'vuex';
{{/if_eq}}

export default {
    {{#if_eq stateConf 'mobx'}}
    fromMobx: {
        test: store.test
    },
    {{/if_eq}}
    {{#if_eq stateConf 'vuex'}}
    computed: {
        ...mapGetters({
            count: 'getCount'
        })
    },
    {{/if_eq}}
    created () {
        // 调用API从本地缓存中获取数据
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        console.log('app created and cache logs by setStorageSync'{{#if state}}, this.count{{/if}})
    }
}
</script>

<style>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
}
</style>
