import Vue from 'vue'
import wrapBox from './main.vue'

const wrapBoxConstructor = Vue.extend(wrapBox)

const instance = new wrapBoxConstructor({
    el: document.createElement('div')
})
wrapBoxConstructor.prototype.open = () => {
    document.body.appendChild(instance.$el)
    instance.visible = true
}

wrapBoxConstructor.prototype.close = () => {
    instance.visible = false
    setTimeout(() => {
        const el = instance.$el
        el.parentNode && el.parentNode.removeChild(el)
    }, 300)
}

export default {
    open: instance.open,
    close: instance.close
}
