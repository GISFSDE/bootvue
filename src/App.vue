<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// html中用new Vue形式
// Vue文件中用export default 形式
// var app8 = new Vue({
		// 	el: '#app-8',
		// 	data: {
		// 		vonceNotchange: '<span style="color:red">This should be red</span>',
		// 		isButtonDisabled: true,
		// 		attri: 1,
		// 		sp: "dwd wd www"
		// 	}
		// })
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0px;
    padding: 0px;
  }
</style> 