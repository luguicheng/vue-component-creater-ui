  <template lc_id="CNCKvjgnfm">
      <div lc_id="2IZrBBw4Li">
          <div class="demonstration-element" lc_id="wcV8rb1pr2">StickyFooter 贴底布局</div>
          <div class="sticky.footer2" lc-mark lc_id="JGiZv7nfYG">
              <div class="wrapper" lc_id="e6MPCpUAMJ">
                  <div class="content" lc_id="lECVnK8QXT">内容区域</div>
                  <div class="footer" lc_id="XW6fdOAMIj">底部区域</div>
              </div>
          </div>
      </div>
  </template>
  <script>
export default {
  name: "StickyFooter",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
};  </script>
  <style scoped lang="scss">.sticky.footer2 {
  height: 300px;
}
.wrapper {
  position: relative;
  box-sizing: border-box;
  padding-bottom: 100px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  background: #f0f0f0;
  margin-bottom: 1px;
  flex: 1;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #e0e0e0;
}</style>
