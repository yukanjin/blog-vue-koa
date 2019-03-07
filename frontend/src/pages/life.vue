<template>
  <div class="photo">
    <div class="photo-list" v-for="(photos, photosIndex) in photosList" :key="photosIndex">
      <div class="photo-item" v-for="(photo, photosIndex) in photos" :key="photosIndex">
        <img src="../assets/images/logo.png" :style="photo.style" />
        <div class="photo-item-shade">
          <div class="photo-title">{{ photo.title }}</div>
          <i class="line"></i>
          <div class="photo-time">{{ photo.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      photosData: [
        {
          width: 225,
          height: 50,
          style: 'width: 225px;height: 50px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 250,
          style: 'width: 225px;height: 250px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 225,
          style: 'width: 225px;height: 225px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 300,
          style: 'width: 225px;height: 300px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 50,
          style: 'width: 225px;height: 50px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 250,
          style: 'width: 225px;height: 250px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        },
        {
          width: 225,
          height: 150,
          style: 'width: 225px;height: 150px',
          src: '../assets/images/logo.png',
          title: '湘湖',
          time: '2019-03-06'
        }
      ],
      photosList: [[], [], []],
      listHeight: [0, 0, 0]
    }
  },
  mounted () {
    this.getphotolist()
  },
  methods: {
    getMinNumberIndex (list) {
      let minNumberIndex = 0
      list.reduce((min, cur, curIndex) => {
        if (cur < min) {
          minNumberIndex = curIndex
          return cur
        } else {
          return min
        }
      })
      return minNumberIndex
    },
    getphotolist () {
      let listHeight = [...this.listHeight]
      this.photosData.map((photo, index) => {
        photo.sort = index
        return photo
      }).sort((a, b) => a.height / a.width < b.height / b.width).forEach((photo, index) => {
        this.photosList[this.getMinNumberIndex(listHeight)].push(photo)
        listHeight[this.getMinNumberIndex(listHeight)] += photo.height / photo.width
      })
      this.photosList.forEach(photos => {
        photos.sort((a, b) => a.sort > b.sort)
      })
    }
  }
}

</script>

<style scoped>
  .photo{
    background: #fff;
    min-height: 480px;
    box-sizing: border-box;
    padding: 25px;
    display: flex;
  }
  .photo-list{
    width: calc(675px/3);
  }
  .photo-list + .photo-list{
    margin-left: 25px;
  }
  .photo-item{
    position: relative;
    margin-bottom: 15px;
    font-size: 0;
  }
  .photo-item-shade{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    opacity: 0;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }
  .photo-item-shade:hover{
    background: rgba(255,255,255,0.3);
    opacity: 1;
  }
  .photo-item-shade:hover .line{
    width: 60%;
  }
  .photo-title{
    font-size: 20px;
  }
  .line{
    width: 0;
    height: 1px;
    background: #fff;
    margin: 3px auto;
    transition: width 1s .5s
  }
  img {
    width: 100%;
  }
</style>
