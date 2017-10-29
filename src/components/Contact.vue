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
            <span class="glyphicon glyphicon-envelope">
            </span>
            <span>
              <a :href="copy.Contact.Email1v">{{ copy.Contact.Email1 }}</a>
            </span>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <span class="glyphicon glyphicon-envelope">
            </span>
            <span>
              <a :href="copy.Contact.Email2v">{{ copy.Contact.Email2 }}</a>
            </span>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <span class="glyphicon glyphicon-phone">
            </span>
            <span>{{ copy.Contact.Phone1 }}
            </span>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <span class="glyphicon glyphicon-phone">
            </span>
            <span>{{ copy.Contact.Phone2 }}
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


