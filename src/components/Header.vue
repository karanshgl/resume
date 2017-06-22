<template>
<div class="profile-card ">
  <div class="profile-pic">
    <img class="media-object img-circle center-block" alt="Karan Sehgal" src="../static/profile.jpg" itemprop="image">
  </div>
  <div class="contact-details">
    <h3 class="name">{{info.name}}</h3>
    <h5>{{info.occupation}}</h5>
    <div class="detail" v-for="link in info.links">
      <span class="icon"> <a :href="link.url"> <i class="fa fa-lg" :class="link.icon"></i></a>  </span>
    </div>
    <div class="detail">
      <span class="icon"><a :href="'mailto:'+ info.email"> <i class="fa fa-lg fa-envelope"></i></a> </span>
    </div>

    <div class="detail">
      <span class="icon"><a ref="location"> <i class="fa fa-lg fa-map-marker"></i> </a> </span>
      <ui-popover trigger="location" class="location-popover" dropdownPosition="right center">{{info.location}}</ui-popover>
    </div>
  </div>
</div>
</template>


<script>
import dataHead from '../head-data.json'
export default{
  data(){
    return{
      info: dataHead
    }
  },
}
</script>

<style>
.profile-card {
  display: table;
}

.profile-pic {
  display: table-cell;
  vertical-align: top;
  padding: 1rem 4rem 0 0;
}

.profile-pic img {
  width: 100px;
  height: 100px;
}

.contact-details {
  display: table-cell;
}

.contact-details .detail {
  display: inline-block;
  line-height: 2;
  margin-right: 2rem;
}

.contact-details .detail .icon {
  padding-right: 7px;
  color: #888;
}

.contact-details .detail .info {
  font-size: 0.8em;
}

.fa:hover{
  cursor: pointer;
  animation: link-hover 1s forwards;
}
a {
  color: #888
}

@keyframes link-hover {
  from{
    color: #888
  }
  to{
    color: #000
  }
}

.location-popover{
  padding: 5px;
  margin: 5px;
}


</style>
