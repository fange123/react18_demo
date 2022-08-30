import React, { useState } from "react";
import StudentForm from "./StudentForm";
import { useDeleteStudentMutation } from "./api/studentApi";

const Student = (props) => {
  const { attributes, id } = props;
  const { name, address, gender, age } = attributes;
  const [isEdit, setIsEdit] = useState(false);

  //* Mutation和query 不同，不能一进来就发送请求
  //+ 返回两个参数：1，请求触发器； 2，结果集
  const [delStudent, result] = useDeleteStudentMutation();
  const { isSuccess } = result;

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleDelete = () => {
    delStudent(id);
  };

  return (
    <>
      {!isEdit && !isSuccess && (
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td style={{ display: "flex" }}>
            <button onClick={() => handleDelete()}>删除</button>
            <button onClick={handleEdit}>编辑</button>
          </td>
        </tr>
      )}

      {isSuccess && (
        <tr>
          <td colSpan='5'>删除成功</td>
        </tr>
      )}
      {isEdit && (
        <StudentForm
          attributes={attributes}
          handleCancel={handleCancel}
          id={id}
        />
      )}
    </>
  );
};

export default Student;
