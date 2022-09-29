import React, { useState } from "react";

const Form = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value }); //get values
  };

  const [records, setRecords] = useState([]); // to handle an array in which we store object

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userData, id: new Date().getTime().toString() }; //add those values and store in another object

    setRecords([...records, newRecord]); //store that object into an array (previous values, new values)

    setUserData({ name: "", password: "" });
  };

  return (
    <>
      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          width: "30%",
        }}
      >
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              value={userData.name}
              onChange={handleInput}
              name="name"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              autoComplete="off"
              value={userData.password}
              onChange={handleInput}
              name="password"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="container" style={{ width: "30%" }}>
        <table
          className="table"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {records.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
