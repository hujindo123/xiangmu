<template>
  <div class="hello">
    <button   v-text="$t('m.btn')"></button>
    <el-button type="primary" @click="changeLangEvent" v-text="$t('m.btn')">换肤</el-button>
    <span v-text="$t('m.music')"></span>
    <el-date-picker
      type="datetimerange"
      range-separator="至"
      align="right"
      unlink-panels
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    <el-button type="primary" @click="toggleClass">换肤</el-button>
    <screenfull class="screenfull right-menu-item">11111</screenfull>
  </div>
</template>

<script>
  import Screenfull from '@/components/Screenfull'
  import '@/assets/custom-theme/index.css' // the theme changed version element-ui css
  export default {
    name: 'HelloWorld',
    components: {
      Screenfull
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      changeLangEvent() {
        this.$confirm(this.$t('m.confirm'), '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
       /*   this.$i18n.locale = lang
          this.$store.dispatch('setLanguage', lang)*/
          if (this.$i18n.locale === 'en') {
            this.$i18n.locale = 'zh';
             window.localStorage.setItem('lang','zh');
            // 设置语言
          } else {
            this.$i18n.locale = 'en';
            window.localStorage.setItem('lang','en');
            // 设置语言
          }
        }).catch(() => {
          this.$message({
            type: 'info',
          });
        });


      },
      toggleClass(element, className) {
       /* if (!element || !className) {
          //return
          element = document.body;
        }*/
        element = document.body;
        className = 'custom-theme'
        let classString = element.className ;
        const nameIndex = classString.indexOf(className)
        if (nameIndex === -1) {
          classString += '' + className
        } else {
          classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
        }
        element.className = classString
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
