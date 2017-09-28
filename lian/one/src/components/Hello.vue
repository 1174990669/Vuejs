<template>

  <div class="hello">
  
   <!--  <router-link to='home'>home</router-link>
    <strong>Hom</strong>
    <router-link to='bom'>bom</router-link> -->

   
    <h1>手机大放送</h1>
    <ul >
          <li v-for="item in da">
            <router-link to="/but">
              <img v-bind:src="item.img" alt="">
              <h3>{{item.money}}</h3>
              <p>{{item.title}}<span>{{item.ti}}</span></p>
            </router-link>
          </li>
    </ul>
  </div>
</template>

<script>

var data=[
  {
    title:'vivo',
    ti:'r9',
    img:'https://img10.360buyimg.com/n1/s450x450_jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg',
    money:'2990'
  },
  {
    title:'小米',
    ti:'6S',
    img:'https://img12.360buyimg.com/n1/s450x450_jfs/t4591/162/4595625932/57717/98a2ad97/59119b6aN6660cdf4.jpg',
    money:'2899'
  },
  {
    title:'荣耀',
    ti:'6X',
    img:'https://img13.360buyimg.com/n1/s450x450_jfs/t3622/252/1338684461/302390/d3b8d694/5825a5b2N3cedebd2.jpg',
    money:'1299'
  },
  {
    title:'oppo',
    ti:'R11',
    img:'https://img11.360buyimg.com/n1/s450x450_jfs/t5935/18/2377030582/85100/44fd023e/593e2c31Nce1bab35.jpg',
    money:'3199'
  },
  {
    title:'华为',
    ti:'p10',
    img:'https://img14.360buyimg.com/n1/s450x450_jfs/t3208/237/7223786607/236360/5938a219/58b3f514Nd4e630ff.jpg',
    money:'3788'
  },
  {
    title:'oppo',
    ti:'R11',
    img:'https://img10.360buyimg.com/n1/s450x450_jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg',
    money:'2990'
  },
  {
    title:'oppo',
    ti:'R11',
    img:'https://img10.360buyimg.com/n1/s450x450_jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg',
    money:'2990'
  },
  {
    title:'oppo',
    ti:'R11',
    img:'https://img10.360buyimg.com/n1/s450x450_jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg',
    money:'2990'
  }
];
export default {
  name: 'hello',
  data () {
    return {
      da:data,
      // msg: '手机大放送',
      // mg: '手机'
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*button{font-size:30px;margin-right: 40px}*/
  ul{margin:0;padding:0;}
  h3{color:red;font-size: 40px;letter-spacing:10px;}
  li{list-style: none;display: inline-block;width: 320px;height:500px}
  img{width:300px;height: 300px;}
  p{font-size: 30px;margin:-30px 0 0 0 ;}
  span{color:#666;font-size: 40px;padding-left: 4px}
  a{text-decoration:none;}
</style>
