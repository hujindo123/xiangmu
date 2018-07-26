<template>
   <el-form class="layout">
     <!--  <header-bar></header-bar>
       <side-bar></side-bar>-->
     <template>
       <el-form label-position="left" ref="form" :model="form" label-width="80px">
         <el-form-item label="上班时间">
           <el-input
             class="min-input"
             type="input"
             autosize
             v-model="form.worke.time1">
           </el-input>
           :
           <el-input
             class="min-input"
             type="input"
             autosize
             v-model="form.worke.time2">
           </el-input>
         </el-form-item>
         <el-form-item label="下班时间">
           <el-input
             class="min-input"
             type="input"
             autosize
             v-model="form.uworke.time1">
           </el-input>
           :
           <el-input
             class="min-input"
             type="input"
             autosize
             v-model="form.uworke.time2">
           </el-input>
         </el-form-item>
         <el-form-item label="弹性时间">
           <el-input
             class="min-input"
             type="input"
             autosize
             v-model="form.tanxing">
           </el-input>
           <div class="input-label">分钟忽略不计</div>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="onSubmit">修改</el-button>
           <el-button>取消</el-button>
         </el-form-item>
       </el-form>
       <!--`````````````````````````````````````````-->
       <el-form :inline="true" :model="form" class="demo-form-inline">
         <el-form-item label="姓名/工号：">
           <el-input
             type="input"
             placeholder="请输入姓名/工号"
             autosize
             v-model="form.worke.time1">
           </el-input>
         </el-form-item>
         <el-form-item label="记录时间段：">
           <el-date-picker
             v-model="search.time"
             type="datetimerange"
             value-format="yyyy-MM-dd HH:mm:ss"
             range-separator="至"
             align="right"
             unlink-panels
             start-placeholder="开始日期"
             end-placeholder="结束日期">
           </el-date-picker>
         </el-form-item>
         <el-form-item label="通行方式：">
           <el-select
             v-model="search.name"
             clearable
             @change="changeUsername"
             placeholder="请选择">
             <el-option
               v-for="item in departmentuser"
               :key="item.value"
               :label="item.name"
               :value="item.name">
             </el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="区域：">
           <el-select
             v-model="search.name"
             clearable
             @change="changeUsername"
             placeholder="请选择">
             <el-option
               v-for="item in departmentuser"
               :key="item.value"
               :label="item.name"
               :value="item.name">
             </el-option>
           </el-select>
         </el-form-item>
         <el-button type="primary" @click="getDate">查询</el-button>
         <el-button>清空</el-button>
         <!--


          <el-form-item label="验证结果：">
            <el-select
              v-model="search.name"
              clearable
              @change="changeUsername"
              placeholder="请选择">
              <el-option
                v-for="item in departmentuser"
                :key="item.value"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" @click="getDate">查询</el-button>
          <el-button>清空</el-button>-->
       </el-form>
       <div class="export">
         <el-button type="danger" size="small" icon="el-icon-delete">
           删除
         </el-button>
       </div>


        <el-table
          id="out-table"
          :data="userList.list.list"
          border
          stripe
          height="650"
          @selection-change="handleSelectionChange"
          :header-cell-class-name="tableheaderClassName"
          :show-overflow-tooltip="true"
          style="width: 100%;">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            fixed
            prop="department"
            label="头像"
            sortable
            min-width="130">
            <template slot-scope="scope">
              <img  :src="scope.row.department" alt="" style="width: 50px;height: 50px">
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="人员姓名"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="时间"
            :show-overflow-tooltip="true"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="设备"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="设备"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="区域"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="通行方式"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            prop="systime"
            label="验证结果"
            sortable
            min-width="130">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      <!-- <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
         :current-page.sync="userList.currentPage"
         :page-sizes="[10, 200, 300, 400]"
         :page-size="10"
         layout="total, sizes, prev, pager, next, jumper"
         :total="userList.list.totalCount">
       </el-pagination>-->
     </template>
     <div style="text-align: center;width: 100%;height: 100%;">
       <div class="z-div">
         <div class="z-div-top">
           <div class="title-z-div">记录详情
             <i class="close-z-index el-icon-close"></i>
           </div>
         </div>
         <el-scrollbar style="height: 100%;overflow-x: hidden">
           <div class="z-div-main">
             <div class="subTitle">基本信息</div>
             <el-form ref="form" :model="form" label-position="left" label-width="100px">
               <el-form-item label="姓名">
                 <span>郑磊</span>
               </el-form-item>
               <el-form-item label="身份证号">
                 <span>65432119870430001X</span>
               </el-form-item>
               <el-form-item label="照片">
                 <span></span>
               </el-form-item>
               <el-form-item label="抓拍照片">
                 <span></span>
               </el-form-item>
               <el-form-item label="验证结果">
                 <span>通过</span>
               </el-form-item>
               <el-form-item label="抓拍照打分">
                 <span>0.82</span>
               </el-form-item>
               <el-form-item label="性别">
                 <span>男</span>
               </el-form-item>
               <el-form-item label="民族">
                 <span>汉</span>
               </el-form-item>
               <el-form-item label="出生日期">
                 <span>1987-04-30</span>
               </el-form-item>
               <el-form-item label="住址">
                 <span>新疆布尔津县布尔津镇神湖东路6号楼1单元501室</span>
               </el-form-item>
               <el-form-item label="签发机关">
                 <span>布尔津县公安局</span>
               </el-form-item>
               <el-form-item label="签发日期">
                 <span>2010-03-11</span>
               </el-form-item>
               <el-form-item label="过期时间">
                 <span>2020-03-11</span>
               </el-form-item>
               <el-form-item label="时间">
                 <span>2018-07-25 16:52:18</span>
               </el-form-item>
               <el-form-item label="过期时间">
                 <span>2020-03-11</span>
               </el-form-item>
               <el-form-item label="地点（设备）">
                 <span>出口(C1M10131733092)</span>
               </el-form-item>
               <el-form-item label="区域">
                 <span>一楼进出口</span>
               </el-form-item>
               <el-form-item label="人员类型">
                 <span>访客</span>
               </el-form-item>
               <el-form-item label="进出类型">
                 <span>出</span>
               </el-form-item>
               <el-form-item label="通行方式">
                 <span>刷脸通行</span>
               </el-form-item>
             </el-form>
           </div>
         </el-scrollbar>
         <div class="z-div-bt">
           <el-button>取消</el-button>
         </div>
       </div>
     </div>
   </el-form>


</template>
<style>
  .z-div {
    width: 650px;
    height: 90%;
    position: relative;
    top: 5%;
    display: inline-block;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    border-radius: 4px;
    overflow: hidden;
  }

  .z-div-top {
    padding: 15px;
    height: 28px;
    line-height: 28px;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
  }
  .z-div-bt{
    width: 100%;
    padding: 15px;
    line-height: 28px;
    border-top: 1px solid #e5e5e5;
    position: absolute;
    background: #fff;
    text-align: right;
    bottom: 0;
    box-sizing: border-box;
    left: 0;
  }

  .title-z-div {
    font-size: 18px;
    text-align: left;
  }

  .close-z-index {
    display: inline-block;
    width: 30px;
    vertical-align: middle;
    text-align: right;
    float: right;
    font-size: 25px;
    cursor: pointer;
  }

  .z-div-main {
    width: 100%;
    padding: 8px 15px 100px;
    text-align: left;
    box-sizing: border-box;
  }

  .subTitle {
    padding-left: 10px;
    background: #f0f0f1;
    height: 38px;
    line-height: 39px;
    margin-bottom: 20px;
    font-size: 16px;
  }

</style>
<style>
  .min-input {
    width: 70px;
  }

  .input-label {
    color: #606266;
    display: inline-block;
    padding-left: 8px;
  }

  .el-form-item {
    padding-left: 30px;
  }

  .table-head-th {
    background: #f5f7fa !important;
  }
</style>
<script>
  import HeaderBar from '@/views/layout/HeaderBar/index';
  import SideBar from '@/views/layout/SideBar/index';

  export default {
    data() {
      return {
        form: {
          worke: {
            time1: '',
            time2: ''
          },
          uworke: {
            time1: '',
            time2: ''
          },
          tanxing: ''
        },
        departmentlist: '',
        departmentuser: '',
        PeopelStatus: '',
        search: {
          department: '',
          name: '',
          time: '',
          status: '',
          tag: []
        },
        userList: {
          currentPage: 1, //初始页码
          page: 1,
          order: 'order',
          nd: new Date().getTime(),
          limit: 10,
          list: ''
        }
      }
    },
    components: {
      HeaderBar,
      SideBar,
    },
    methods: {
      onSubmit() {
        console.log(this.time1);
        console.log('submit!');
      },
      changeDepartment() {

      },
      changeUsername() {

      },
      getDate() {

      },
      /* 勾选的数据 数组格式 */
      handleSelectionChange(val) {
        this.userList.multipleSelection = val;
      },
      /*设置表头样式*/
      tableheaderClassName({row, rowIndex}) {
        return "table-head-th";
      },
      handleClick() {

      }
    },
    computed: {
      time1() {
        return this.form.worke.time1 + ':' + this.form.worke.time2 + ':00'
      },
      time2() {
        return this.form.uworke.time1 + ':' + this.form.uworke.time2 + ':00'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .layout {
    width 100%;
    position relative;
  }

</style>
