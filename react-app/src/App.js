import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //* 初始化 的时候发请求
    //* fetch（）用来向服务器发请求，是ajax升级版
    //* 两个参数：1，请求地址；2，请求信息(可省略)
    setLoading(true);
    fetch("http://localhost:1337/api/students")
      .then((res) => {
        //* res是响应信息,  res.json()是需要拿到的数据信息，但是它是个promise
        if (res.status === 200) {
          return res.json(); //* 该方法可以把响应来的json转换成js对象
        }

        throw new Error("数据加载异常");
      })
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!loading && !error && <StudentList list={list} />}
      {loading && <p>数据正在加载中...</p>}
      {error && <p>数据加载异常！！！</p>}
    </div>
  );
};

export default App;
