import React, { useState, useCallback, useContext } from "react";
import styles from "./index.module.css";
import StudentContent from "./store";
import { useFetch } from "../components/hooks/useFetch";

const StudentForm = (props) => {
  const [form, setForm] = useState({
    name: props.attributes ? props.attributes.name : "",
    age: props.attributes ? props.attributes.age : "",
    address: props.attributes ? props.attributes.address : "",
    gender: props.attributes ? props.attributes.gender : "男",
  });

  const ctx = useContext(StudentContent);

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

  const { fetchList: addStu } = useFetch("students", { method: "POST" }, () => {
    ctx.fetchList();
  });

  const { fetchList: updateStu } = useFetch(
    `students/${props.id}`,
    {
      method: "PUT",
    },
    () => {
      ctx.fetchList();
    }
  );

  const submit = () => {
    addStu(form);
  };

  const handleUpdate = () => {
    updateStu(form);
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
