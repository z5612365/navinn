<template>
  <div class="main-container">
    <div class="portfolio">

      <!-- TODO v-for photo collection -->
      <div class="flex-container">
        <div class="image-container" v-for="image in images" :key="image">
          <div class="image-container-inside" @click="goBookingDetailPage(image.roomSeq)">
            <span>{{ image.roomDesc }}<br>Price: {{ image.roomPrice }}</span>
            <img :src="image.roomUrl" :alt="image.roomAlt"  />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import Footer from "@/components/Footer.vue";
import router from "@/router/index.ts";
import axios from "axios"

export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    const images = ref();
    axios
      .post('http://localhost:8081/getRoomInfo')
      .then(function (response) {
        console.log(response.data);
        images.value=response.data
      })
      .catch(function (error) {
        console.log(error);
    });

    const goBookingDetailPage = (roomSeq: string) => {
      console.log(roomSeq);
      router.push({ name: 'BookingDetail', params: { roomId: roomSeq }});
    };

    const internalInstance = getCurrentInstance();
    const loader =
      internalInstance != null
        ? internalInstance.appContext.config.globalProperties.$loading.show({})
        : null;
    loader.hide();

    return {
      images,
      goBookingDetailPage,
    };
  },
});
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container .portfolio {
  flex: 1;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.flex-container > .image-container {
  overflow: hidden;
  width: 500px;
  height: 500px;
  margin: 15px;
  background-color: blue;
  outline: 2px solid white;
  outline-offset: -30px;
}

.flex-container > .image-container > .image-container-inside {
  position: relative;
  overflow: hidden;
  width: inherit;
  height: inherit;
  transition: all 0.4s ease-out;
  opacity: 0.88;
}

.flex-container > .image-container > .image-container-inside > img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: inherit;
  width: inherit;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
}

.flex-container > .image-container > .image-container-inside:hover {
  backface-visibility: hidden;
  transform: scale(1.15, 1.15);
  opacity: 1;
}

.flex-container > .image-container > .image-container-inside:hover span {
  opacity: 0;
}

.flex-container > .image-container > .image-container-inside > span {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  margin: 0 130px;
  left: 0;
  right: 0;
  top: calc(250px - 10px);
  z-index: 2;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
</style>
