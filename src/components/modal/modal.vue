<template>
    <div class="modal-box" v-show="status.show">
      <div class="modal-inner">
        <h1 class="modal-box-title">
          下线文章提示
        </h1>
        <div class="content">
          确定要下线此文章？？此操作不可逆转！！！
        </div>
        <div class="button-group">
          <button class="btn btn-primary" @click="confirm">确定</button>
          <button class="btn btn-danger" @click="cancel">取消</button>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            status:{
                type:Object
            }
        },
        data(){
            return{
              modalStatus:true
            }
        },
      methods:{
        cancel:function () {
          this.status.show = false;
        },
        confirm(){
            this.status.show = false;
            this.$emit('confirm')
        }
      }
    }
</script>

<style scoped>
  .modal-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-box .modal-inner{
    max-width: 400px;
    max-height: 200px;
    background-color: #fff;
    border-radius: 5px;
    color: rgb(51,51,51);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .modal-box .modal-box-title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    padding-left: 10px;
  }
  .modal-box .content{
    padding: 10px;
    min-height: 100px;
    border-bottom: 1px dashed #e5e5e5;
  }
  .modal-box .button-group{
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
  .modal-box .button-group .btn{
    margin: 0 5px;
  }
</style>
