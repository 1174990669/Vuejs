<template>
	<div>
		<router-link to='/me/meatwo' tag='nav'>
			<span><</span>
			<span>我的收藏</span>
		</router-link>
		<section>
			<ul>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱不能更爱不能更爱不能更爱不能更</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>泡沫咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱不能更爱不能更爱不能更爱不能更</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg13.png">
					<div class="rw">
						<p>不能更爱不能更爱不能更爱不能更爱不能更</p>
						<p>
							<span><img src="../../static/images/character1.png"></span>
							<span>咖啡</span>
							<span>2</span>
							<span><img src="../../static/images/fabulous.png"></span>
						</p>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
export default{
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
	*{font-size: .36rem;}
	ul,p{margin: 0;padding: 0;font-size: 0.36rem;}
	nav{background: #fff;position: fixed;top: 0;z-index: 1;width: 100%;height: 0.9rem;text-align: center;line-height: 0.9rem;border-bottom: 1px solid #f7f7f7;}
	nav span:nth-child(1){font-size: 0.4rem;padding-left: .3rem;float: left;}
	section{margin: 1rem 0 0;}
	section ul li{width: 3.5rem;height: 4.7rem;margin: 0.18rem 0.1rem 0;border-radius: 0.08rem;border: 0.02rem solid #e7e7e7;display: inline-block;}
	section ul li:nth-child(even){margin-left: 0;}
	section ul li img{width: 100%;height: 2.64rem;}
	section ul li .rw p{display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;height: 0.75rem;margin-top: 0.2rem;font-size: 0.28rem;
		padding: 0 0.18rem;}
	section ul li .rw p:nth-child(2){display: block;position: relative;}
	section ul li .rw p:nth-child(2) span:nth-child(1) img{width: 0.64rem;height: 0.64rem;}
	section ul li .rw p:nth-child(2) span:nth-child(2){position: absolute;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;width: 1rem;padding-left: 0.2rem;top: 0.15rem;font-size: 0.22rem;color: #65c4aa;}
	section ul li .rw p:nth-child(2) span:nth-child(3),section ul li .rw p:nth-child(2) span:nth-child(4){padding-right: 0.15rem;padding-top: 0.15rem;float: right;}
	section ul li .rw p:nth-child(2) span:nth-child(4) img{width: 0.4rem;height: 0.4rem;}
</style>