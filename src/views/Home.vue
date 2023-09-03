<template>
  <NavBar title="主页" />
  <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <SwipeItem v-for="silde in slides" :key="silde.id">
      <img :src="silde.img_url" :alt="silde.title">
    </SwipeItem>

  </Swipe>
</template>

<script lang="ts" setup>
import { getHomeData } from '@/service/home'
import { onMounted, reactive } from "vue"
import { NavBar, Swipe, SwipeItem } from 'vant'
interface Isilde {
  title: string,
  img_url: string,
  id: number,

}

const slides = reactive<Array<Isilde>>([]);
onMounted(async () => {
  const data = await getHomeData()
  const _slides: Array<Isilde> = data.data.slides
  slides.push(..._slides)
})

</script> 


<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  text-align: center;
  background-color: rgba(255, 255, 255, 0);

  img {
    width: 100%;
    height: 100%;
  }
}
</style>