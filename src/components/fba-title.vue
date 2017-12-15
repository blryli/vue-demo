<template>
  <div class="fba-title">
    <h1>{{fbaTitle}}</h1>
    <ul class="list">
      <li v-for="(menu, index) in menuList" :class="{active: menu.check == true}" @mouseenter="liMouseenter(menu, index)">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'fba-title',
  props: {
    menuList: {
      type: Array,
      default: function() {
        return []
      }
    },
    fbaTitle: {
      type: String,
      default: 'title'
    }
  },
  methods: {
    liMouseenter(menu, index) {
      this.menuList.forEach((d, i) => {
        d.check = false
      })
      menu.check = true
      this.$emit('callBack', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.fba-title{
  overflow: hidden;
  h1{
    border-left: 3px solid #3390ca;
    padding-left: 18px;
    font-size: 18px;
    font-weight: normal;
    float: normal;
    margin-bottom: 15px;
    color: #888;
    padding-right: 20px;
  }
}
.list{
  overflow: hidden;
  margin-top: 4px;
  li{
    float: left;
    font-size: 15px;
    cursor: pointer;
    +li{
      margin-left: 15px;
    }
    &:hover, &.active{
      color: #3390ca;
      font-weight: bold;
    }
  }
}
@media (min-width: 768px){
  .fba-title{
    h1{
      float: left;
      margin-bottom: 0;
    }
  }
}
</style>
