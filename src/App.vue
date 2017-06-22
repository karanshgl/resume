<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <div class="card">

        <transition name="slide" mode="out-in" appear>
          <r-head></r-head>
        </transition>
        <hr />
        <transition name="cslide" mode="out-in" appear>
          <router-view></router-view>
        </transition>
        <transition name="slideup" mode="out-in" appear>
          <r-foot></r-foot>
        </transition>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'r-head': Header,
    'r-foot': Footer
  }
}
</script>

<style>
.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  transition: opacity 1s ease;
  animation: slide-in 1s ease-out forwards;
}

.slide-enter {
  opacity: 0;
}

.slideup-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slideup-out 1s ease-out forwards;
}

.slideup-leave {
  opacity: 1;
  transform: translateX(0);
}

.slideup-enter-active {
  transition: opacity 1s ease;
  animation: slideup-in 1s ease-out forwards;
}


.cslide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.cslide-leave {
  opacity: 1;
  transform: translateX(0);
}

.cslide-enter-active {
  transition: opacity 1s ease;
  animation: slide-in 1s ease-out forwards;
  animation-delay: 0.2s;
  transition-delay: 0.2s;
}

.cslide-enter {
  opacity: 0;
}




@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slideup-out {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(30px);
  }
}

@keyframes slideup-in {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}

.home {
  background-color: #efefef;
}

.card {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 2em 3.5em;
  margin-top: 20px;
}
</style>
