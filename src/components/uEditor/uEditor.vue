<template>
  <div class="">
    <script id="container" name="content" type="text/plain">
      这里写你的初始化内容
    </script>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../static/ueditor/ueditor.config.js'
  import '../../../static/ueditor/ueditor.all.js'
  import '../../../static/ueditor/lang/zh-cn/zh-cn.js';
  export default {
    props: {
      //配置可以传递进来
      ueditorConfig: {},
      ueditorDisable: {
        type: Boolean
      },
      ueditorContent: {},
    },
    data () {
      return {
        //编辑器实例
        instance: null,
      };
    },
    //此时--el挂载到实例上去了,可以初始化对应的编辑器了
    mounted () {
      this.initEditor()
    },
    beforeDestroy () {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.instance !== null && this.instance.destroy) {
        this.instance.destroy();
      }
    },
    watch: {
      ueditorDisable: function (val) {
        if (val) {
          this.instance.setDisabled();
        } else {
          this.instance.setEnabled();
        }
      },
      ueditorContent:function (val,old) {
        if (val != old){
          this.setUeditorContent();
        }
      }
    },
    methods: {
      initEditor () {
        //dom元素已经挂载上去了
        this.instance = UE.getEditor('container', this.ueditorConfig);
        // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
        this.instance.addListener('ready', () => {
          this.$emit('ready', this.instance);
        });
      },
      setUeditorContent(){
        this.instance.setContent(this.ueditorContent)
      }
    }
  }
</script>
