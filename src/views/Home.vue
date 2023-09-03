<template>
  <div class="home_page">
    <NavBar title="主页" />
    <!-- 轮播图 -->
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <SwipeItem v-for="silde in slides" :key="silde.id">
        <img :src="silde.img_url" :alt="silde.title">
      </SwipeItem>
    </Swipe>
    <NoticeBar left-icon="volume-o" text="欢迎用户前来本网页购物，本网站销售互联网技术的相关书籍。" />
    <Grid :column-num="4" :border="false">
      <GridItem v-for="goods in goods_list" :key="goods.id">
        <VanImage :src="goods.cover_url" width="4rem" />
        <span class="book_name">{{ goods.title }}</span>
      </GridItem>
    </Grid>
  </div>
</template>

<script lang="ts" setup>
import { getHomeData } from '@/service/home'
import { onMounted, reactive } from "vue"
import { NavBar, Swipe, SwipeItem, Grid, GridItem, NoticeBar, Image as VanImage } from 'vant'
interface Isilde {
  title: string,
  img_url: string,
  id: number,
}
interface Goods {
  id: number,
  title: string,
  cover_url: string
}

const slides = reactive<Array<Isilde>>([]);
const goods_list = reactive<Array<Goods>>([]);
onMounted(async () => {
  const data = await (await getHomeData()).data
  console.log(data);

  const _slides: Array<Isilde> = data.slides
  const _good_list: Array<Goods> = data.goods.data.slice(0, 4)
  slides.push(..._slides)
  goods_list.push(..._good_list)
})

</script> 


<style lang="scss" scoped>
.home_page {
  background-color: #f0f0f0;
  .my-swipe .van-swipe-item {
    text-align: center;
    background-color: rgba(255, 255, 255, 0);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .book_name {
    text-align: center;
    color: #999;
    font-size: 10px;
  }
}
</style>