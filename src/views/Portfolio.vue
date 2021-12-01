<template>
  <div class="portfolio">
    <h1>page</h1>
    <!-- TODO v-for photo collection -->
    
    <div class="flex-container">
      <div class="image-container" v-for="image in images" :key="image">
        <div class="image-container-inside">
          <span>{{image.desc}}</span>
          <img :src="image.url" :alt="image.alt"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data () {
    return {
        images: [
            { url: 'https://static.wixstatic.com/media/f8bcfe_88faba1487494738bb0739e849d82e55~mv2.jpg/v1/fill/w_900,h_900,q_90/f8bcfe_88faba1487494738bb0739e849d82e55~mv2.webp', alt: '', desc: 'photo1' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_ac185cf6a839467aaed0c8ac2ceb2741~mv2.jpg/v1/fill/w_900,h_900,q_90/f8bcfe_ac185cf6a839467aaed0c8ac2ceb2741~mv2.webp', alt: '', desc: 'photo2' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_3579df5e727c41528aadbe75da54c894~mv2.jpg/v1/fill/w_900,h_900,q_90/f8bcfe_3579df5e727c41528aadbe75da54c894~mv2.webp', alt: '', desc: 'photo3' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_17c9bf0e39df4a9b91937a2323d9b554~mv2.jpg/v1/fill/w_450,h_450,q_90/f8bcfe_17c9bf0e39df4a9b91937a2323d9b554~mv2.webp', alt: '', desc: 'photo4' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_74b221da6bc644aba81e1325bf13f8a6~mv2.jpg/v1/fill/w_450,h_450,q_90/f8bcfe_74b221da6bc644aba81e1325bf13f8a6~mv2.webp', alt: '', desc: 'photo5' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_f6081909e3c5412ca61263332cc92a2d~mv2.jpg/v1/fill/w_450,h_450,q_90/f8bcfe_f6081909e3c5412ca61263332cc92a2d~mv2.webp', alt: '', desc: 'photo6' },
            { url: 'https://static.wixstatic.com/media/f8bcfe_ad34d1310c79479e9645972db0d9756e~mv2.jpg/v1/fill/w_450,h_450,q_90/f8bcfe_ad34d1310c79479e9645972db0d9756e~mv2.webp', alt: '', desc: 'photo7' }
        ]
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.flex-container > .image-container{
  overflow: hidden;
  width: 500px;
  height: 500px;
  margin: 15px;
  background-color: blue;
  outline: 2px solid white;
  outline-offset: -30px;
}

.flex-container > .image-container > .image-container-inside{
  position: relative;
  overflow: hidden;
  width: inherit;
  height: inherit;
  transition: all 0.4s ease-out;
  opacity: 0.88;
}

.flex-container > .image-container > .image-container-inside > img{
  position: absolute;
  left: 50%;
  top: 50%;
  height: inherit;
  width: inherit;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.flex-container > .image-container > .image-container-inside:hover{
  backface-visibility: hidden;
  transform: scale(1.15, 1.15);
  opacity: 1;
}

.flex-container > .image-container > .image-container-inside:hover span{
  opacity: 0;
}

.flex-container > .image-container > .image-container-inside > span{
  position: absolute;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: 24px;
  padding: 10px 50px;
  margin: 0 130px;
  left: 0;
  right: 0;
  top: calc(250px - 25px);
  z-index: 2;
  transition: all 0.3s ease-out;
}

</style>

