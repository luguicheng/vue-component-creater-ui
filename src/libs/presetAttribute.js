export default {
  "el-button": {
    "@click": "onButtonClick",
    size: "small",
  },
  "el-radio-group": {
    "v-model": "radio",
  },
  "el-radio": {
    ":label": 0,
  },
  "el-checkbox-group": {
  },
  "el-link": {
    "@click": "onClickLink",
  },
  "el-select": {
    size: "small",
  },
  "el-input": {
    "v-model": "input",
    placeholder: "请输入内容",
    size: "small",
    class: "input",
  },

};
