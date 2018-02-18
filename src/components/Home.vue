<template>
  <div  class="well well-lg">
    <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">{{copy.home.header}}</h3>
        </div>
        <div>
          <p class="panel-body">{{copy.home.paragraph1}}</p>
          <p class="panel-body">{{copy.home.paragraph2}}</p>
        </div>
  </div>
  </div>
</template>

<script>
import Copy from '../Copy/copy.json';
//var copy = Copy;
//console.log(Copy);
export default {
  name: 'home',
  data: function(){
      return Copy;
    }
}
</script>


