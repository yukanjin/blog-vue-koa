<template>
  <div class="form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="相册选择">
          <el-select
            filterable
            allow-create
            v-model="value"
            placeholder="请选择或添加相册">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="相册描述">
        <el-input placeholder="这个相册有什么意义？"></el-input>
      </el-form-item>
      <el-form-item label="相册密码">
        <el-input type="password" placeholder="设置密码转为私密相册"></el-input>
      </el-form-item>
      <el-form-item label="图片选择">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :auto-upload="false"
          :on-preview="handlePictureCardPreview"
          :on-change="bindChange"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button>保存</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      options: [{
        value: 'travel',
        label: 'travel'
      }],
      form: {},
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: []
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
