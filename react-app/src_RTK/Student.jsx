import { useSelector, useDispatch } from "react-redux";
import { setName } from "./store/studentSlice"; //从store对应位置获取action对象
const Student = () => {
  // * redux-toolkit在页面中怎么获取state中的值
  //* 之前的方法是使用connect连接，现在可以用一个react-redux的hook（useSelector）

  //  useSelector((state) => state); //~返回所有state，但是一般只需要返回本页面需要的
  const student = useSelector((state) => state.student);

  //useDispatch()是获取派发器的hook
  const dispatch = useDispatch();

  //修改name的函数
  const changeNameHandle = () => {
    dispatch(setName("张海玉"));
  };

  return (
    <>
      <h3>学生信息</h3>
      <p>姓名：{student.name}</p>
      <p>年龄：{student.age}</p>
      <p>出生地址：{student.address}</p>
      <p>性别：{student.gender}</p>
      <button onClick={changeNameHandle}>修改name</button>
    </>
  );
};

export default Student;
