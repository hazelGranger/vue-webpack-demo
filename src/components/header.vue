<template>
	<div class="header">
		<ul>
			<li v-for="item in navItems">
				<a  v-link="{path: item.link}">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import settings from 'settings'
	export default{
		data (){
			return{
				navItems:[
					{
						name: '登录',
						link: settings.loginUrl
					},
					{
						name: '注册',
						link: settings.registerUrl
					}
				]
			} 
		}
	}
</script>
<style lang="less">
	.header{
		background: #aaa;
		ul{
			li{
				display: block;
				float: left;
				position: relative;
			}
			&:after{
				clear: both;
				display: table;
				content: "";
			}
		}
	}
</style>