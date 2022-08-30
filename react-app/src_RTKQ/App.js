import React from "react";
import StudentList from "./components/StudentList";
import { useGetStudentsQuery } from "./components/api/studentApi";

const App = () => {
  const { data, isFetching, isSuccess, refetch } = useGetStudentsQuery();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ width: "50px", height: "30px" }} onClick={refetch}>
        刷新
      </button>
      {isSuccess && <StudentList list={data} />}
      {isFetching && <p>数据正在加载中...</p>}
    </div>
  );
};

export default App;
