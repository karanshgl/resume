<template>
  <div class="flow">
    <div class="sec-item">
      <h2 class="title"><i class="fa fa-bar-chart"></i>Skills</h2>
        <h3 class="skill-item">{{data.code.title}}</h3>
        <div class="meta">
        <div class="row skills" v-for="(item,i) in data.code.list">
          <div class="col-md-4 s-li">
            {{item.name}}
          </div>
          <div class="col-md-8 s-bar">
            <ui-progress-linear type="determinate" :progress="item.percent"></ui-progress-linear>
          </div>
        </div>

        <h3 class="skill-item">{{data.lang.name}}</h3>
        <div class="col-md-6 lang" v-for="la in data.lang.list">
          {{la}}
        </div>
        <div class="clearfix">

        </div>

          <h2 class="title"><i class="fa fa-edit"></i>{{data.hobby.name}}</h2>
          <div class="col-md-6 lang" v-for="i in data.hobby.list">
            {{i}}
          </div>
        </div>

</div>
</div>
</template>


<script>
import dataSidebar from '../sidebar.json'
export default{
  data(){
    return{
      data : dataSidebar
    }
  }
}

</script>

<style>

.skill-item{
  color: #3F4650;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-left: 5px;
  font-weight: 700;
  border-left: solid #2d7788;
}

.skills{
  padding: 3px 10px;
  margin-bottom: 10px;
}

.lang{
  padding: 3px 10px;
  margin-bottom: 20px;
}

.meta{
  margin-bottom: 30px;
}

.s-bar{
  margin-top: 10px
}
</style>
