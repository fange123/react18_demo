import React, { useState, useCallback, useContext } from "react";
import styles from "./index.module.css";
import StudentContent from "./store";

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    gender: "",
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

  const addStu = useCallback(async (formData) => {
    const res = await fetch("http://localhost:1337/api/students", {
      method: "POST",
      body: JSON.stringify({ data: formData }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      ctx.fetchList();
    }
  }, []);

  const submit = () => {
    addStu(form);
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
        <button onClick={submit}>添加</button>
      </td>
    </tr>
  );
};

export default StudentForm;
