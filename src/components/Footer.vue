<template>
  <div class="footer">
    <div class="contact">
        Tel: +886 00000000
        <br/>
        Addr: Taiwan(ROC)
    </div>
    <div class="social">
        facebook
        <br/>
        line
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
    display: flex;
    background: black;
    padding: 20px;
}
.contact{
    background: gray;
    margin: 20px;
}
.social{
    background: gray;
    margin: 20px;
}

</style>
