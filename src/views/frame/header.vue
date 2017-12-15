<template>
  <el-row class="header">
  	<el-col :span="4" class="icon">
  		<i class="sp-menu-icon" @click="navWidth = phoneNavWidth"></i>
  	</el-col>
    <el-col :span="4" class="logo"><router-link to="/"><img :src="logo" alt="logo"></router-link></el-col>
    <el-col :span="14">
    	<ul class="nav" ref="ul" :class="{open: navWidth == phoneNavWidth}" :style="{width: navWidth}" @click="$event.stopPropagation()">
    		<li v-for="(menu, index) in menus" @click="closeNav">
          <router-link :to="menu.url">{{menu.name}}</router-link>
        </li>
    	</ul>
    </el-col>
    <el-col :span="6" class="login">
    	<router-link to="/">登陆</router-link>
    	<i>|</i>
    	<router-link to="/">注册</router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '/static/img/logo.png'
    },
    menus: {
      type: Array,
      default: function() {
        return [{
          id: 1,
          name: '首页',
          url: '/'
        },{
          id: 2,
          name: '省钱方案',
          url: 'scheme'
        }]
      }
    },
    phoneNavWidth: {
      type: String,
      default: '200px'
    },
  },
  data() {
  	return {
  		navWidth: 0
  	}
  },
  mounted: function () {
  	var _this = this
    this.$nextTick(function () {
      document.onclick = function(){
          let ulWidth = _this.$refs.ul.offsetWidth
          if(ulWidth > 10){
              _this.navWidth = 0
          }
      }
	 })
  },
  methods: {
    closeNav() {
      this.navWidth = 0
    }
  }
}
</script>

<style lang="scss" scoped>
//清理浮动
.cf{
    zoom:1;
    &:before,&:after {content:"";display:table;}
    &:after {clear:both;}
}
.header{
	line-height: 50px;
	margin: 0 -20px;
	position: relative;
}
.logo{
	font-size: 16px;
	position: absolute;
	left: 40%;
  a{
    display: inline-block;
  }
}
.open{
  border-right: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
}
.nav{
  padding-top: 20px;
  background-color: #f7f7f7;
  position: fixed;
	z-index: 10000;
  left: 0;
  width: 0;
	height: 100%;
	transition: width .3s;
	overflow: hidden;
	@extend .cf;
	li{
		float: none;
		height: 50px;
		padding: 0 20px;
		a{
			font-size: 16px;
			word-spacing: normal;
			&.router-link-exact-active.router-link-active{
				color: #3390ca;
				font-weight: bold;
			}
			&:hover{
				font-weight: bold;
			}
		}
		+li{
			margin-left: 0;
		}
	}
}
.login{
	text-align: right;
	font-size: 14px;
  display: none;
	i{
		display: inline-block;
		margin: 0 15px;
		color: #aaa;
	}
}
//菜单图标
.icon{
  margin-top: 10px;
  display: block;
}
.sp-menu-icon{
  width: 24px;
  padding: 6px 6px 6px 0;
  display: block;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 6px;
  &:after{
    content: '';
    display: block;
    width: 24px;  
    height: 3px;  
    border-top: 3px solid #666;  
    border-bottom: 3px solid #666;  
    background-color: #666;  
    padding: 4px 0;  
    background-clip:content-box;
  }
}
@media (min-width: 768px){
  .logo{
  	position: relative;
  	float: left;
  	left: 0;
  }
  .nav{
    width: 100% !important;
  	position: relative;
    background-color: transparent;
    padding-top: 0;
  	top: 0;
  	li{
  		float: left;
		padding: 0;
  		+li{
  			margin-left: 10%;
  		}
  	}
  }
  .icon{
  	display: none;
  }
  .login{
    display: block;
  }
}
</style>