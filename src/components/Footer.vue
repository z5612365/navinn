<template>
  <div class="footer">
    <div class="contact">
      Tel: +886 00000000
      <br />
      Addr: Taiwan(ROC)
    </div>
    <div class="social">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
      <br />
      line
    </div>
  </div>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  display: flex;
  background: black;
  padding: 20px;
}
.contact {
  color: rgb(207, 207, 207);
  margin: 20px;
}
.social {
  color: rgb(207, 207, 207);
  margin: 20px;
}
</style>
