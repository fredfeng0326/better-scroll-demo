<template>
  <div>
    <div class="header">
      <h2>better-scroll 范例</h2>
    </div>
    <div class="tab" style="height: 44px;line-height: 44px">
      <router-link class="text-align: center" to="/horizontal">
        <span class="padding-bottom: 5px">横向滚动</span>
      </router-link>
      <router-link class="text-align: center" to="/vertical">
        <span class="padding-bottom: 5px">纵向滚动</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
