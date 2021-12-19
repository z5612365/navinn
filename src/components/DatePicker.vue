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
      :disabled-date="disabledDate"
      @change="emitOutside"
      @focus="refreshBookedDate"
    >
    </el-date-picker>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  watch,
  toRef,
  inject,
  getCurrentInstance,
} from "vue";
import axios from "axios";

export default defineComponent({
  props: {
    roomSeq: String,
  },
  setup(props, { emit }) {
    const internalInstance = getCurrentInstance();
    const roomSeq = toRef(props, "roomSeq");

    console.log("roomSeq: " + roomSeq.value);

    const dates = ref(new Date());
    var disabledDateList = ref();
    watch(dates, (newValue, oldValue) => {
      console.log("Prop changed: ", newValue, " | was: ", oldValue);
    });

    const emitOutside = () => {
      emit("emitOutside", dates.value);
    };

    const disabledDate = (time) => {
      var d1 = new Date(time);
      d1.setHours(0, 0, 0, 0);

      for (var disabledDateIndex in disabledDateList.value) {
        var d2 = new Date(disabledDateList.value[disabledDateIndex]);
        d2.setHours(0, 0, 0, 0);

        if (d1.getTime() === d2.getTime()) {
          return true;
        }
      }

      return false;
    };

    const refreshBookedDate = () => {
      if (internalInstance != null) {
        axios
          .post(
            internalInstance.appContext.config.globalProperties.$postUrl +
              "/getBookedDate?roomSeq=" +
              roomSeq.value
          )
          .then(function (response) {
            disabledDateList.value = response.data;
            console.log(
              internalInstance.appContext.config.globalProperties.$postUrl +
                "/getBookedDate?roomSeq=" +
                roomSeq.value
            );
            console.log("disabledDateList.value " + disabledDateList.value);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };

    return {
      dates,
      emitOutside,
      disabledDate,
      refreshBookedDate,
      disabledDateList,
    };
  },
});
</script>
