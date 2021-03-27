<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import Chat from './Chat.vue'
import Close from './Close'
import ArrowRight from './ArrowRight'

export default {
  components: { Loading, Chat, Copy, ChevronDown, Close, ArrowRight },
  props: {
    name: { type: String, required: true }
  }
}
</script>
