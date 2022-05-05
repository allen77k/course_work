<template>
  <div id="app">
    {{ joke2 }}
    <router-view />
  </div>
</template>

<script>
  import apis from "@/apis";
  import { mapMutations, mapState } from "vuex";

  export default {
    name: "App",
    data() {
      return {
        joke: "",
        weather: ""
      };
    },
    methods: {
      //region 无参请求示例
      async fetchTest() {
        await this.$request.call(this, apis.test.jokeTest, "joke", (data) => {
          // console.log(App joke out --->, data);  // 第一种方式获取请求后的数据（使用回调）
          this.setJoke2(data);  // 将数据放入vuex state对象中
          // console.log('vuex joke2 out --->', this.joke2);
        });
      },
      //endregion

      //region 有参请求示例
      async fetchTest2() {
        const obj = { params: { city: "襄阳" } }; // 设置参数
        Object.assign(apis.test.weatherTest, obj); // 合并对象。将obj中的键值对浅拷贝weatherTest对象中
        await this.$request.call(this, apis.test.weatherTest, "weather"); // 获取数据后自动将数据绑定到weather上
        setTimeout(this.operation);  // 第二种方式获取数据（添加宏任务）
      },
      operation() {
        console.log("App weather out --->", this.weather);
        this.setWeather2(this.weather);
        console.log("vuex weather2 out --->", this.weather2);
      },
      //endregion

      ...mapMutations(["setJoke2", "setWeather2"])
    },
    computed: {
      ...mapState({ joke2: "joke2", weather2: "weather2" })
    },
    created() {
      this.fetchTest();
      this.fetchTest2();
    },
    mounted() {

    }
  };
</script>

<style>

</style>
