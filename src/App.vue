<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import apis from "@/apis";

  export default {
    name: "App",
    methods: {
      async fetchTest() {
        const res = await this.$request(apis.test);
        console.log(res);
      }
    },
    created() {
      this.fetchTest();
    },
    mounted() {

    }
  };
</script>

<style>

</style>
