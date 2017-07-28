<template>
    <div class="nav-wrapper">
      <nav class="navbar-default navbar-side" role="navigation">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation" class="active">
            <a href="#">
              <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
              打印统计
            </a>
          </li>
          <li role="presentation">
            <a href="#">
              <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
              我的机器
            </a>
          </li>
          <li role="presentation">
            <a href="#">
              <span class="glyphicon glyphicon-film" aria-hidden="true"></span>
              视频广告
            </a>
          </li>
          <li role="presentation">
            <a href="#">
              <span class="glyphicon glyphicon-open" aria-hidden="true"></span>
              上传
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
.nav-wrapper .navbar-default{
  width: 260px;
  background-color: #283643;
  color: #fff;
}
.nav-wrapper .nav-pills>li>a{
  border-radius: 0;
}
  .nav-pills>li{
    border-bottom: 1px solid rgba(107, 108, 109, 0.19);
  }
.nav>li>a:focus, .nav>li>a:hover{
  background-color: #283643;
  color: #7e8c8d;
}
.nav-pills>li.active>a{
  background-color: #1cc09f ;
  color: #fff;
}
.glyphicon{
  vertical-align: middle;
  top:0;
  padding: 8px;
}
</style>
