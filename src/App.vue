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
          <a href="/" class="navbar-brand">Home</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><a href="oil">Cannabis Oil</a></li>
            <li><a href="benefits">Medical Benefits</a></li>
            <li><a href="contact" class="pure-menu-link">Contact us</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="panel panel-default">
      <div>
          <img class="img-responsive center-block" src="./img/ants.jpg">
      </div>
      <div class="panel-heading text-center">
          <h1 class="panel-title">{{ Copy.copy.home.name }}</h1>
      </div>
      <div>
          <p class="panel-body text-center">{{ Copy.copy.home.title }}</p>
      </div>
    </div>

    <router-view></router-view>
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

<!--
<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand"  to="/">Home</router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li><router-link to="/oil">Cannabis Oil</router-link></li>
            <li><router-link to="/benefits">Medical Benefits</router-link></li>
            <li><router-link to="/contact" class="pure-menu-link">Contact us</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<template>
  <div id="app">
    <div class="pure-menu pure-menu-horizontal">
      <router-link to="/" class="pure-menu-heading pure-menu-link">Home</router-link> 
        <ul class="pure-menu-list">
          <li class="pure-menu-item"><router-link to="/oil" class="pure-menu-link">Cannabis Oil</router-link></li>
          <li class="pure-menu-item"><router-link to="/benefits" class="pure-menu-link">Medical Benefits</router-link> </li>
          <li class="pure-menu-item"><router-link to="/contact" class="pure-menu-link">Contact us</router-link> </li>
        </ul>
    </div>
    <router-view/>
  </div>
</template>
-->