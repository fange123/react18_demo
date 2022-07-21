import React, { useContext, useCallback, useState } from "react";
import StudentContent from "./store";
import StudentForm from "./StudentForm";

const Student = (props) => {
  const { attributes, id } = props;
  const { name, address, gender, age } = attributes;
  const [isEdit, setIsEdit] = useState(false);
  const ctx = useContext(StudentContent);
  const handleDelete = useCallback(async () => {
    try {
      await fetch(`http://localhost:1337/api/students/${id}`, {
        method: "delete",
      });
      ctx.fetchList();
    } catch (e) {}
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit && (
        <tr>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{age}</td>
          <td>{address}</td>
          <td style={{ display: "flex" }}>
            <button onClick={handleDelete}>删除</button>
            <button onClick={handleEdit}>编辑</button>
          </td>
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
