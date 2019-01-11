<template>
  <div class="about">
    <div class="info clear-fix">
      <div class="info-left">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="info-right">
        <p class="slogan">不乱于心，不困于情，不畏将来，不念过往。</p>
        <p><span>姓名: 虞侃锦</span></p>
        <p><span>手机号: 15700085972</span></p>
        <p><span>qq: 422705223</span></p>
        <p><span>微信: yuyuyukj</span></p>
        <p><span @click="linkToMyGithub" style="cursor:pointer">github: https://github.com/yukanjin</span></p>
      </div>
    </div>
    <div class="description">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端菜鸟搭建的个人网站，记录下自己的学习、工作和生活中的点滴。域名申请、服务器备案，技术选型等拖拖拉拉的准备了半年多（主要还是因为懒），终于开始动工了。2018年立的flag拖到今天终究是要偿还的。
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端技术栈选择了VUE,用KOA2和MySQL搭建服务端。如果需要SEO，后期可以采用ssr服务器渲染。
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkToMyGithub () {
      window.open('https://github.com/yukanjin', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
  .about {
    padding: 20px;
    background: #fff;
    .info {
      &-left {
        float: left;
        img{
          border-radius: 50%;
          width: 210px;
          height: 210px;
        }
      }
      &-right {
        margin-left: 250px;
        line-height: 35px;
        font-size: 20px;
        span {
          color: #999;
          &:hover {
            color: #fff;
            background: #adc2d7;
          }
        }
      }
      .slogan {
        color: #0c61b6;
        font-weight: 500;
      }
    }
    .description {
      text-align:justify;
      margin-top: 20px;
    }
  }
</style>
