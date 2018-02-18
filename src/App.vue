<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">{{Copy.copy.nav.home}}</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="oil">{{Copy.copy.nav.oil}}</a></li>
            <li><a href="products">{{Copy.copy.nav.products}}</a></li>
            <li><a href="contact" class="pure-menu-link">{{Copy.copy.nav.contact}}</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="jumbotron"><!--panel panel-default-->
      <div class="container-fluid">
        <div>
            <img class="img-responsive center-block" src="./img/ants.jpg">
        </div>
        <div class="panel-heading text-center">
            <h1 class="display-1">{{Copy.copy.home.name }}</h1>
        </div>
      </div>
    </div>
    <div  class="container-fluid">
      <div class="row">
        <div class="col-xs-1"></div>
        <div class="col-xs-10">    
          <router-view></router-view>
        </div>
        <div class="col-xs-1"></div>
      </div>
    </div>
      <!--<footer class="footer">
    
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-thumbnail" src="./img/ants.jpg">
                </div>
                <div class="col-md-6">
                  <img class="img-responsive center-block" src="./img/ants.jpg">
                </div>
            </div>
        </div>
    
    </footer>-->

  </div>
  
</template>
               

<script>
import Copy from './Copy/copy.json';


export default {
  name: 'app',
  data: function(){
      return {
        Copy: Copy,
        isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

