<template>
<div class="row row-offcanvas">
<div class="col-md-8 col-sm-12 col-xs-12">
  <r-section></r-section>
</div>
<div class="col-md-4" id="sidebar">
<r-sidebar></r-sidebar>
</div>
</div>
</template>


<script>
import Section from './Section.vue'
import Sidebar from './Sidebar.vue'
export default{
  components:{
    'r-section' : Section,
    'r-sidebar' : Sidebar
  }

}

</script>

<style>


.flow {
    margin-top: 10px;
}

.title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #2d7788;
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
}

.title .fa {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    display: inline-block;
    color: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background: #2d7788;
    text-align: center;
    padding-top: 8px;
    font-size: 16px;
    position: relative;
    top: -2px;
}


.sec-item{
  margin-top: 10px;
  padding: 5px;
}



#sidebar{
  position: -webkit-sticky;
position: sticky;
top: 0;
}

</style>
