<template>
  <div class="fba-money">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" class="m-t-10" v-for="(money, index) in moneyList" :key="index">
        <el-row class="box">
          <el-col :span="8" class="left" :style="{'background-color': styleArr[index].color}">{{styleArr[index].city}}</el-col>
          <el-col :span="16" class="right">
            <h2 :style="{'color': styleArr[index].color}">{{money.money}}</h2>
            <div class="box-btn">
              <router-link to="/">查看详情</router-link>
              <router-link to="/" class="danger">再省{{money.sale}}</router-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'fba-title',
  props: {
    moneyList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      styleArr: [
        {city: '美西',color: '#3390CA'},
        {city: '美东', color: '#0769AD'},
        {city: '欧洲', color: '#535092'},
        {city: '日本', color: '#2287A8'}
      ]
    }
  },
  methods: {
    liClick(menu, index) {
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
.m-t-10{
  margin-top: 10px;
}
.fba-money{
  margin-top: -10px;
  .box{
    border-radius: 4px;
    overflow: hidden;
    transition: all .3s;
    &:hover{
      margin-top:-3px;
    }
  }
  .left{
    text-align: center;
    color: #fff;
    background-color: #333;
    font-size: 30px;
    font-weight: bold;
    height: 100px;
    line-height: 100px;
    background-color: #3390CA;
  }
  .right{
    height: 100px;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-radius: 4px;
    h2{
      color: #3390CA;
      font-size: 28px;
      padding-left: 10%;
      margin: 15px 0;
    }
  }
  .box-btn{
    padding-left: 10%;
    font-size: 14px;
    a{
      color: #3390CA;
      +a{
        margin-left: 20%;
      }
    }
    .danger{
      color: #f56c6c;
    }
  }
}
</style>
