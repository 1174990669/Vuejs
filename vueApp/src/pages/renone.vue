<template>
	<div class="body">
		<nav>
			<div class="bg">
				<img src="../../static/images/bg.jpg">
				<div class="ghost">
					<div class="title" id="tit1">
						<router-link to='/sq/zx' tag='span'><</router-link>
						<span>个人主页</span>
						<span>+ 关注</span>
					</div>
					<div class="datum">
						<p>
							<img src="../../static/images/character2.png">
						</p>
						<span>S.H</span>
					</div>
					<div class="message">
						<span>22</span>
						<span>关注</span>
						<span>20</span>
						<span>粉丝</span>
						<span>生活永远多姿多彩</span>
					</div>
				</div>
			</div>
			<div class="qh">
				<router-link to='/ren/rentwo' tag='div' class="qh-top">
					<span><img src="../../static/images/collection.png"></span>
					<span>ta的收藏</span>
					<span>></span>
				</router-link>
				<div class="qh-top">
					<span><img src="../../static/images/collection.png"></span>
					<span>ta的发帖</span>
					<span>></span>
					<span>6</span>
				</div>
			</div>
		</nav>
		<section>
			<ul>
				<li>
					<img src="../../static/images/tg10.png">
					<div class="sm">
						<p>原来龟背叶也可以如此茂盛<img src="../../static/images/tg11.png"></p>
						<p>
							<span><img src="../../static/images/character2.png"></span>
							<span>H.S</span>
							<span><img src="../../static/images/fabulous.png"></span>
							<span>4</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg10.png">
					<div class="sm">
						<p>原来龟背叶也可以如此茂盛<img src="../../static/images/tg11.png"></p>
						<p>
							<span><img src="../../static/images/character2.png"></span>
							<span>H.S</span>
							<span><img src="../../static/images/fabulous.png"></span>
							<span>4</span>
						</p>
					</div>
				</li>
			</ul>
			<ul style="">
				<li>
					<img src="../../static/images/tg12.png">
					<div class="sm">
						<p>原来龟背叶也可以如此茂盛<img src="../../static/images/tg11.png"></p>
						<p>
							<span><img src="../../static/images/character2.png"></span>
							<span>H.S</span>
							<span><img src="../../static/images/fabulous.png"></span>
							<span>4</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg12.png">
					<div class="sm">
						<p>原来龟背叶也可以如此茂盛<img src="../../static/images/tg11.png"></p>
						<p>
							<span><img src="../../static/images/character2.png"></span>
							<span>H.S</span>
							<span><img src="../../static/images/fabulous.png"></span>
							<span>4</span>
						</p>
					</div>
				</li>
				<li>
					<img src="../../static/images/tg12.png">
					<div class="sm">
						<p>原来龟背叶也可以如此茂盛<img src="../../static/images/tg11.png"></p>
						<p>
							<span><img src="../../static/images/character2.png"></span>
							<span>H.S</span>
							<span><img src="../../static/images/fabulous.png"></span>
							<span>4</span>
						</p>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<style scoped>
	.body{
		margin: 0;
		font-size: 0.36rem;
		color: #fff;
	}
	.bg{
		height: 4.2rem;
		position: relative;
	}
	.bg img{
		width: 100%;
		height: 4.2rem;
	}
	.bg .ghost{
		position: absolute;
		top: 0;
		text-align: center;
		height: 4.2rem;
		width: 100%;
		background: rgba(0,0,0,0.4);
	}
	.bg .ghost .title{
		/*position: fixed;*/
		z-index: 1;
		width: 100%;
		height: 0.9rem;
	}
	.bg .ghost .title span:nth-child(1){
		padding-left: 0.3rem;
		font-size: 0.56rem;
		float: left;
	}
	.bg .ghost .title span:nth-child(2){
		padding-left: 0.7rem;
		line-height: 0.9rem;
	}
	.bg .ghost .title span:nth-child(3){
		margin-top: 0.15rem;
		margin-right: 0.34rem;
		width: 1.28rem;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.28rem;
		border: 2px solid #fff;
		border-radius: 0.08rem;
		float: right;
	}
	.bg .ghost .datum{
		margin-top: 0.75rem;
		width: 100%;
		height: 3.45rem;
		position: relative;
	}
	.bg .ghost .datum span{
		position: absolute;
		top: 1.7rem;
		left: 3.5rem;
		font-size: 0.3rem;
	}
	.bg .ghost .datum p{
		position: absolute;
		left: 3.02rem;
		margin:0;
		margin-top: 0.1rem;
		width: 1.42rem;
		height: 1.42rem;
		border: 0.03rem solid transparent;
		border-radius:50%;
		border-left:0.03rem solid #65c4aa;
		border-right:0.03rem solid #65c4aa;
		border-bottom:0.03rem solid #65c4aa;
		transform:rotate(-45deg);
	}
	.bg .ghost .datum p img{
		width: 1.4rem;
		height: 1.4rem;
		margin-top: 0.01rem;
		transform:rotate(45deg);
	}
	.bg .ghost .message{
		position: relative;
		bottom: 1.25rem;
		left: 2.7rem;
		width: 2.2rem;
		height: 0.75rem;
	}
	.bg .ghost .message span{
		font-size: 0.25rem;
	}
	.bg .ghost .message span:nth-child(1){
		color: #65c4aa
	}
	.bg .ghost .message span:nth-child(2){
		padding-right: 0.1rem;
		border-right: 1px solid #fff;
	}
	.bg .ghost .message span:nth-child(3){
		color: #fd888b
	}
	.qh .qh-top span{
		color: #585858;
	}
	.qh .qh-top{
		border-bottom: .02rem solid #ececec;
		width: 100%;
		height: 1rem;
		text-align: center;
	}
	.qh .qh-top:nth-child(2){
		border-top: 2px solid #ececec;
		border-bottom: 0 solid #fff;
	}
	.qh .qh-top span:nth-child(1){
		margin-top: 0.3rem;
		margin-left: 0.3rem;
		float: left;
	}
	.qh .qh-top span:nth-child(1) img{
		width: 0.3rem;
		height: 0.3rem;
	}
	.qh .qh-top span:nth-child(2){
		margin-top: 0.32rem;
		padding-left: 0.3rem;
		float: left;
		font-size: 0.28rem;
	}
	.qh .qh-top span:nth-child(3){
		margin-top: 0.3rem;
		padding-right: 0.3rem;
		font-size: 0.4rem;
		float: right;
	}
	.qh .qh-top span:nth-child(4){
		margin-top: 0.32rem;
		padding-left: 0.15rem;
		font-size: 0.28rem;
		float: left;
		color: #65c4aa;
	}
	/*内容*/
	section{
		background: #f9f9f9
	}
	section ul:nth-child(1){
		float: left;
	}
	section ul:nth-child(2){
		float: right;
		padding-left: 0
	}
	section ul{
		margin: 0;
		background: #f9f9f9;
		padding: 0.193rem;
	}
	section ul li{
		list-style: none;
		width: 3.46rem;
		height: 6.4rem;
		margin: 0.2rem 0;
		background: #fff;
		box-shadow: 0 0 5px #ccc;
		border-radius: 0.08rem;
	}
	section ul:nth-child(2) li{
		height: 4.4rem;
	}
	section ul:nth-child(2) li img{
		height: 2.4rem;
	}
	section ul li img{
		width: 100%;
		height: 4.16rem;
	}
	section ul li .sm p{
		padding: 0.3rem 0.2rem 0.1rem 0.2rem;
		margin: 0;
		font-size: 0.29rem;
		color: #000;
	}
	section ul li .sm p img{
		height: 0.31rem;
		width: 0.31rem;
	}
	section ul li .sm p:nth-child(2){
		position: relative;
		padding: 0;
	}
	section ul li .sm p:nth-child(2) span:nth-child(1) img{
		padding-left: 0.15rem;
		width: 0.6rem;
		height: 0.6rem;
	}
	section ul li .sm p:nth-child(2) span:nth-child(2){
		position: absolute;
		top: 0.1rem;
		color: #65c4aa;
		padding-left: 0.2rem;
	}
	section ul li .sm p:nth-child(2) span:nth-child(3){
		width: 0.4rem;
		height: 0.4rem;
		float: right;
	}
	section ul li .sm p:nth-child(2) span:nth-child(3){
		position: absolute;
		top: 0.1rem;
		right: 0.32rem;
	}
	section ul li .sm p:nth-child(2) span:nth-child(3) img{
		width: 0.4rem;
		height: 0.4rem;
	}
	section ul li .sm p:nth-child(2) span:nth-child(4){
		position: absolute;
		top: 0.12rem;
		right: 0.1rem;
	}
</style>

