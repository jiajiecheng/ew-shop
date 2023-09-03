<script setup lang="ts">
import { ref } from 'vue'
import { Tabbar, TabbarItem, NavBar } from 'vant';


</script>

<template>
  <router-view />
  <Tabbar route>
    <TabbarItem replace to="/home" icon="home-o">首页</TabbarItem>
    <TabbarItem replace to="/category" icon="apps-o">分类</TabbarItem>
    <TabbarItem replace to="/shopping" icon="shopping-cart-o">购物车</TabbarItem>
    <TabbarItem replace to="/center" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<style>
:root:root {
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-background: #ffa666;
  --van-tabbar-item-active-color: #ffa666;
}
</style>
