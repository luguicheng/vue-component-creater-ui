  <template lc_id="9AxddfDA7g">
      <div lc_id="Rtw7v5lsjY">
          <div lc_id="lik26TScTd">
              <div class="demonstration-element" lc_id="x71mVpCQ2k">List 列表</div>
              <template lc_id="jSQayLJhNZ">
                  <div class="list" lc-mark lc_id="S3c05a+Tsw">
                      <ul class="list" style="margin: 0" lc_id="yNnraJVQo1">
                          <li v-for="(item, index) in list" :key="index" class="list-li" style="line-height: 2em" lc_id="5ePhoxNr4t">
                              <span class="title" lc_id="zyqZeIgY+X">{{ item }}</span>
                              <span class="list-item-right" lc_id="ck0TqDEoC8">2021-12-8</span>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="uwKd6KAgkI">ListCard 列表</div>
              <template lc_id="26y1Joc5FJ">
                  <div class="list-card" lc-mark lc_id="r8iywF6aLb">
                      <ul style="padding: 0; margin: 0" lc_id="gZZkpdJkm+">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item" lc_id="3E7Mhl20Wm">
                              <el-image class="list-card-item-image" :src="item.imgUrl" fit="cover" lazy lc_id="5oKojPX/VO"></el-image>
                              <div class="item-right" lc_id="lqfwhC73AZ">
                                  <div class="item-title" lc_id="Y/q9s5axHA">{{ item.title }}</div>
                                  <div class="item-desc" lc_id="Ks7vHC1iEM">{{ item.desc }}</div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="kAH9k/tqtN">ListCardImageRight 列表</div>
              <template lc_id="IHKw8ugOR5">
                  <div class="list-card" lc-mark lc_id="f2bOoCWfJo">
                      <ul style="padding: 0; margin: 0" lc_id="y56aJQ3yMg">
                          <li class="list-card-item" v-for="item in listCard" :key="item.id" lc_id="pCSKvGgKYh">
                              <div class="item-right" lc_id="WYgAXwXHiz">
                                  <div class="item-title" lc_id="bLrub/5XnE">{{ item.title }}</div>
                                  <div class="item-desc" lc_id="eJkGMSrJlD">{{ item.desc }}</div>
                              </div>
                              <el-image :src="item.imgUrl" class="list-card-item-image" fit="cover" lazy lc_id="mC5DU8iZsJ"></el-image>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="I+2S0UaunT">ListCardImageLeft 列表</div>
              <template lc_id="3LHZGby1Sn">
                  <div class="list-card list-card-vertical" lc-mark lc_id="lV2/Jq7B5Z">
                      <ul style="padding: 0; margin: 0" lc_id="BGvi0Y0Cp6">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item list-card-item-vertical border-bottom" lc_id="hwfh7hMcCs">
                              <div class="item-title mgb-10" lc_id="iw9QNJvbXC">{{ item.title }}</div>
                              <el-image class="list-card-item-image" style="width: 100%; height: 200px" lazy :src="item.imgUrl" fit="cover" lc_id="GzhKnU0YQ0"></el-image>
                              <div class="item-desc" lc_id="ft9K1SqIPT">{{ item.desc }}</div>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="ePJCpAa8x9">ListCardImageCenter 列表</div>
              <template lc_id="46kwDxgnvb">
                  <div class="list-card list-card-vertical" lc-mark lc_id="Q02564PKSC">
                      <ul style="padding: 0; margin: 0" lc_id="3HQg8fYD1m">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item list-card-item-vertical border-bottom" lc_id="fpt1mZloNz">
                              <el-image style="width: 100%; height: 200px" lazy :src="item.imgUrl" fit="cover" lc_id="bJhmquoKcq"></el-image>
                              <div class="item-title mgt-10" lc_id="CKeVlSIdX8">{{ item.title }}</div>
                          </li>
                      </ul>
                  </div>
              </template>
          </div>
      </div>
  </template>
  <script>
export default {
  name: "List",
  data() {
    return {
      list: [
        "卡片正文标题列表卡片正文标题卡片正文标题列表卡片正文标题卡片正文标题列表卡片正文标题",
        "卡片正文标题列表卡片正文标题",
        "卡片正文标题列表卡片正文标题",
      ],
      listCard: [
        {
          id: 1,
          imgUrl:
            "https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "列表卡片正文标题列表卡片正文标题,列表卡片正文标题列表卡片正文标题",
          desc: "简介简介简介",
        },
        {
          id: 2,
          imgUrl:
            "https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "列表卡片正文标题列表卡片正文标题,列表卡片正文标题列表卡片正文标题",
          desc: "简介简介简介",
        },
      ],
    };
  },
  methods: {},
};  </script>
  <style scoped lang="scss">.list {
  padding: 10px;
  background: #f0f0f0;
  margin-bottom: 10px;
}
.list-card {
  padding: 10px;
  background: #f0f0f0;
  margin-bottom: 10px;
}
.list-card-vertical {
  width: 375px;
}
.list-card-item {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.list-card-item-vertical {
  flex-direction: column;
}
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
  padding-bottom: 15px;
}
.border-bottom:last-child {
  border-bottom: 0;
}
.list-card-item-image {
  flex-shrink: 0;
  width: 150px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
}
.item-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
}
.item-title {
  font-size: 1.2em;
  font-weight: 550;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
}
.mgb-10 {
  margin-bottom: 10px;
}
.mgt-10 {
  margin-top: 10px;
}
.item-desc {
  padding: 6px 0;
  color: #909090;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
}
.list-li {
  list-style: none;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  cursor: pointer;
}
.title:hover {
  color: cornflowerblue;
}

.list-item-right {
  font-size: 0.8rem;
  opacity: 0.5;
  flex-shrink: 0;
}</style>
