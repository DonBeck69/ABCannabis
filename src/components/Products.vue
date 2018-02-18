<template>
  <div class="well">
    <div class="panel panel-success" v-for="item in products" :key="item.id">
      <div class="panel-heading">
        <h2 class="panel-title">{{item.header}}</h2>
      </div>
    <div class="panel-body">
        <p v-for="prod in item.copy" :key="prod.id">{{prod}}</p>
        <table class="table">
          <thead>
            <th scope="col">Package</th>
            <th scope="col">Price</th>
          </thead>
          <tbody>
            <tr v-for="price in item.pricing" :key="price.id" scope="row">
              <td>{{price.package}}</td>
              <td>{{price.cost}}</td>
            </tr>
          </tbody>
        </table>
    </div>

  </div>
  </div>
</template>


<script>
import Copy from '../Copy/copy.json';

export default {
  name: 'benefits',
  data: function(){
    return Copy.copy;
  }}
</script>

