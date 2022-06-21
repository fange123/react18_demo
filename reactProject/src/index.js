//*  src/index.js是js的入口文件
import DropBack from "./portal/index";

//# 初始化一个项目(创建package.json文件)： yarn init -y   npm init -y
//# 安装依赖 yarn add react react-dom react-scripts  (react核心库，react dom操作库，为react提供开发环境的库，包括webpack，测试库等)
//# 运行npx react-scripts start启动项目（初次启动需要输入y确认）
//# 或者将react-scripts start设置到package.json的scripts选项中，然后通过npm start启动（初次启动需要输入y确认）”scripts”: { “start”: “react-scripts start” }
import ReactDOM from "react-dom/client"; //react18开始把react dom拆分成client和service
import "./index.css";

const App = () => {
  return (
    <div className='content'>
      <div className='first'>啊啊啊</div>
      <div className='second'>哈哈哈哈</div>
      <DropBack />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
