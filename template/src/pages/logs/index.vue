<template>
  <div>
    {{#if state}}
    <p>Store counter：\{{ count }}</p>
    {{/if}}
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@src/utils/index'
import card from '@components/card'

{{#if_eq stateConf 'mobx'}}
import store from '@src/mobx/store.js';
{{/if_eq}}
{{#if_eq stateConf 'vuex'}}
import store from '@src/vuex/store.js';
{{/if_eq}}

export default {
    components: {
        card
    },

    data () {
        return {
            logs: []
        }
    },
   {{#if_eq stateConf 'mobx'}}
    fromMobx: {
        test: store.test
    },
    {{/if_eq}}
    {{#if_eq stateConf 'vuex'}}
    computed: {
        count () {
            return store.state.count;
        }
    },
    {{/if_eq}}

    created () {
        const logs = (wx.getStorageSync('logs') || [])
        this.logs = logs.map(log => formatTime(new Date(log)))
    }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
