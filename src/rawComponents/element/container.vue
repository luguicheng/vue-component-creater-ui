  <template lc_id="XJkKzJ06tv">
      <div lc_id="/CF1zqlrKa">
          <div lc_id="4DOfKCgatF">
              <div class="demonstration-element" lc_id="xweUl0tEeN">Container 布局容器</div>
              <el-container class="container" lc-mark lc_id="1VXObrdd7N">
                  <el-header class="header" lc-mark lc_id="QKfTRdpP9t">Header</el-header>
                  <el-main class="main" lc-mark lc_id="CEww9LuokJ">Main</el-main>
              </el-container>
              <el-container class="container" lc-mark lc_id="Cepn7MKmdS">
                  <el-header class="header" lc-mark lc_id="dtyUqSajiv">Header</el-header>
                  <el-main class="main" lc-mark lc_id="NWEju0XOHJ">Main</el-main>
                  <el-footer class="footer" lc-mark lc_id="1LcIZWBTV/">Footer</el-footer>
              </el-container>
              <el-container class="container" lc-mark lc_id="birpu7Uiq1">
                  <el-aside class="aside" lc-mark width="200px" lc_id="1Lf7a0a0ph">Aside</el-aside>
                  <el-main class="main" lc-mark lc_id="9KptQSz3+u">Main</el-main>
              </el-container>
              <el-container class="container" lc-mark lc_id="eaV4iGUz96">
                  <el-header class="header" lc-mark lc_id="TaCD08NSSP">Header</el-header>
                  <el-container class="container" lc_id="5J+gD0iEvI">
                      <el-aside class="aside" lc-mark width="200px" lc_id="FRRvlM/Cfr">Aside</el-aside>
                      <el-main class="main" lc-mark lc_id="lcw3QuiEZe">Main</el-main>
                  </el-container>
              </el-container>
              <el-container class="container" lc-mark lc_id="PLqrqKhgA7">
                  <el-header class="header" lc-mark lc_id="tmHiJevIsa">Header</el-header>
                  <el-container class="container" lc_id="qS1KC1cfri">
                      <el-aside class="aside" lc-mark width="200px" lc_id="CzDDLIlPIB">Aside</el-aside>
                      <el-container class="container" lc_id="fSXNZUdZ/f">
                          <el-main class="main" lc-mark lc_id="wc1jD3bDoT">Main</el-main>
                          <el-footer class="footer" lc-mark lc_id="SjJpHf6a7g">Footer</el-footer>
                      </el-container>
                  </el-container>
              </el-container>
              <el-container class="container" lc-mark lc_id="ycgi9Z8Kny">
                  <el-aside class="aside" lc-mark width="200px" lc_id="r/EjWyjczJ">Aside</el-aside>
                  <el-container class="container" lc_id="NqJ8JL820i">
                      <el-header class="header" lc-mark lc_id="XxixXzG8a2">Header</el-header>
                      <el-main class="main" lc-mark lc_id="s39II6LC/4">Main</el-main>
                  </el-container>
              </el-container>
              <el-container class="container" lc-mark lc_id="JYPHz0bZMF">
                  <el-aside class="aside" lc-mark width="200px" lc_id="qRJK56Q74V">Aside</el-aside>
                  <el-container class="container" lc_id="c3KN/J7Yi2">
                      <el-header class="header" lc-mark lc_id="GDfxqJ0R3d">Header</el-header>
                      <el-main class="main" lc-mark lc_id="Zx/63VU8p0">Main</el-main>
                      <el-footer class="footer" lc-mark lc_id="BLY1vTH5li">Footer</el-footer>
                  </el-container>
              </el-container>
          </div>
          <div lc_id="fFXoD13StH">
              <div class="demonstration-element" lc_id="qzSnnCsiiY">Skeleton 骨架屏</div>
              <el-skeleton lc-mark :rows="6" animated lc_id="pMz9OoTtuO"></el-skeleton>
          </div>
          <div lc_id="/+eytuLsMO">
              <div class="demonstration-element" lc_id="q2Xgt807d0">Empty 空状态</div>
              <el-empty lc-mark description="描述文字" lc_id="GhNJigV87p"></el-empty>
          </div>
          <div lc_id="pR02CCkeLy">
              <div class="demonstration-element" lc_id="CrH218ZZHh">Result 结果</div>
              <el-row lc_id="B0lJgeMQgq">
                  <el-col :sm="12" :lg="6" lc_id="aj5rgx9gtC">
                      <el-result icon="success" lc-mark title="成功提示" subtitle="请根据提示进行操作" lc_id="TkxmLNdH1k">
                          <template slot="extra" lc_id="eKy+B81uWz">
                              <el-button type="primary" size="medium" lc_id="mjvsUigHYK">返回</el-button>
                          </template>
                      </el-result>
                  </el-col>
                  <el-col :sm="12" :lg="6" lc_id="t8NFAo4Rh9">
                      <el-result icon="warning" lc-mark title="警告提示" subtitle="请根据提示进行操作" lc_id="H66rtRO+l7">
                          <template slot="extra" lc_id="NZlnnaHVpe">
                              <el-button type="primary" size="medium" lc_id="8+A/PdJlL/">返回</el-button>
                          </template>
                      </el-result>
                  </el-col>
                  <el-col :sm="12" :lg="6" lc_id="UqNiIqJz/1">
                      <el-result icon="error" lc-mark title="错误提示" subtitle="请根据提示进行操作" lc_id="g7rPSUMWcM">
                          <template slot="extra" lc_id="04xPYOz/ON">
                              <el-button type="primary" size="medium" lc_id="7MAezDvKx5">返回</el-button>
                          </template>
                      </el-result>
                  </el-col>
                  <el-col :sm="12" :lg="6" lc_id="+ix6hlAfDe">
                      <el-result icon="info" lc-mark title="信息提示" subtitle="请根据提示进行操作" lc_id="/vmCqxMpho">
                          <template slot="extra" lc_id="b1LfBHu9OM">
                              <el-button type="primary" size="medium" lc_id="ke499n5dzw">返回</el-button>
                          </template>
                      </el-result>
                  </el-col>
              </el-row>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {};
  },
  methods: {},
};  </script>
  <style scoped>.header,
.footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  min-height: 60px;
  margin-bottom: 0!important;
  margin: 2px;
}

.aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 200px;
  margin-bottom: 0!important;
  margin: 2px;
}

.main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: 160px;
  margin-bottom: 0!important;
  margin: 2px;
}

body > .container {
  margin-bottom: 40px;
}

.container:nth-child(5) .aside,
.container:nth-child(6) .aside {
  min-height: 260px;
}

.container:nth-child(7) .aside {
  min-height: 320px;
  margin-bottom: 0 !important;
  margin: 2px;
}</style>
