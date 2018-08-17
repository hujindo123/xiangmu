<template>
  <div class="main">
    <div class="haeder">
      <div class="logo">
        Logo
      </div>
      <div class="header_nav">
        <a href="javascript:;">
          <img :src="defaultHeader" alt="">
        </a>
      </div>
    </div>
    <div class="center">
      <div class="left">
        <el-scrollbar class="scroll">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff">
            <div class="up" @click="isCollapse=!isCollapse">
              <i class="iconfont icon-home_shousuo_h_icon" :class="{fade: isCollapse}"></i>
            </div>
            <template v-for="(item, index) in nav.menuList">
              <el-submenu :index="item.menuId+''">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
                </template>
                <template v-for="(items,indexs) in item.list">
                  <el-menu-item-group>
                    <el-menu-item :index="items.menuId+''">{{items.name}}</el-menu-item>
                  </el-menu-item-group>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="right">
        <div class="top_nav">
          <el-tabs v-model="editableTabsValue" class="card" editable  type="card">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name">
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
          <el-dropdown class="el-menu-demo">
            <el-button type="primary">
              页面操作<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-refresh"></i> 刷新当前</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-remove-outline"></i> 关闭其他</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-circle-close-outline"></i> 关闭全部</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isCollapse: false,//收缩动画
        defaultHeader: require('../assets/images/header-default.png'),
        choiceNavList: [],
        nav: {
          "menuList": [{
            "menuId": 49,
            "parentId": 0,
            "parentName": null,
            "name": "考勤管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "fa fa-cog",
            "orderNum": 0,
            "open": null,
            "list": [{
              "menuId": 63,
              "parentId": 49,
              "parentName": null,
              "name": "员工信息",
              "url": "modules/check/user_message.html",
              "perms": "user:list",
              "type": 1,
              "icon": "fa fa-address-book-o",
              "orderNum": 0,
              "open": null,
              "list": null
            }, {
              "menuId": 50,
              "parentId": 49,
              "parentName": null,
              "name": "考勤记录",
              "url": "modules/check/record_list.html",
              "perms": "",
              "type": 1,
              "icon": "fa fa-list",
              "orderNum": 1,
              "open": null,
              "list": null
            }, {
              "menuId": 56,
              "parentId": 49,
              "parentName": null,
              "name": "员工进出记录",
              "url": "modules/check/tenantAccessRecords.html",
              "perms": "sys:tenantAccessRecords:list",
              "type": 1,
              "icon": "fa fa-file-text",
              "orderNum": 2,
              "open": null,
              "list": null
            }, {
              "menuId": 62,
              "parentId": 49,
              "parentName": null,
              "name": "考勤时间设置",
              "url": "modules/check/config.html",
              "perms": "user:list",
              "type": 1,
              "icon": "fa fa-clock-o",
              "orderNum": 3,
              "open": null,
              "list": null
            }, {
              "menuId": 65,
              "parentId": 49,
              "parentName": null,
              "name": "考勤白名单",
              "url": "modules/check/whiteList.html",
              "perms": "job:kaoqinWhitelist:list",
              "type": 1,
              "icon": "fa fa-pencil-square-o",
              "orderNum": 4,
              "open": null,
              "list": null
            }, {
              "menuId": 69,
              "parentId": 49,
              "parentName": null,
              "name": "考勤统计报表",
              "url": "modules/check/echart_export.html",
              "perms": "user:list",
              "type": 1,
              "icon": "fa fa-table",
              "orderNum": 5,
              "open": null,
              "list": null
            }]
          }, {
            "menuId": 1,
            "parentId": 0,
            "parentName": null,
            "name": "系统管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "fa fa-cog",
            "orderNum": 1,
            "open": null,
            "list": [{
              "menuId": 2,
              "parentId": 1,
              "parentName": null,
              "name": "用户管理",
              "url": "modules/sys/user.html",
              "perms": null,
              "type": 1,
              "icon": "fa fa-user",
              "orderNum": 1,
              "open": null,
              "list": null
            }, {
              "menuId": 27,
              "parentId": 1,
              "parentName": null,
              "name": "配置管理",
              "url": "modules/sys/config.html",
              "perms": "sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete",
              "type": 1,
              "icon": "fa fa-cubes",
              "orderNum": 6,
              "open": null,
              "list": null
            }]
          }, {
            "menuId": 38,
            "parentId": 0,
            "parentName": null,
            "name": "调度管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "fa fa-cog",
            "orderNum": 2,
            "open": null,
            "list": [{
              "menuId": 6,
              "parentId": 38,
              "parentName": null,
              "name": "定时任务",
              "url": "modules/job/schedule.html",
              "perms": null,
              "type": 1,
              "icon": "fa fa-cubes",
              "orderNum": 1,
              "open": null,
              "list": null
            }]
          }, {
            "menuId": 39,
            "parentId": 0,
            "parentName": null,
            "name": "日志管理",
            "url": null,
            "perms": null,
            "type": 0,
            "icon": "fa fa-cog",
            "orderNum": 3,
            "open": null,
            "list": [{
              "menuId": 29,
              "parentId": 39,
              "parentName": null,
              "name": "系统日志",
              "url": "modules/sys/log.html",
              "perms": "sys:log:list",
              "type": 1,
              "icon": "fa fa-cubes",
              "orderNum": 7,
              "open": null,
              "list": null
            }]
          }]
        },
        editableTabsValue: '2',
        editableTabs: [],
        tabIndex: 2
      }
    },
    created() {
      this.handleMeun();
    },
    mounted() {

      window.onresize = () => {
        this.handleMeun();
      }
    },
    methods: {
      /**
       *界面小于770px 导航栏隐藏
       */
      handleMeun: function () {
        if (document.documentElement.clientWidth < 770) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      },
      handleSelect(key, keyPath) {
        let str = keyPath.join('');
        /**
         * 如果是选择的
         * */
        let rs = this.choiceNavList.filter((x) => {
          return x === str;
        });
        /**
         * 判断是否添加
         * */
        if (rs.length > 0) {
          /**
           * 跳转页面
           * */
        } else {
          /**
           * 添加tab跳转页面
           * */
          this.choiceNavList.push(str);
          this.nav.menuList.find((item) => {//这里的userList就是上面遍历的数据源
            /*找到父元素的id*/
            if (item.menuId === parseInt(keyPath[0])) {
              item.list.find((items) => {
                if (items.menuId === parseInt(keyPath[1])) {
                  this.handleTabsEdit(items, 'add');
                }
              })
            }
          });
        }
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: targetName.name,
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
    }
  }
