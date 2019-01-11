<template>
  <div>
    <word-list :list="list"/>
  </div>
</template>

<script>
import WordList from '@/components/wordList'
export default {
  components: {
    WordList
  },
  data () {
    return {
      list: [
        {
          id: 1,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 1,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 1,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 1,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述'
        },
        {
          id: 2,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 3,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 4,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        },
        {
          id: 5,
          title: '文章标题',
          type: '文章类别',
          time: '2018-4-14',
          description: '文章简述'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>
