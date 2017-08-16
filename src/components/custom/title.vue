<!-- html -->
<template>
  <div class="title">
    <h1 v-if="false"><slot>zx-cli</slot></h1>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'title',
  props: [],
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    updateTitle () {
      let slots = this.$slots.default
      if (typeof slots === 'undefined' ||
        slots.length < 1 ||
        typeof slots[0].text !== 'string') return
      let {text} = slots[0]
      let {title} = document
      if (text !== title) document.title = text
    }
  },
  created () {
    this.updateTitle()
  },
  beforeUpdate () {
    this.updateTitle()
  }
}
</script>

<!-- css -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
