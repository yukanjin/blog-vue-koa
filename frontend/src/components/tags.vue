<template>
  <div class="tags clear-fix">
    <div class="tag" :class="{tag, 'tag__checked': tag.checked}" @click="switchTag(tag)" v-for="tag in tags" :key='tag.id'>
      {{tag.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'tags',
  computed: {
    tags () {
      return [{id: 0, name: '全部文章', value: ''}, ...this.$store.state.types].map(tag => {
        if (tag.name === this.$store.state.checkedType) {
          this.$set(tag, 'checked', true)
        } else {
          tag.checked = false
        }
        return tag
      })
    }
  },
  methods: {
    switchTag (tag) {
      this.$store.commit('setCheckedTag', tag.name)
    }
  }
}
</script>

<style lang="less" scoped>
  .tags {
    width: 775px;
  }
  .tag {
    box-sizing: border-box;
    border: 1px solid transparent;
    float: left;
    width: 110px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #fff;
    margin-right: 23px;
    color: #adc2d7;
    cursor: pointer;
    &:nth-of-type(6n) {
      margin-right: 0;
    }
    &:nth-of-type(n+7) {
      margin-top: 20px;
    }
    &__checked,
    &:hover {
      border-color: #adc2d7;
      color: #8cc1f7;
      box-shadow: 0px 0px 5px #adc2d7;
    }
  }
</style>
