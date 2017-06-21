<template>
<div class="profile-card ">
  <div class="profile-pic">
    <img class="media-object img-circle center-block" alt="Karan Sehgal" src="../static/profile.jpg" itemprop="image">
  </div>
  <div class="contact-details">
    <h3 class="name">Karan Sehgal</h3>
    <h5>B.tech Computer Science (Almost)</h5>
    <div class="detail">
      <span class="icon">  <i class="fa fa-lg fa-github"></i>  </span>
    </div>
    <div class="detail">
      <span class="icon"> <i class="fa fa-lg fa-envelope"></i> </span>
    </div>
    <div class="detail">
      <span class="icon">   <i class="fa fa-lg fa-spotify"></i>  </span>
    </div>
    <div class="detail">
      <span class="icon">  <i class="fa fa-lg fa-facebook"></i></span>
    </div>
    <div class="detail">
      <span class="icon">  <i class="fa fa-lg fa-map-marker"></i>  </span>
    </div>
  </div>
</div>
</template>


<script>
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
  color: #000;
}
</style>
