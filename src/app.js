import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'

Vue.component('y-button',Button)
Vue.component('y-icon',Icon)

new Vue({
    el:"#app",
    data: {
      loading: false
    }
})
