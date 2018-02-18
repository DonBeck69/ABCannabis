<template>
  <div class="well">
    <div class="panel panel-success" v-for="item in copy.CannabisOil" :key="item.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{item.header}}</h3>
      </div>
      <div class="panel-body">
        <p v-for="par in item.copy" :key="par.id">{{par}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import Copy from '../Copy/copy.json';


export default {
  name: 'oil',
  data: function(){
    return Copy;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style lang="sass" scoped>
  @import '../mq'
</style>-->
