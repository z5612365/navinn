<template>
  <div class="block">
    <span class="demonstration">Choose Date: </span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

// export default defineComponent({
//   setup() {
//     var value1=reactive( Date());
//     return {value1};
//   },
// });

export default {
  data() {
    return {
      value1: ''
    };
  }
};
</script>