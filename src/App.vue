<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/home/Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
</style>
