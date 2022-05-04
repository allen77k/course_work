<template>
  <div id="app">
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
        jokes: "",
        weather: ""
      };
    },
    methods: {
      // 无参请求
      async fetchTest() {
        await this.$request.call(this, apis.test.jokeTest, "jokes", (data) => {
          // console.log(data);  // 第一种方式获取数据
        });
        setTimeout(this.getData);  // 第二种方式获取数据
      },
      getData: function() {
        // console.log(this.jokes);
      },

      // 有参请求
      async fetchTest2() {
        const obj = { params: { city: "襄阳" } }; // 设置参数
        Object.assign(apis.test.weatherTest, obj); // 合并对象。将obj中的键值对浅拷贝weatherTest对象中
        await this.$request.call(this, apis.test.weatherTest, "weather", (data) => {
          console.log("App variable 输出---->", data);
          this.setWeather2(data);  // 设置vuex的state对象
          console.log("vuex variable 输出---->",this.weather2);
        });
      },

      ...mapMutations(["setJoke2", "setWeather2"])
    },

    computed: {
      ...mapState(["joke2", "weather2"]),
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
