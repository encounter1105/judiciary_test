<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-col :span="8">
              <el-button round size="mini" icon="el-icon-house">
                主页
              </el-button>
              <el-button round size="mini" icon="el-icon-search">
                历史查询
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
              2020年3月18日 16：56
            </el-button>
          </div>
        </el-col>
      </el-header>
      <el-container>
        <el-aside width="670px">
          <el-card>
            <div slot="header" style="heigth:100px;margin-bottom:20px">
              <span style="float:left;"><i class="el-icon-document-copy"></i>案件列表</span>
              <el-button round style="float: right; padding: 5px 5px" icon="el-icon-search">根据案号模糊查询</el-button>
            </div>
            <el-tabs type="border-card">
              <el-tab-pane label="本日">
                <el-table
                  ref="filterTable"
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="caseNumber"
                    label="案号"
                    sortable
                    width="140"
                    column-key="date"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="partyNumber"
                    label="当事人数"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="caseAction"
                    label="案由"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="court"
                    label="法庭"
                    width="100"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="lawfulDay"
                    label="开庭日期"
                    sortable
                    width="100"
                    column-key="date"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="deliveryState"
                    label="派送状态"
                    width="100"
                    :filters="[{ text: '已派送', value: '已派送' }, { text: '待派送', value: '待派送' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                    <template slot-scope="scope">
                      <el-tag
                        :type="scope.row.deliveryState === '已派送' ? 'success' : 'danger'"
                        disable-transitions>{{scope.row.deliveryState}}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="本周">本周</el-tab-pane>
              <el-tab-pane label="本月">
                <el-table
                  ref="filterTable"
                  :data="tableData"
                  stripe
                  style="width: 100%">
                  <el-table-column
                    prop="caseNumber"
                    label="案号"
                    sortable
                    width="140"
                    column-key="date"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="partyNumber"
                    label="当事人数"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="caseAction"
                    label="案由"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="court"
                    label="法庭"
                    width="100"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="lawfulDay"
                    label="开庭日期"
                    sortable
                    width="100"
                    column-key="date"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="deliveryState"
                    label="派送状态"
                    width="100"
                    :filters="[{ text: '已派送', value: '已派送' }, { text: '待派送', value: '待派送' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                    <template slot-scope="scope">
                      <el-tag
                        :type="scope.row.deliveryState === '已派送' ? 'success' : 'danger'"
                        disable-transitions>{{scope.row.deliveryState}}</el-tag>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-aside>
        <el-container>
          <el-main style="margin:0;padding:0">
            <el-card style="margin:0;padding:0">
              <div slot="header" style="margin-bottom:20px">
                <span style="float:left;"><i class="el-icon-document"></i>案件详情</span>
              </div>
              <el-form :model="sizeForm" label-width="0px">
                <el-row style="float:left">
                  <el-col :span="24" style="margin-bottom:20px">
                    <input-item-view :label-width="labelWidth" label="案号">
                      <span style="color:darkgray;margin-right:50px">案号:{{ sizeForm.caseNumber }} </span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="收案人">
                      <span style="color:darkgray;margin-right:50px">收案人:{{ sizeForm.cognizancePeople}}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="诉讼日期">
                      <span style="color:darkgray;margin-right:50px">诉讼日期:{{ sizeForm.lawsuitDate }}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="当事人数">
                      <span style="color:darkgray;margin-right:117px">当事人数:{{ sizeForm.partyNumber }}</span>
                    </input-item-view>
                  </el-col>
                  <el-col :span="24" style="margin-bottom:20px">
                    <input-item-view :label-width="labelWidth" label="法庭">
                      <span style="color:darkgray;margin-right:20px">法庭:{{ sizeForm.court }}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="主审法官">
                      <span style="color:darkgray;margin-right:20px">主审法官:{{ sizeForm.presidingJudge }}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="立案日期">
                      <span style="color:darkgray;margin-right:20px">立案日期:{{ sizeForm.recordDate }}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="开庭日期">
                      <span style="color:darkgray;margin-right:30px">开庭日期:{{ sizeForm.lawfulDay }}</span>
                    </input-item-view>
                    <input-item-view :label-width="labelWidth" label="是否羁押">
                      <span style="color:darkgray;margin-right:40px">是否羁押：{{ sizeForm.detainState }}</span>
                    </input-item-view>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" style="margin-bottom:20px">
                    <input-item-view :label-width="labelWidth" label="案由">
                      <span style="color:darkgray;margin-right:40px">案由:{{ sizeForm.caseAction }}</span>
                    </input-item-view>
                  </el-col>
                </el-row>
              </el-form>
              <el-table
                :data="tableData2"
                stripe
                style="width: 100%;border:solid 0.5px #E9EEF3 ">
                <el-table-column
                  prop="partyPeople"
                  label="当事人"
                  width="70">
                </el-table-column>
                <el-table-column
                  prop="sex"
                  label="性别"
                  width="50">
                </el-table-column>
                <el-table-column
                  prop="idCard"
                  label="证件号"
                  width="145">
                </el-table-column>
                <el-table-column
                  prop="custodyLocations"
                  label="羁押地点"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="recidivism"
                  label="是否累犯"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="vanVehicle"
                  label="押送车辆"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="escortOfficer"
                  label="押送人员">
                </el-table-column>
              </el-table>
            </el-card>
            <el-card>
              <div slot="header" style="margin-bottom:20px">
                <span style="float:left;"><i class="el-icon-edit-outline"></i>任务派发</span>
              </div>
              <el-form ref="form2" :model="form2" label-width="100px">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item label="提押时间：">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="开始时间" v-model="form2.date1" style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <el-form-item :span="2" label="当事人A：" prop="vanVehicle" style="width:100px">
                      <el-select v-model="form2.vanVehicle" style="width:105px;display:inline-block">
                        <el-option label="沪BA230" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="value1" multiple style="width:110px">
                        <el-option
                          v-for="item in escortOfficer"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.sentPersonnel" style="width:105px;display:inline-block">
                        <el-option label="法庭押解" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.supervisor" style="width:80px;display:inline-block">
                        <el-option label="" value="看管"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.divisionStaff" style="width:80px;display:inline-block">
                        <el-option label="" value="值庭"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.RemandPer" style="width:80px;display:inline-block">
                        <el-option label="" value="还押"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <el-form-item :span="2" label="当事人B：" prop="vanVehicle" style="width:100px">
                      <el-select v-model="form2.vanVehicle" style="width:105px;display:inline-block">
                        <el-option label="沪BA230" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="value1" multiple style="width:110px">
                        <el-option
                          v-for="item in escortOfficer"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.sentPersonnel" style="width:105px;display:inline-block">
                        <el-option label="法庭押解" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.supervisor" style="width:80px;display:inline-block">
                        <el-option label="" value="看管"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.divisionStaff" style="width:80px;display:inline-block">
                        <el-option label="" value="值庭"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.RemandPer" style="width:80px;display:inline-block">
                        <el-option label="" value="还押"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="4">
                    <el-form-item :span="2" label="当事人C：" prop="vanVehicle" style="width:100px">
                      <el-select v-model="form2.vanVehicle" style="width:105px;display:inline-block">
                        <el-option label="沪BA230" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="value1" multiple style="width:110px">
                        <el-option
                          v-for="item in escortOfficer"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.sentPersonnel" style="width:105px;display:inline-block">
                        <el-option label="法庭押解" value="shanghai"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.supervisor" style="width:80px;display:inline-block">
                        <el-option label="" value="看管"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    <el-form-item>
                      <el-select v-model="form2.divisionStaff" style="width:80px;display:inline-block">
                        <el-option label="" value="值庭"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-select v-model="form2.RemandPer" style="width:80px;display:inline-block">
                        <el-option label="" value="还押"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <div style="margin-top:200px">
                <el-button type="warning" size="mini" style="margin-left:540px;">修改</el-button>
                <el-button type="primary" size="mini" style="float:right">派发</el-button>
              </div>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data() {
    return {
      title:'@/assets/title.jpg',
      activeName: 'first',
      tableData: [{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      }, {
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '待派送',
      }, {
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      }, {
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '待派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '待派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '待派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      },{
        caseNumber: '案件名称11232112',
        partyNumber: '2',
        caseAction: '信息盗窃罪',
        court: 'XXXXX法庭',
        lawfulDay: '2019-09-12',
        deliveryState: '已派送',
      }
      ],
      labelWidth: '0px',
      sizeForm: {
        caseNumber: 'XXX',
        cognizancePeople: 'XXXX',
        lawsuitDate: '2019-10-15',
        partyNumber: '2',
        court: 'xxxx',
        presidingJudge: 'xxxx',
        recordDate: '2019-10-15',
        lawfulDay: '2019-10-15',
        detainState: '是',
        caseAction: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      tableData2: [{
        partyPeople: '夏洛洛',
        sex: '男',
        idCard: '1310120810014426',
        custodyLocations: 'xxxxx',
        recidivism: '是',
        vanVehicle: '车辆A',
        escortOfficer: '张三、李四、王五、赵六',
      }, {
        partyPeople: '夏洛洛',
        sex: '男',
        idCard: '1310120810014426',
        custodyLocations: 'xxxxx',
        recidivism: '是',
        vanVehicle: '车辆A',
        escortOfficer: '张三、李四、王五、赵六',
      }, {
        partyPeople: '夏洛洛',
        sex: '男',
        idCard: '1310120810014426',
        custodyLocations: 'xxxxx',
        recidivism: '是',
        vanVehicle: '车辆A',
        escortOfficer: '张三、李四、王五、赵六',
      }],
      form2: {
        name: '',
        vanVehicle: '',
        sentPersonnel: '',
        supervisor: '',
        divisionStaff: '',
        RemandPer:''
      },
      escortOfficer:  [{
        value: '选项1',
        label: '东东'
      }, {
        value: '选项2',
        label: '西西'
      }, {
        value: '选项3',
        label: '王二'
      }, {
        value: '选项4',
        label: '李三'
      }],
      value1: [],
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
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
