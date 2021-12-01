<template>
  <div class="search">
    <p>Room key: </p>
    <form method="post" class="search-block">
        <input v-bind:type="passwordFieldType" name="password" autocomplete="current-password" required="" id="id_password">
        <i v-bind:class="eyeClass" id="togglePassword" style="margin-left: -30px; cursor: pointer;" @click="switchVisibility"></i>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent } from "vue";
export default defineComponent({
  setup() {

    //var password = ref("");
    var passwordFieldType = ref("password");
    var eyeClass = ref("far fa-eye");
    
    const switchVisibility = () => {
        passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
        eyeClass.value = eyeClass.value === "far fa-eye" ? "far fa-eye-slash" : "far fa-eye";
        console.log(passwordFieldType.value);
        console.log(eyeClass.value);
    };
    return { passwordFieldType, switchVisibility, eyeClass };
  },
});
</script>

<style scoped lang="scss">
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";
input{
    //border:none;
    border-top-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    border-bottom-width:1px;

}
.search-block{
    border:2px solid #000;
    display: inline-flex;
    padding: 2px;
    align-items: center;
}

.search-block > button{
    margin: 8px;
}

</style>
