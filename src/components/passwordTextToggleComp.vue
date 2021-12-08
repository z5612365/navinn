<template>
  <div class="passwordText">
    <p>Room key: </p>
    <div class="search-block">
      <div class="search-room-key">
        <input v-bind:type="passwordFieldType" name="password" required="" id="id_password">
        <i v-if="eyeClass" id="togglePassword" style="margin-left: -30px; cursor: pointer;" @click="switchVisibility"><font-awesome-icon :icon="['fa', 'eye']" /></i>
        <i v-if="!eyeClass" id="togglePassword" style="margin-left: -30px; cursor: pointer;" @click="switchVisibility"><font-awesome-icon :icon="['fa', 'eye-slash']" /></i>
      </div>
      <button type="submit" class="btn btn-primary fas fa-search" @click="getRoomInfo"><font-awesome-icon :icon="['fa', 'search']" /></button>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, DefineComponent, inject } from "vue";
import axios from "axios";

export default defineComponent({
  components: {

  },
  setup() {

    const dblocation = inject("dblocation");

    //var password = ref("");
    var passwordFieldType = ref("password");
    var eyeClass = ref(false);
    
    const switchVisibility = () => {
        passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
        eyeClass.value = eyeClass.value === false ? true : false;
        console.log(passwordFieldType.value);
        console.log(eyeClass.value);
    };

    const getRoomInfo = () => {
        axios
          .post(dblocation + "customer/queryWithCustomerId", {
            //requestBody: { actionInfo: null, requestItem: searchContent },
          })
          .then((response) => {
            console.log("yes");
          //   CustomerName.value =response.data.resultBody.responseResult.customerName;
          })
          .catch((error) => {
            console.log(error);
          });
    };

    return { passwordFieldType, switchVisibility, eyeClass, getRoomInfo };
  },
});
</script>

<style scoped lang="scss">
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
.search-block > .search-room-key > i > font-awesome-icon {
    width:30px;
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
