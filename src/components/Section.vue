
<template>

<div class="flow">
  <div v-for="section in info.sections" class="sec-item">
    <h2 class="title"><i :class="section.icon" class="fa"></i>{{section.name}}</h2>
    <div class="item" v-for="item in section.ul">
        <div class="meta">
            <div class="upper-row">
                <h3 class="job-title">{{item.title}}</h3>
                <div class="time">{{item.time}}</div>
            </div>
            <!--//upper-row-->
            <div class="org">{{item.org}}</div>
        </div>
        <!--//meta-->
        <div class="details" v-if="item.summary!=null">
            <p>
              {{item.summary}}
            </p>
        </div>

        <!--//details-->
    </div>
    <div class="sidenote" v-if="section.sidenote!=null">
      {{section.sidenote}}
    </div>
    <hr />
  </div>

</div>

</template>

<script>
import section from '../sections.json'

export default{
  data(){
    return{
      info : section
    }

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

.job-title {
    color: #3F4650;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 700;
}

.time {
    position: absolute;
    right: 0;
    top: 0;
    color: #97AAC3;
}

.org {
    margin-bottom: 10px;
    color: #95989d;
}

.upper-row {
    position: relative;
    overflow: hidden;
    margin-bottom: 2px;
}

.details {
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
    color: rgb(105, 105, 105);
    font-weight: lighter;
}

.sec-item{
  margin-top: 10px;
  padding: 5px;
}

.item{
  padding: 5px;
}

.sidenote{
  font-weight: bold;
  color: #2d7788;
  padding: 5px;
}

</style>
