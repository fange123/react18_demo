import React, { useContext, useCallback } from "react";
import StudentContent from "./store";

const Student = ({ attributes: { name, address, gender, age }, id }) => {
  const ctx = useContext(StudentContent);
  const handleDelete = useCallback(async () => {
    try {
      await fetch(`http://localhost:1337/api/students/${id}`, {
        method: "delete",
      });
      ctx.fetchList();
    } catch (e) {}
  }, []);

  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>
        <button onClick={handleDelete}>删除</button>
      </td>
    </tr>
  );
};

export default Student;
