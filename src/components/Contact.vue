<template>
  <section>
    <div class="well">
    <div class="panel panel-default">
      <div>
          <p class="panel-body text-center">{{ copy.Contact.Copy }}</p>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <div>
            <span>{{copy.Contact.CellLable}}</span>
            <span class="glyphicon glyphicon-phone">
            </span>
            <span>{{ copy.Contact.CelNo }}
            </span>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <span>{{copy.Contact.LandLineLable}}</span>
            <span class="glyphicon glyphicon-phone">
            </span>
            <span>{{ copy.Contact.LanNo }}
            </span>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <span>{{copy.Contact.EmailLable}}</span>
            <span class="glyphicon glyphicon-envelope">
            </span>
            <span>
              <a :href="copy.Contact.Emailv">{{ copy.Contact.Email }}</a>
            </span>
          </div>
        </li>
      </ul>
    </div>

      <div>
          <img class="img-responsive center-block" src="../img/bowl.jpg">
      </div>
    </div>
  </section>
</template>


<script>
import Copy from '../Copy/copy.json';


export default {
  name: 'contact',
  data: function(){
    return Copy;
  }
}
</script>


