<template>
  <div class="fba-title">
    <h1>{{fbaTitle}}</h1>
    <el-row :gutter="20" class="list">
      <el-col :xs="12" :sm="6" :md="4" v-for="(tool, index) in toolList" :key="index">
        <span><img :src="tool.src">{{tool.name}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'fba-title',
  props: {
    toolList: {
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
  }
}
</script>

<style lang="scss" scoped>
.fba-title{
  color: #666;
  h1{
    font-size: 15px;
  }
  .list{
    margin-top: 4px;
    span{
      float: left;
      font-size: 14px;
      display: block;
      width: 100%;
      cursor: pointer;
      margin-top: 10px;
      border: 1px solid #ddd;
      line-height: 34px;
      height: 34px;
      text-align: center;
      border-radius: 4px;
      &:hover{
        border-color: #73B2D9;
      }
      img{
        width: 20px;
        height: auto;
        margin-right: 4px;
        display: inline-block;
      }
      &:hover, &.active{
        color: #3390ca;
      }
    }
  }
}
</style>
