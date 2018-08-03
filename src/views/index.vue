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
        <div class=""></div>
        <!--<ul>
          <li></li>
        </ul>-->
      </div>
    </div>
    <div class="left">
      <el-scrollbar class="scroll">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          :collapse="isCollapse"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <div class="up" @click="isCollapse=!isCollapse">
            <i class="iconfont icon-home_shousuo_h_icon" :class="{fade: isCollapse}"></i>
          </div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isCollapse: true,//收缩动画
        defaultHeader: require('../assets/images/header-default.png')
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
  .el-scrollbar__wrap{
    overflow-x: hidden
  }

</style>
<style scoped lang="stylus">
  .main {
    width 100%
    height 100%
    display flex
    flex-flow column
    .haeder {
      width 100%
      height 49px
      flex 0 0 49px
      background-color #373d41
      min-width 770px
      .logo {
        float left
        width 230px
        color #fff
        font-size 28px
        line-height 49px
        padding-left 12px
        box-sizing border-box
      }
      .header_nav {
        position relative
        padding-right 12px
        float right
        vertical-align middle
        a {
          text-underline none
          line-height 49px
          img {
            width 30px;
            height 30px;
            border-radius 50%
            margin-top 10px
          }
        }
      }
    }

    .left {
      width 230px;
      flex 1
      display flex
      flex-flow column
      .scroll {
        flex 1
        .el-menu {
          border-right: none;
          .up {
            width: 100%;
            height: 50px;
            background #222d32
            cursor pointer
            text-align center
            line-height 50px
            font-size: 16px
            .icon-home_shousuo_h_icon {
              display inline-block
              color #fff
            }
            & .fade {
              transform: rotate(90deg) ;
            }
          }
        }
      }
    }

  }

</style>
