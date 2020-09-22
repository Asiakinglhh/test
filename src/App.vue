<template>
  <div id="app">
    <!-- <v-alipay /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Element from './components/Element.vue'

export default {
  name: 'App',
  components: {
    // 'v-alipay': Element
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
