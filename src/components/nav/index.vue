<template>
  <div class="navMenu">

    <label v-for="navMenu in navMenus">
      <el-menu-item v-if="navMenu.list==null"
                    :key="navMenu.menuId"
                    :data="navMenu"
                    :index="navMenu.menuId+''"
                    :route="navMenu.url">
        <i :class="navMenu.icon"></i>
        <span slot="title">{{navMenu.name}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.list"
                  :key="navMenu.menuId"
                  :data="navMenu"
                  :index="navMenu.menuId+''">
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span> {{navMenu.name}}</span>
        </template>
        <NavMenu :navMenus="navMenu.list"></NavMenu>
      </el-submenu>
    </label>

  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
