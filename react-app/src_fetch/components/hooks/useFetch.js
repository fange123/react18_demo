import { useState, useCallback } from "react";

export const useFetch = (url, config, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = useCallback(async (body) => {
    //* 初始化 的时候发请求
    //* fetch（）用来向服务器发请求，是ajax升级版
    //* 两个参数：1，请求地址；2，请求信息(可省略)
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`http://localhost:1337/api/${url}`, {
        method: config.method || "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify({ data: body }) : null,
      });

      if (res.status === 200) {
        const data = await res.json(); //* 该方法可以把响应来的json转换成js对象
        setData(data.data);
        cb && cb();
      } else {
        throw new Error("数据加载异常");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    loading,
    data,
    fetchList,
  };
};
