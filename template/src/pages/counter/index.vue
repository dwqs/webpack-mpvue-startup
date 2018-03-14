<template>
  <div class="counter-warp">
    <p>Store counter：\{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/index" class="home">去往首页</a>
  </div>
</template>

<script>

{{#if_eq stateConf 'mobx'}}
import store from '@src/mobx/store.js';
{{/if_eq}}
{{#if_eq stateConf 'vuex'}}
import store from '@src/vuex/store.js';
{{/if_eq}}

export default {
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
    methods: {
        increment () {
            {{#if_eq stateConf 'mobx'}}
            this.changeCount('+');
            {{/if_eq}}
            {{#if_eq stateConf 'vuex'}}
            store.commit('increment');
            {{/if_eq}}
        },

        decrement () {
            {{#if_eq stateConf 'mobx'}}
            this.changeCount('-');
            {{/if_eq}}
            {{#if_eq stateConf 'vuex'}}
            store.commit('decrement');
            {{/if_eq}}
        }
    },

    mounted () {
        console.log('ssss---- counter', this.count);
    }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
