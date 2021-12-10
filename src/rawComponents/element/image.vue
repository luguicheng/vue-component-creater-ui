  <template lc_id="0sygtaZzzK">
      <div lc_id="ALTsXkmIGE">
          <div lc_id="IyBLXIo0O0" class="img-container">
              <div class="demonstration-element" lc_id="Nq2fzK+TO2">Image 图片</div>
              <div class="img" lc-mark lc_id="FHnrBwj71E">
                  <el-image lc-mark :src="url4" style="width: 100px;height:100px" fit="none" lc_id="pUzae4LDfZ"></el-image>
              </div>
              <div class="img" lc-mark lc_id="c7PkXHn46B">
                  <el-image lc-mark :src="url4" style="width: 100px;height:100px" fit="cover" lc_id="xpJHMNhDHQ"></el-image>
              </div>
              <div class="img" lc-mark lc_id="OfDbH48Dqd">
                  <el-image lc-mark :src="url4" style="width: 100px;height:100px" fit="contain" lc_id="f+p3OK5//3"></el-image>
              </div>
              <div class="img" lc-mark lc_id="IXLvop//zD">
                  <el-image lc-mark :src="url4" style="width: 100px;height:100px" fit="fill" lc_id="JhLOV9CpES"></el-image>
              </div>
              <div class="img" lc-mark lc_id="yQL0FP2cM4">
                  <el-image lc-mark :src="url4" style="width: 100px;height:100px" fit="scale-down" lc_id="uXwV+xiW2H"></el-image>
              </div>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      url4: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
  methods: {},
};  </script>
  <style scoped lang="scss">.img {
        display: inline-block;
        margin-right: 10px;
      }</style>
