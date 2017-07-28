<template>
    <div class="top-nav">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">智岚科技</a>
          </div>


            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-out"></span>
                  退出
                </a>
              </li>
              <li><a href="#">中文</a></li>
            </ul>
        </div><!-- /.container-fluid -->
      </nav>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>

.top-nav .navbar-default{
  background-color: #283643;
}
  .top-nav .navbar{
    margin-bottom: 0;
    border-radius: 0;
    border:none;
  }
.navbar-default .navbar-nav>li>a:hover{
  color: #fff;
}
.navbar-default .navbar-nav>li>a:focus{
  color: #777;
}
</style>
