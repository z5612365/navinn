<template>
  <div class="table-comp">
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>2018</th>
          <th>2017</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale,i) in sales[0]" :key="i">
          <th scope="row">{{ sale.Month  }}</th>  
          <td>{{ sale.Sale }}</td> 
          <td>{{ sales[1][i].Sale }}</td>  
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {

    var sales=reactive([[{'Year': '2018', 'Month': '01', 'Sale': '512'}, {'Year': '2018', 'Month': '02', 'Sale': '1025'}],[{'Year': '2017', 'Month': '01', 'Sale': '155'}, {'Year': '2017', 'Month': '02', 'Sale': '12'}]]);

    return {sales};
  },
});


</script>