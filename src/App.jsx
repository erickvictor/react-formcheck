import React, { useState } from "react";

// import "./styles.css";

export default function App() {
  let data = [
    {
      p_id: 1,
      p_name: "isco",
      isChecked: true
    },
    {
      p_id: 2,
      p_name: "david",
      isChecked: false
    }
  ];

  const [dataForm, setDataForm] = useState(data);

  const changeCheck = (id) => {
    console.log(id);
    let temp = [...dataForm];
    const index = temp.findIndex((x) => x.p_id === id);
    if (index === -1) return;
    temp[index].isChecked = !temp[index].isChecked;
    setDataForm(temp);
  };

  const handleSubmit = () => {
    console.log(`{"data":` + JSON.stringify(dataForm) + `}`);
  };
  return (
    <div className="App">
      <form>
        {dataForm.map((li, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={li.isChecked}
              onChange={() => {
                changeCheck(li.p_id);
              }}
            />
            <label htmlFor={li.p_name}>{li.p_name}</label>
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}