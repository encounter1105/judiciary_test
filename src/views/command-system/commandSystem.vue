<template>
  <div class="command-system">
    <el-container>
      <el-header>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-col :span="6" style="margin-left:10px;padding-left:10px">
              <el-button round size="mini" icon="el-icon-house">
                主页
              </el-button>
              <el-button round size="mini" icon="el-icon-folder-checked">
                任务派发
              </el-button>
              <el-button round size="mini" icon="el-icon-setting">
                系统设置
              </el-button>
            </el-col>
            <!--<div class="block">-->
            <!--<span class="demonstration">默认</span>-->
            <el-col :span="10">
              <el-image :src="title" style="width:500px;height:50px;text-align:center;padding-top:5px;"> </el-image>
            </el-col>
            <el-button size="mini" icon="el-icon-user">
              欢迎您：管理员
            </el-button>
            <el-button size="mini">
              2020年3月18日 16:56
            </el-button>
          </div>
        </el-col>
      </el-header>
      <el-container>
        <el-aside width="500px">
          <el-card class="box-card" style="margin-bottom: 20px">
            <div slot="header" class="clearfix" style="heigth:100px;margin-bottom:20px">
              <span style="float:left"><i class="el-icon-star-off" style="color:lightskyblue;margin-right:5px"></i>案件信息</span>
            </div>
            <el-row>
              <p style="margin:0;padding:0;float:left;font:bold 14px/30px normal;color:dodgerblue">
                案号：(2019)沪710邢初305号
              </p>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span style="font:11px/24px normal;float:left"><span>案由：</span><span>{{ caseAction }}</span><span>信息盗窃重大刑事案</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:11px/24px normal">审判人员 </span>
              </el-col>
              <el-col :span="6">
                <span style="font:11px/24px normal">开庭时间 </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span style="font:11px/24px normal;float:left"><span>法庭名称：</span><span>{{ courtName }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:bold 12px/24px normal;color:dodgerblue">{{ judicialOfficers }}</span>
              </el-col>
              <el-col :span="6" style="margin-bottom:15px">
                <span style="font:bold 12px/30px normal;color:dodgerblue">{{ courtTime}}</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span style="font:6px/18px normal;float:left"><span>当事人：</span><span>{{ party }}</span></span>
              </el-col>
              <el-col :span="12">
                <span style="font:6px/18px normal;float:left"><span>当事人：</span><span>{{ party }}</span></span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>羁押地点：</span><span>{{ custodyLocations }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>车牌号码：</span><span>{{ carNumber }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>羁押地点：</span><span>{{ custodyLocations2 }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>车牌号码：</span><span>{{ carNumber }}</span></span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>任务状态：</span><span style="color: #00FFFF ">{{  taskStatus }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>行驶速度：</span><span>{{ carSpeed }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>任务状态：</span><span style="color: #F99F1C ">{{ taskStatus2 }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>行驶速度：</span><span>{{ carSpeed2 }}</span></span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>剩余距离：</span><span>{{  surplusDistance }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:6px/18px normal;float:left"><span>剩余时间：</span><span>{{ surplusTime }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>剩余距离：</span><span>{{ surplusDistance2 }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:8px/18px normal;float:left"><span>剩余时间：</span><span>{{ surplusTime2 }}</span></span>
              </el-col>
            </el-row>
          </el-card>
          <el-card>
            <div slot="header" class="clearfix" style="heigtht:100px;margin-bottom:20px">
              <el-row style="float:left;align:center;height:17px"><img src="@/assets/police1.jpg" style="height: 150%;" /><span style="font:16px/24px normal;display:block;float:right;">警务保障</span></el-row>
            </div>
            <el-row >
              <el-col :span="8">
                <span style="font:11px/24px normal;float:left"><span>总指挥：</span><span style="color:#40A0BD;font-weight: bold">{{ chief }}</span></span>
              </el-col>
              <el-col :span="3" style="height:26px">
                <span style="font:11px/24px normal"><img src="@/assets/police2.jpg" style="height: 150%;" /> </span>
              </el-col>
              <el-col :span="3" style="height:26px">
                <span style="font:11px/26px normal"><img src="@/assets/fapolice.jpg" style="height: 150%;" /> </span>
              </el-col>
              <el-col :span="3" style="height:26px">
                <span style="font:11px/26px normal"><img src="@/assets/zhipolice.jpg" style="height: 150%;" /> </span>
              </el-col>
              <el-col :span="3" style="height:26px">
                <span style="font:11px/26px normal"><img src="@/assets/fapolice.jpg" style="height: 150%;" /> </span>
              </el-col>
              <el-col :span="3" style="height:26px">
                <span style="font:11px/26px normal"><img src="@/assets/kanpolice.jpg" style="height: 150%;" /> </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <span style="font:11px/24px normal;float:left"><span>副指挥：</span><span style="color:#40A0BD;font-weight: bold">{{ commander }}</span></span>
              </el-col>
              <el-col :span="3">
                <span style="font:11px/28px normal">提押法警 </span>
              </el-col>
              <el-col :span="3">
                <span style="font:11px/28px normal">提押法警 </span>
              </el-col>
              <el-col :span="3">
                <span style="font:11px/28px normal">提押法警 </span>
              </el-col>
              <el-col :span="3">
              <span style="font:11px/28px normal">提押法警 </span>
              </el-col>
              <el-col :span="3">
              <span style="font:11px/28px normal">提押法警 </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <span style="font:11px/24px normal;float:left"><span>安保指挥：</span><span style="color:#40A0BD;font-weight: bold">{{ securityCommand }}</span></span>
              </el-col>
              <el-col :span="6">
                <span style="font:11px/24px normal">审判人员 </span>
              </el-col>
              <el-col :span="6">
                <span style="font:11px/24px normal">开庭时间 </span>
              </el-col>
            </el-row>

          </el-card>

        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>

    </el-container>
  </div>

</template>

<script>
  export default {
    name: 'commodSystem',
    data() {
      return{
        caseAction: 'XXXXX',
        courtName: '第2法庭',
        judicialOfficers: '孙六 王五 张三',
        courtTime: '13:30',
        party : '张三',
        custodyLocations: '一看',
        carNumber: '沪BA230',
        custodyLocations2: '二看',
        taskStatus: '任务开始',
        carSpeed: '15km/h',
        taskStatus2: '提押完成',
        carSpeed2: '15km/h',
        surplusDistance: '21km',
        surplusTime: '25分钟',
        surplusDistance2: '21km',
        surplusTime2: '25分钟',
        chief: '朱之俊',
        commander: '洪波',
        securityCommand: '王大海'

    }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: lightgray;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
  /deep/ .el-card__body {
    padding-left:5px;
    padding-right:5px;
    padding-top:5px;
  }
  /deep/ .el-card__header{
    padding-left:2px;
    margin-left:2px;
  }

  /*body > .el-container {*/
  /*!*margin-bottom: 40px;*!*/
  /*}*/

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
  /*line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
  /*line-height: 320px;*/
  /*}*/
</style>

