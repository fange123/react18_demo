import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import {
  useGetStudentByIdQuery,
  useAddStudentMutation,
  useUpdateStudentMutation,
} from "./api/studentApi";

const StudentForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    gender: "男",
  });

  const { isSuccess, data: stuData } = useGetStudentByIdQuery(props.id, {
    skip: !props.id, //* 是否跳过此次请求
  });

  const [addStudent, { isSuccess: isAddSuccess }] = useAddStudentMutation();
  const [updateStudent, { isSuccess: isUpdateSuccess }] =
    useUpdateStudentMutation();

  useEffect(() => {
    if (isSuccess) {
      setForm(stuData.attributes);
    }
  }, [isSuccess]);

  const handleNameChange = (e) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleGenderChange = (e) => {
    setForm((prev) => ({ ...prev, gender: e.target.value }));
  };
  const handleAgeChange = (e) => {
    setForm((prev) => ({ ...prev, age: e.target.value }));
  };
  const handleAddressChange = (e) => {
    setForm((prev) => ({ ...prev, address: e.target.value }));
  };

  const submit = () => {
    addStudent(form);
    setForm({
      name: "",
      age: "",
      address: "",
      gender: "男",
    });
  };

  const handleUpdate = () => {
    updateStudent({ id: props.id, attributes: form });
    props.handleCancel();
  };

  return (
    <tr className={styles.wrap}>
      <td>
        <input type='text' onChange={handleNameChange} value={form.name} />
      </td>
      <td>
        <select onChange={handleGenderChange} value={form.gender}>
          <option value='男'>男</option>
          <option value='女'>女</option>
        </select>
      </td>
      <td>
        <input type='text' onChange={handleAgeChange} value={form.age} />
      </td>
      <td>
        <input
          type='text'
          onChange={handleAddressChange}
          value={form.address}
        />
      </td>
      <td>
        {props.attributes && (
          <div style={{ display: "flex" }}>
            <button onClick={() => props.handleCancel()}>取消</button>
            <button onClick={handleUpdate}>确定</button>
          </div>
        )}
        {!props.attributes && <button onClick={submit}>添加</button>}
      </td>
    </tr>
  );
};

export default StudentForm;
