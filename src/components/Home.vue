<template>
  <div class="container">
    <section class="row">
      <div class="card-wrapper">
        <div class="card">
          <div class="profile-card ">
            <div class="profile-pic">
              <img class="media-object img-circle center-block" alt="Karan Sehgal" src="../static/profile.jpg" itemprop="image">
              </div>
              <div class="contact-details">
                  <h3 class="name" >Karan Sehgal</h3>
                  <h5 >B.tech Computer Science (Almost)</h5>
                <div class="detail">
                  <span class="icon">
                    <i class="fa fa-lg fa-github"></i>
                  </span>

                </div>
                <div class="detail">
                  <span class="icon">
                    <i class="fa fa-lg fa-envelope"></i>
                  </span>

                </div>


                <div class="detail">
                  <span class="icon">
                    <i class="fa fa-lg fa-spotify"></i>
                  </span>
                </div>
                <div class="detail">
                  <span class="icon">
                    <i class="fa fa-lg fa-facebook"></i>
                  </span>
                </div>
                <div class="detail">
                  <span class="icon">
                    <i class="fa fa-lg fa-map-marker"></i>
                  </span>
                </div>
              </div>
            </div>
            <hr>
            </div>
          </div>
        </section>
      </div>
    </template>
    <script>


    </script>
    <style>

body {
  font-family: 'Lato', "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #f0f0f0;
  color: #333333;
  font-size: 16px;
}


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

.card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 2em 3.5em;
}

.card-wrapper {
  padding: 5px;
}
</style>
