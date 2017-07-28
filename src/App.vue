<template>
  <div id="app" class="home">
    <topNav></topNav>
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="main">
      <!--<tab></tab>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/left-nav/left-nav.vue'
  import topNav from '@/components/top-nav/top-nav.vue'
  import tab from '@/components/tab/tab'
  export default {
    name: 'index',
    components: {
      leftNav,
      topNav,
      tab
    }
  }
</script>

<style>
  @import "../static/bootstrap-3.3.7/css/bootstrap.min.css";
  @import "assets/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
  .home {
    overflow: hidden;
  }

  .home .left, .home {
    height: 100%;
  }

  .home .left {
    float: left;
    background-color: #283643;
  }

  .home .main {
    padding: 20px;
    margin-left: 260px;
  }
</style>
