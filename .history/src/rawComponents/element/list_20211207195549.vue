  <template lc_id="KCiR9cYJ8Pxx">
      <div lc_id="Quld4HtbiZxx">
          <div lc_id="JpTYTNBzEexx">
              <div class="demonstration-element" lc_id="5yst4mGOlisttext">List 列表</div>
              <template lc_id="listQ3pyBv0yQLlisttext">
                  <div class="list" lc_id="listQ3pyBv0yQxxLlisttext" lc-mark>
                      <ul lc_id="listQ3pyBv0yQLlistul" class="list" style="margin: 0">
                          <li v-for="item in list" :key="item" :lc_id="'listQ3pyBv0yQLlist' + item" lc_id="kFyp5H+3p2" class="list-li" style="line-height: 2em">{{ item }}</li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="5yst4mGOV4listcard">ListCard 列表</div>
              <template lc_id="SPvwLb3Rsalistcard">
                  <div class="list-card" lc_id="ytUyoI+qdElistcard" lc-mark>
                      <ul lc_id="clG9pVvHjklistcard" style="padding: 0; margin: 0">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item" lc_id="bWqL4Fy2iOlistcard">
                              <el-image class="list-card-item-image" :src="item.imgUrl" fit="cover" lc_id="jkmVAKQxrQlistcard" lazy></el-image>
                              <div class="item-right" lc_id="zBsMNOzclQlistcard">
                                  <div class="item-title" lc_id="crveS3Cffxlistcard">{{ item.title }}</div>
                                  <div class="item-desc" lc_id="2Ou2t/99v3listcard">{{ item.desc }}</div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="5yst4mGOV4listcardImageLeft">ListCardImageRight 列表</div>
              <template lc_id="w63ZNwl7PNImageLeft">
                  <div class="list-card" lc_id="ytUyoI+qdEImageLeft" lc-mark>
                      <ul lc_id="clG9pVvHjkImageLeft" style="padding: 0; margin: 0">
                          <li class="list-card-item" v-for="item in listCard" :key="item.id" lc_id="bWqL4Fy2iOImageLeft">
                              <div class="item-right" lc_id="zBsMNOzclQImageLeft">
                                  <div class="item-title" lc_id="crveS3CffxImageLeft">{{ item.title }}</div>
                                  <div class="item-desc" lc_id="2Ou2t/99v3ImageLeft">{{ item.desc }}</div>
                              </div>
                              <el-image :src="item.imgUrl" class="list-card-item-image" fit="cover" lc_id="jkmVAKQxrQImageLeft" lazy></el-image>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="5yst4mGOV4listcardmageRight">ListCardImageLeft 列表</div>
              <template lc_id="M+M48Gt/6/ImageRight">
                  <div class="list-card list-card-vertical" lc-mark lc_id="ytUyoI+qdEImageRight">
                      <ul lc_id="clG9pVvHjkImageRight" style="padding: 0; margin: 0">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item list-card-item-vertical border-bottom" lc_id="bWqL4Fy2iOImageRight">
                              <div class="item-title mgb-10" lc_id="crveS3CffxImageRight">{{ item.title }}</div>
                              <el-image class="list-card-item-image" style="width: 100%; height: 200px" lazy :src="item.imgUrl" fit="cover" lc_id="jkmVAKQxrQImageRight"></el-image>
                              <div class="item-desc" lc_id="2Ou2t/99v3ImageRight">{{ item.desc }}</div>
                          </li>
                      </ul>
                  </div>
              </template>
              <div class="demonstration-element" lc_id="5yst4mGOV4listcardImageCenter">ListCardImageCenter 列表</div>
              <template lc_id="1elNET027yImageCenter">
                  <div class="list-card list-card-vertical" lc-mark lc_id="ytUyoI+qdEImageCenter">
                      <ul lc_id="clG9pVvHjkImageCenter" style="padding: 0; margin: 0">
                          <li v-for="item in listCard" :key="item.id" class="list-card-item list-card-item-vertical border-bottom" lc_id="bWqL4Fy2iOImageCenter">
                              <el-image style="width: 100%; height: 200px" lazy :src="item.imgUrl" fit="cover" lc_id="jkmVAKQxrQImageCenter"></el-image>
                              <div class="item-title mgt-10" lc_id="crveS3CffxImageCenter">{{ item.title }}</div>
                          </li>
                      </ul>
                  </div>
              </template>
          </div>
      </div>
  </template>
  <script>
export default {
  name: 'List',
  data() {
    return {
      list: ["列表1", "列表2", "列表3"],
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
  <style scoped>.list {
  padding: 10px;
  background: #e9eef3;
  margin-bottom: 10px;
}
.list-card {
  padding: 10px;
  background: #e9eef3;
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
}</style>
