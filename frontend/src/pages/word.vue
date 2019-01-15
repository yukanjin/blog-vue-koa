<template>
  <div class="word">
    <tags />
    <word-list class="mt20" />
  </div>
</template>

<script>
import Tags from '@/components/tags'
import WordList from '@/components/wordList'
export default {
  components: {
    Tags,
    WordList
  },
  data () {
    return {
    }
  }
}
</script>
