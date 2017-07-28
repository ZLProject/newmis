<template>
  <div class="">
    <router-link to="/article/addArticle" class="btn btn-primary addBtmMargin">添加文章</router-link>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>HTML5标题</th>
        <th>分享描述</th>
        <th>客户名称</th>
        <th>分享数</th>
        <th>二维码</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tabList">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.desc}}</td>
        <td>{{item.name}}</td>
        <td>{{item.shareNum}}</td>
        <td>{{item.shareNum}}</td>
        <td>
          <router-link :to="'/article/'+ item.id +'/editor'" class="btn btn-default">编辑</router-link>
          <button class="btn btn-danger" @click="offLineFn">下线</button>
        </td>
      </tr>
      </tbody>
    </table>
    <page :pageInfo="pageInfo" @change="pagechange"></page>
    <modal @confirm="modalConfirm" :status="modalStatus"></modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import page from '../page/page.vue';
  import modal from '../modal/modal.vue';
  export default {
    data(){
      return {
        pageInfo: {
          total: 100,  // 记录总条数   默认空，如果小于pageNum则组件不显示   类型Number
          current: 1,  // 当前页数，   默认为1                             类型Number
          pagenum: 10, // 每页显示条数,默认10                              类型Number
          pagegroup: 5,    // 分页条数     默认为5，需传入奇数                 类型Number
          skin: '#16a086'  // 选中页码的颜色主题 默认为'#16a086'               类型String
        },
        tabList: {},
        modalStatus:{
            show:false
        }
      }
    },
    mounted(){
      this.getPageData(1)
    },
    methods: {
      pagechange(current){
        this.getPageData(current);
        console.log(current);
      },
      getPageData(current){
        this.$http.get('http://www.zhilandaren.com/share/getList', {
          params: {
            pn: (current - 1) * 10,
            rn: this.pageInfo.pagenum
          }
        }).then((response) => {
          response = response.body;
          this.tabList = response.list;
          this.pageInfo.total = response.num;
          console.log(response);
        })
      },
      modalConfirm(){
          //弹出框点击确定操作
          console.log('点击确定')
      },
      offLineFn(){
          this.modalStatus.show = true;
      }
    },
    components: {
      page,
      modal
    }
  }
</script>

<style scoped>
  .addBtmMargin {
    margin-bottom: 20px;
  }
</style>
