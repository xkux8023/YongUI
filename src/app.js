import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'

Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)

new Vue({
    el:"#app",
    data: {
      loading: false
    }
})
