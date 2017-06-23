<template>
  <div class="flow">
    <div class="sec-item">
      <h2 class="title"><i class="fa fa-bar-chart"></i>Skills</h2>
        <h3 class="skill-item">Programming</h3>
        <div class="row skills">
          <div class="col-md-4 s-li">
            Python
          </div>
          <div class="col-md-8 s-bar">
            <ui-progress-linear type="determinate" :progress="proPercent"></ui-progress-linear>
          </div>
        </div>
</div>
</div>
</template>


<script>
export default{
  data(){
    return{
      proPercent : 0,
      data : 40
    }
  },
  created: function(){
    var self=this;
    self.proPercent=0;
    setTimeout(()=>{
      var p = setInterval(function () {
        self.proPercent+=1;
        if(self.proPercent>=self.data){
          clearInterval(p);
        }
      }, 20);
    },750)


  }
}

</script>

<style>

.skill-item{
  color: #3F4650;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 5px;
  font-weight: 700;
  border-left: solid #2d7788;
}

.skills{
  margin-top: 10px;
}

.s-li{

}

.s-bar{
  margin-top: 10px
}
</style>
