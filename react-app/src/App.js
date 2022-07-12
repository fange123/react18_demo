import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList";

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    //* 初始化 的时候发请求
    //* fetch（）用来向服务器发请求，是ajax升级版
    //* 两个参数：1，请求地址；2，请求信息(可省略)
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:1337/api/students");
      if (res.status === 200) {
        const data = await res.json(); //* 该方法可以把响应来的json转换成js对象
        setList(data.data);
      } else {
        throw new Error("数据加载异常");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
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
