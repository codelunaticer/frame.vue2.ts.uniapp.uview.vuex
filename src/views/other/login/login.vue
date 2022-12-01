<!--
 * @Author: mfxhb
 * @Date: 2022-12-01 10:18:12
 * @LastEditTime: 2022-12-01 15:31:23
 * @Description: 
-->
<template>
  <view>login </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Login",
  created() {
    console.log("用户名::", this.$vuex.state.login.username);
    console.log("密码::", this.$vuex.state.login.password);
  },
});
</script>

<style lang="scss" scoped></style>
