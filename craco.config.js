const path = require("path");
const CracoLess1 = require("craco-less");
// 传入目录与当前目录进行拼接，返回绝对地址
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  plugins: [{ plugin: CracoLess1 }],
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
};
