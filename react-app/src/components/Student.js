import React from "react";

const Student = ({ attributes: { name, address, gender, age } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{address}</td>
    </tr>
  );
};

export default Student;
