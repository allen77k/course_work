<template>
  <div id="login"></div>
</template>

<script>
  export default {
    name: "Login",
    mounted() {
      console.log("login page 输出---->", this.$store.state.weather2);
    }
  };
</script>

<style scoped>

</style>