</script>
<style>
  .el-menu-vertical-demo, .el-menu--collapse el-menu, .el-scrollbar__view {
    height: 100%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 230px;
    height: 100%;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden
  }

  .el-menu-item, .el-submenu__title, .el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
  }


</style>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../static/css/minxi.styl";
  .main
    width 100%
    height 100%
    display flex
    flex-flow column
    .haeder
      width 100%
      height 49px
      flex 0 0 49px
      background-color #373d41
      min-width 770px
      .logo
        float left
        width 230px
        color #fff
        font-size 28px
        line-height 49px
        padding-left 12px
        box-sizing border-box
      .header_nav
        position relative
        padding-right 12px
        float right
        vertical-align middle
        a
          text-underline none
          line-height 49px
          img
            width 30px;
            height 30px;
            border-radius 50%
            margin-top 10px
    .center
      flex 1
      display flex
      flex-flow row
      .left
        display flex
        flex-flow column
        .scroll
          flex 1
          .el-menu
            border-right: none;
            .up
              width: 100%;
              height: 45px;
              background #222d32
              cursor pointer
              text-align center
              line-height 45px
              font-size: 16px
              .icon-home_shousuo_h_icon
                display inline-block
                color #fff
              & .fade
                transform: rotate(90deg);
            .el-submenu
              position relative
      .right
        flex 1
        position relative
        overflow hidden
        border-top: 5px solid $theme;
        border-left: 2px solid $theme;
        .top_nav
          display flex
          width 100%
          height 40px
          flex 1
          flex-flow row
          box-sizing border-box
          border-bottom 1px solid #e2e2e2
          .el-menu-demo
            height 40px
            flex 0 0 130px
            width 130px
            .el-button--medium
              padding: 10px 20px;
              width: 100%;
              box-sizing: border-box;
              border-radius: 0
              height: 100%
              background #fff
              color #000
              border 0;
              border-left 1px solid #e2e2e2
              border-bottom 1px solid #e2e2e2
          .card
            flex 1
            position relative
            overflow hidden
</style>
