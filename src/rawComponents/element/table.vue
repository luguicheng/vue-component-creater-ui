  <template lc_id="BHClb68uyL">
      <div lc_id="4wLY9fQl2E">
          <div lc_id="IRbaCkf4z9">
              <div class="demonstration-element" lc_id="bsJJf/00ZY">Table 表格</div>
              <el-table :data="tableData" style="width: 100%" lc-mark lc_id="XLsqji59R6">
                  <el-table-column type="index" align="center" label="序号" width="60" lc_id="MTVhc38e86"></el-table-column>
                  <el-table-column prop="date" label="日期" width="180" lc_id="hj1J+s1waU"></el-table-column>
                  <el-table-column prop="name" label="姓名" width="180" lc_id="Np9N1vqLKI"></el-table-column>
                  <el-table-column prop="address" label="地址" lc_id="gRoMI4l/SJ"></el-table-column>
              </el-table>
          </div>
          <div lc_id="e18PjP5Gfy">
              <div class="demonstration-element" lc_id="jtxljY4WwZ">Table 背景色</div>
              <el-radio-group v-model="tableType" lc_id="Qwx2mgVPV6" style="margin-bottom: 5px">
                  <el-radio-button label="plain" lc_id="1KvKzxXdw/"></el-radio-button>
                  <el-radio-button label="gray" lc_id="03e00MvIoC"></el-radio-button>
                  <el-radio-button label="dark" lc_id="/dAAL5w4q6"></el-radio-button>
              </el-radio-group>
              <template v-if="tableType === 'plain'" lc_id="8MSDQ8/xzr">
                  <el-table lc-mark :data="
            tableData &&
            tableData.filter(
              (data) => !search || data.name.toLowerCase().match(search.toLowerCase())
            )
          " style="width: 100%" lc_id="Au8kKaN8SR">
                      <el-table-column type="selection" align="center" width="60" lc_id="ys/mWS43AB"></el-table-column>
                      <el-table-column label="日期" prop="date" lc_id="qO9R2Uoo8W"></el-table-column>
                      <el-table-column label="姓名" prop="name" lc_id="/4lprHfDPy"></el-table-column>
                      <el-table-column prop="status" label="状态" lc_id="Aheg6QNhdP">
                          <template v-slot="{ row }" lc_id="80jZGAn/Wc">
                              <el-switch v-model="row.status" @change="changeStatus" active-color="#13ce66" inactive-color="#ff4949" lc_id="ImSxvAZYzb"></el-switch>
                          </template>
                      </el-table-column>
                      <el-table-column align="right" lc_id="SDw6TE9HPv">
                          <template slot="header" slot-scope="scope" lc_id="2i6xSegp/v">
                              <el-input v-model="search" clearable size="mini" placeholder="输入姓名关键字搜索" lc_id="qJw54BJ3wf"></el-input>
                          </template>
                          <template slot-scope="scope" lc_id="Af9Mskhl6d">
                              <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" lc_id="+50o18B/xi">Edit</el-button>
                              <el-button size="mini" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)" lc_id="JASfF2omXU">Delete</el-button>
                          </template>
                      </el-table-column>
                  </el-table>
              </template>
              <template v-if="tableType === 'gray'" lc_id="qzVW6f0R7g">
                  <el-table :data="
            tableData &&
            tableData.filter(
              (data) => !search || data.name.toLowerCase().match(search.toLowerCase())
            )
          " class="gray-table" header-cell-class-name="gray-header" row-class-name="gray-row" style="width: 100%" lc-mark lc_id="A8nRtBP55g">
                      <el-table-column type="selection" align="center" width="60" lc_id="L1BVRECOdO"></el-table-column>
                      <el-table-column prop="date" label="日期" width="180" lc_id="McAliLKZde"></el-table-column>
                      <el-table-column prop="name" label="姓名" width="180" lc_id="xMVAdjrUkj"></el-table-column>
                      <el-table-column prop="status" label="状态" lc_id="Aheg6QNhdP">
                          <template v-slot="{ row }" lc_id="/OfietKWgI">
                              <el-switch v-model="row.status" @change="changeStatus" active-color="#13ce66" inactive-color="#ff4949" lc_id="Ylj6YDfRII"></el-switch>
                          </template>
                      </el-table-column>
                      <el-table-column align="right" lc_id="Qzkq3w4QtH">
                          <template slot="header" slot-scope="scope" lc_id="9UZXOV9nsH">
                              <el-input v-model="search" clearable size="mini" placeholder="输入姓名关键字搜索" lc_id="ouHF9sDDaJ"></el-input>
                          </template>
                          <template slot-scope="scope" lc_id="JLE8g5Z/Ul">
                              <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" lc_id="wUmvUow4VR">Edit</el-button>
                              <el-button size="mini" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)" lc_id="LdIlfo0/zt">Delete</el-button>
                          </template>
                      </el-table-column>
                  </el-table>
              </template>
              <template v-if="tableType === 'dark'" lc_id="uYp+U/a/2o">
                  <el-table :data="
            tableData &&
            tableData.filter(
              (data) => !search || data.name.toLowerCase().match(search.toLowerCase())
            )
          " class="dark-table" header-cell-class-name="dark-header" row-class-name="dark-row" style="width: 100%" lc-mark lc_id="0FOV5yrx8Z">
                      <el-table-column type="selection" align="center" width="60" lc_id="tlVKbZ8nco"></el-table-column>
                      <el-table-column prop="date" label="日期" width="180" lc_id="m0cXCHTHXY"></el-table-column>
                      <el-table-column prop="name" label="姓名" width="180" lc_id="FrQU5v8FI/"></el-table-column>
                      <el-table-column prop="status" label="状态" lc_id="Aheg6QNhdP">
                          <template v-slot="{ row }" lc_id="v2Mevc9+c0">
                              <el-switch v-model="row.status" @change="changeStatus" active-color="#13ce66" inactive-color="#ff4949" lc_id="gbTw8jJN+N"></el-switch>
                          </template>
                      </el-table-column>
                      <el-table-column align="right" lc_id="SDw6TE9HPv">
                          <template slot="header" slot-scope="scope" lc_id="2i6xSegp/v">
                              <el-input v-model="search" clearable size="mini" placeholder="输入姓名关键字搜索" lc_id="qJw54BJ3wf"></el-input>
                          </template>
                          <template slot-scope="scope" lc_id="Af9Mskhl6d">
                              <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)" lc_id="+50o18B/xi">Edit</el-button>
                              <el-button size="mini" icon="el-icon-delete" type="danger" @click="handleDelete(scope.$index, scope.row)" lc_id="JASfF2omXU">Delete</el-button>
                          </template>
                      </el-table-column>
                  </el-table>
              </template>
          </div>
          <div lc_id="TaMA1IJUfS" v-show="false">
              <div class="demonstration-element" lc_id="SQLXTtiy0A">Table 动态表格👍</div>
              <el-table :data="tableData" style="width: 100%" lc-mark lc_id="cfJJEoRcnj">
                  <el-table-column :prop="propItem.prop" :label="propItem.label" v-for="propItem in propList" :key="propItem.prop" lc_id="1wFAWho0EI">
                      <template v-slot="{ row }" lc_id="bEA2zoHvYj">
                          <span v-if="!propItem.component" lc_id="cr+zHB94No">{{ row[propItem.prop] }}</span>
                          <template v-else lc_id="i/xal74R18">
                              <component v-if="row[propItem.prop] !== undefined" :is="propItem.component" v-model="row[propItem.prop]" v-bind="handleAttrs(propItem, row)" v-on="propItem.on" lc_id="5QkTB0b+hw">{{ propItem.formatter ? propItem.formatter(row) : row[propItem.prop] }}</component>
                          </template>
                      </template>
                  </el-table-column>
              </el-table>
          </div>
          <div lc_id="h9qgI6Z703">
              <div class="demonstration-element" lc_id="I/6sX0bh7F">Pagination 分页</div>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" hide-on-single-page :page-size="pageSize" lc-mark layout="prev, pager, next" :total="total" lc_id="r+K0+FJnu3"></el-pagination>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" hide-on-single-page :page-sizes="[100, 200, 300, 400]" :page-size="pageSize" lc-mark layout="total, sizes, prev, pager, next, jumper" :total="total" lc_id="fc1OIKJjYg"></el-pagination>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" hide-on-single-page background :page-size="pageSize" lc-mark layout="prev, pager, next" :total="total" lc_id="t8Stsvf5Z/"></el-pagination>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" hide-on-single-page background :page-sizes="[100, 200, 300, 400]" :page-size="pageSize" lc-mark layout="total, sizes, prev, pager, next, jumper" :total="total" lc_id="5XP60ufssh"></el-pagination>
          </div>
      </div>
  </template>
  <script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: false,
        },
        {
          date: "2016-05-04",
          name: "陆小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: false,
        },
        {
          date: "2016-05-01",
          name: "黄小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: false,
          tag: "Vue"
        },
        {
          date: "2016-05-03",
          name: "赵小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: true,
          imgUrl: "https://imge.com/wp-content/uploads/2019/02/IMGE-Social-Share.png",
          remark: "一条备注",
          tag: "Vue",
        },
      ],
      propList: [
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "日期",
          prop: "date",
        },
        {
          label: "地址",
          prop: "address",
        },
        {
          label: "动态组件",
          prop: "status",
          component: "el-switch",
          on: {
            change: this.changeStatus,
          },
          formatter: (row) => {
            return !!row.status;
          },
        },
        {
          label: "图片",
          prop: "imgUrl",
          component: "el-image",
          on: {
            click: this.imgClick,
          },
        },
        {
          label: "备注",
          prop: "remark",
          component: "el-input",
          attrs: {
            clearable: true,
          },
          on: {
            input: this.inputChange,
          },
        },
        {
          label: "标签",
          prop: "tag",
          component: "el-tag",
          attrs: {
            type: (row) => {
              const valueMap = {
                true: "success",
                false: "info",
              };
              return valueMap[row.status];
            },
          },
        },
      ],
      tableType: "plain",
      search: "",
      pageSize: 10,
      total: 400,
      currentPage: 1,
    };
  },
  methods: {
    handleAttrs(propItem, row) {
      let ret = {}
      for(let k in propItem.attrs) {
        if(typeof propItem.attrs[k] === 'function') {
          ret[k] = propItem.attrs[k](row)
        }else {
          ret[k] = propItem.attrs[k]
        }
      }

      if(propItem.component === 'el-image') {
        ret.src = row[propItem.prop]
      }
      return ret
    },
    changeStatus(r) {
      console.log(r)
    },
    imgClick() {
      console.log('imgClick')
    },
    inputChange(i) {
      console.log('inputChange', i)
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
    },
    handleCurrentChange() {},
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};  </script>
  <style scoped lang="scss"></style>
  <style lang="scss">.dark-table {
  .dark-header {
    background: #444 !important;
    color: #fff !important;
  }
  .dark-row {
    background: #555 !important;
    color: #fff !important;
  }
  .el-table__cell {
    border-bottom: 1px solid #444 !important;
  }
  .dark-row:hover .el-table__cell {
    background: #666 !important;
    color: #fff !important;
  }
  .el-table__empty-block {
    background: url("../../assets/icon/empty-dark.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #666;
    background-size: 35px;
    padding-bottom: 35px;
  }
  .el-table__empty-text {
    transform: translateY(50px);
  }
}

.gray-table {
  .gray-header {
    background: #ccc !important;
    color: #666 !important;
  }
  .gray-row {
    background: #eee !important;
    color: #666 !important;
  }
  .el-table__cell {
    border-bottom: 1px solid #e0e0e0 !important;
  }
  .gray-row:hover .el-table__cell {
    background: #e0e0e0 !important;
    color: #666 !important;
  }
  .el-table__empty-block {
    background: url("../../assets/icon/empty-dark.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #e0e0e0;
    background-size: 35px;
    padding-bottom: 35px;
  }
  .el-table__empty-text {
    transform: translateY(50px);
  }
}</style>
