<template>
  <div class="about">
    <div class="info clear-fix">
      <div class="info-left">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="info-right">
        <p>姓名: 虞侃锦</p>
        <p>手机号: 15700085972</p>
        <p>qq: 422705223</p>
        <p>微信: yuyuyukj</p>
        <p>github: github.yukanjin.com</p>
        <p>不乱于心，不困于情，不畏将来，不念过往。</p>
      </div>
    </div>
    <div class="description">
      一个前端菜鸟，一直想搭建一个个人网站来记录自己的学习、工作和生活中的点滴。这也算是第一个真正从需求分析到原型设计到前后端开发一手包办的项目了。域名申请、服务器备案等拖拖拉拉的准备了半年多（主要还是因为懒），2018年立的flag拖到今天终究是要偿还的。
    </div>
  </div>
</template>

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
      }
    }
    .description {
      margin-top: 20px;
    }
  }
</style>
