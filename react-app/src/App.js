import React, { useEffect } from "react";
import StudentList from "./components/StudentList";
import StudentContent from "./components/store";
import { useFetch } from "./components/hooks/useFetch";

const App = () => {
  const { fetchList, loading, error, data: list } = useFetch("students", {});

  const refresh = () => {
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <StudentContent.Provider value={{ fetchList }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={refresh} style={{ width: "50px", height: "30px" }}>
          刷新
        </button>
        {!loading && !error && <StudentList list={list} />}
        {loading && <p>数据正在加载中...</p>}
        {error && <p>数据加载异常！！！</p>}
      </div>
    </StudentContent.Provider>
  );
};

export default App;
