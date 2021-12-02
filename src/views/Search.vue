<template>
  <div class="search">
    <p>Room key: </p>
    <form method="post" class="search-block">
      <div class="search-room-key">
        <input v-bind:type="passwordFieldType" name="password" required="" id="id_password">
        <i class="far" v-bind:class="eyeClass" id="togglePassword" style="margin-left: -30px; cursor: pointer;" @click="switchVisibility"></i>
      </div>
      <button type="submit" class="btn btn-primary fas fa-search"></button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent } from "vue";
export default defineComponent({
  setup() {

    //var password = ref("");
    var passwordFieldType = ref("password");
    var eyeClass = ref("fa-eye-slash");
    
    const switchVisibility = () => {
        passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
        eyeClass.value = eyeClass.value === "fa-eye-slash" ? "fa-eye" : "fa-eye-slash";
        console.log(passwordFieldType.value);
        console.log(eyeClass.value);
    };
    return { passwordFieldType, switchVisibility, eyeClass };
  },
});
</script>

<style scoped lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";
.search-block > .search-room-key > input{
    //border:none;
    border-top-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    border-bottom-width:1px;
    outline: none;
    z-index: 100;
}
.search-block > .search-room-key{
    margin-left:10px;
    margin-right:25px;
}
.search-block > .search-room-key > .far{
    width:20px;
}
.search-block{
    border:2px solid #000;
    border-radius: 10px;
    display: inline-flex;
    padding: 10px;
    align-items: center;
}

.search-block > button{
    //margin: 8px;
}

</style>
