<template>
  <div id="home">
    <router-link v-if="item.meta.inmap === '1'" :to="{ path: item.path}" v-for="(item, key) in routelist.routes" :key="key">{{item.meta.title}}</router-link>
  </div>
</template>

<script>
export default{
  name: 'home',
  data () {
    return {
      routelist: []
    }
  },
  created () {
    this.routelist = this.$router.options
  },
  methods: {
  }
}
</script>
<style>
#home {
  padding: 20px 10px;
  background-color: #ffffff;
}
#home a {
  display: grid;
  background-color: #efefef;
  color: #333;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  text-decoration-line: none;
}
</style>
