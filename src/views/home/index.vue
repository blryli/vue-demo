<template>
  <el-row :gutter="20">
  	<div class="banner">
  		<el-carousel :height="bannerHeighr">
  		  <el-carousel-item v-for="(item, index) in 3" :key="item">
  		    <div class="banner-bg" :style="bannerArr[index]"></div>
  		  </el-carousel-item>
  		</el-carousel>
  	</div>
  	<el-col :span="24" class="fba-box">
  		<div class="fba-title">
  			<fba-title :menuList="menuList" fbaTitle="行业最低价" @callBack="getIndex1"/>
  		</div>
  		<div class="fba-content">
	  		<fba-money v-show="showIndex1 == ind1" v-for="(moneyList, ind1) in moneyListArr" :moneyList="moneyList" :key="ind1"/>
  		</div>
  	</el-col>
  	<el-col :sm="24" :md="12" class="fba-box">
  		<div class="fba-title">
  			<fba-title :menuList="dataList" fbaTitle="行业数据" @callBack="getIndex2"/>
  		</div>
  		<div class="box-border">
  			<div v-show="showIndex2 == 0" id="c1"></div>
  			<div v-show="showIndex2 == 1" id="c2"></div>
  		</div>
  	</el-col>
  	<el-col :sm="24" :md="12" class="fba-box">
  		<div class="fba-title">
  			<fba-title :menuList="infoList" fbaTitle="行业资讯" @callBack="getIndex3"/>
  		</div>
		<div class="box-border">
			<ul v-if="showIndex3 == 0" class="info-list">
				<li v-for="(item, index) in infoData1"><router-link :to="item.url">{{item.text}}</router-link></li>
			</ul>
			<ul v-if="showIndex3 == 1" class="info-list">
				<li v-for="(item, index) in infoData2"><router-link :to="item.url">{{item.text}}</router-link></li>
			</ul>
			<ul v-if="showIndex3 == 2" class="info-list">
				<li v-for="(item, index) in infoData3"><router-link :to="item.url">{{item.text}}</router-link></li>
			</ul>
			<ul v-if="showIndex3 == 3" class="info-list">
				<li v-for="(item, index) in infoData4"><router-link :to="item.url">{{item.text}}</router-link></li>
			</ul>
		</div>
  	</el-col>
  	<el-col :span="24" class="fba-box">
  		<fba-tool :toolList="toolList" fbaTitle="常用工具"/>
  	</el-col>
  </el-row>
</template>

<script>
import fbaTitle from '../../../src/components/fba-title'
import fbaMoney from '../../../src/components/fba-money'
import fbaTool from '../../../src/components/fba-tool'
import G2 from '@antv/g2';
export default {
  data() {
    return {
      bannerArr: [
        { backgroundImage: "url(" + require('../../../static/img/banner.png') + ")" },
        { backgroundImage: "url(" + require('../../../static/img/banner.png') + ")" },
        { backgroundImage: "url(" + require('../../../static/img/banner.png') + ")" },
      ],
      menuList: [{
          name: '快递',
          check: true
        },{
          name: '空运',
          check: false
        },{
          name: '海运',
          check: false
        },],
      dataList: [{
          name: '时效变动',
          check: true
        },{
          name: '价格变动',
          check: false
        }],
      infoList: [{
          name: '最新消息',
          check: true
        },{
          name: '海关资讯',
          check: false
        },{
          name: '主要路线',
          check: false
        },{
          name: '仓储资讯',
          check: false
        }],
      moneyListArr: [
      	[
			{money: '52RMB/kg',sale: '20%'},
			{money: '66RMB/kg',sale: '16%'},
			{money: '30RMB/kg',sale: '9%'},
			{money: '1RMB/kg',sale: '24%'}
		],[
			{money: '23RMB/kg',sale: '10%'},
			{money: '44RMB/kg',sale: '26%'},
			{money: '2RMB/kg',sale: '5%'},
			{money: '10RMB/kg',sale: '4%'}
		],[
			{money: '33RMB/kg',sale: '3%'},
			{money: '3RMB/kg',sale: '23%'},
			{money: '23RMB/kg',sale: '35%'},
			{money: '13RMB/kg',sale: '43%'}
		],
      ],
      showIndex1: 0,
      showIndex2: 0,
      showIndex3: 0,
      infoData1: [{
      	text: '1111111111111111',
      	url: '/'
	  }],
	  infoData2: [{
      	text: '222222222222222',
      	url: '/'
	  }],
	  infoData3: [{
      	text: '3333333333333333333',
      	url: '/'
	  }],
	  infoData4: [{
      	text: '4444444444444',
      	url: '/'
	  }],
	  toolList: [{
	  		name: 'FBA费用计算',
	  		src: '../../../static/img/amazon.png'
	  },{
	  		name: '不刷单上首页',
	  		src: '../../../static/img/page1st.png'
	  },{
	  		name: 'FBA费用计算',
	  		src: '../../../static/img/amazon.png'
	  },{
	  		name: '不刷单上首页',
	  		src: '../../../static/img/page1st.png'
	  },{
	  		name: 'FBA费用计算',
	  		src: '../../../static/img/amazon.png'
	  },{
	  		name: '不刷单上首页',
	  		src: '../../../static/img/page1st.png'
	  }],
	  bannerHeighr: ''
  	}
  },
  components: {
  	fbaTitle, fbaMoney, fbaTool
  },
  mounted: function () {
  	var _this = this
    this.$nextTick(function () {
	  	_this.changeMargin();
	    //监听浏览器宽度的改变
	    window.onresize = function(){
	        _this.changeMargin();
	    };
      const data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 }
        ];
        const chart = new G2.Chart({
          container: 'c1',
          forceFit: true,
          height: 240
        });
        chart.source(data);
        chart.scale('value', {
          min: 0
        });
        chart.scale('year', {
          range: [ 0 , 1 ]
        });
        chart.tooltip({
          crosshairs: {
            type: 'line'
          }
        });
        chart.line().position('year*value');
        chart.point().position('year*value').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        });
        chart.render();
    })
  },
  methods: {
  	getIndex1(val) {
  		this.showIndex1 = val
  	},
  	getIndex2(val) {
  		this.showIndex2 = val
  	},
  	getIndex3(val) {
  		this.showIndex3 = val
  	},
  	changeMargin(){
  	    //获取网页可见区域宽度
  	    var docWidth = document.body.clientWidth;
  	    if(docWidth < 768){
  	        this.bannerHeighr = '120px'
  	    }else if(docWidth < 992){
  	        this.bannerHeighr = '200px'
  	    }else if(docWidth < 1200){
  	        this.bannerHeighr = '260px'
  	    }else{
  	        this.bannerHeighr = '300px'
  	    }
  	}
  }
}
</script>

<style lang="scss" scoped>
.banner {
  .banner-bg {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 10% center;
    background-size: auto 120%;
  }
}
.fba-box{
	padding-bottom: 20px;
	.fba-title{
		margin: 20px 0;
	}
	.box-border{
		border: 1px solid #ddd;
		height: 240px;
	}
}
.info-list{
	padding: 20px;
	li{
		+li{
			margin-top: 10px;
		}
	}
}
@media (min-width: 768px){
  .banner {
  	padding: 0 10px;
    .banner-bg {
      background-size: 120% auto;
      background-position: center center;
    }
  }
}
@media (min-width: 992px){
  .banner {
    .banner-bg {
      background-size: 100% auto;
    }
  }
}
</style>