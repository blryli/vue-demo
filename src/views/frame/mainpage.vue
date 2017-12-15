<template>
  <div>
    <el-container class="sp-container">
      <el-header height="50px">
        <top-header/>
      </el-header>
      <router-view/>
    </el-container>
    <el-footer height="auto">
      <top-footer/>
    </el-footer>
  </div>
</template>

<script>
import topHeader from "./header";
import topFooter from "./footer";
export default {
  data() {
    return {
      topNavJson: {},
      showNav: ""
    };
  },
  components: {
    topHeader,topFooter
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.sp-container{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-height: 93vh;
  min-height: calc(100vh - 89px);
  min-height: -webkit-calc(100vh - 89px);
  min-height: -moz-calc(100vh - 89px);
}
@media (min-width: 768px){
  .sp-container {
      width: 750px;
      padding: 0;
  }
}
@media (min-width: 992px){
  .sp-container {
      width: 970px;
  }
}
@media (min-width: 1200px){
  .sp-container {
      width: 1200px;
  }
}
</style>
