<template>
  <div class="block">
    <span class="demonstration">Choose Date: </span>
    <el-date-picker
      v-model="dates"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
      value-format="YYYY-MM-DD"
      @change="emitOutside"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const dates = ref();

    console.log(dates);
    watch(dates, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
      
    });

    const emitOutside = () => {
      emit("emitOutside", dates.value);
    };


    return { dates, emitOutside };
  },
});

</script>
