<template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
