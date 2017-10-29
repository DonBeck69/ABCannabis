<template>
  <div class="well">
    <div class="panel panel-success" v-for="item in MedicalBenefits" :key="item.id">
      <div class="panel-heading">
        <h2 class="panel-title">{{item.header}}</h2>
      </div>
      <div class="panel-body">
          <p>{{item.copy}}</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only 
<style lang="sass" scoped>
  @import '../mq'
</style>-->