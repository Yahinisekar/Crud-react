import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Edit = ({ id }) => {
  //using useNavigate to navigate  between pages
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
  });
  //using useEffect to rerender  the component when data is changed
  useEffect(() => {
    //using axios to get data from the api
    axios
      .get(`https://65d9dcb6bcc50200fcdc38d3.mockapi.io/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //function to handle changes in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    // To prevent rerender
    e.preventDefault();
    await axios
      .put(`https://65d9dcb6bcc50200fcdc38d3.mockapi.io/users/${id}`, editData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/users");
  };
    return (
      //Form with all the fields that can be edited and a submit button
      <>
      
      <form
        className="container mt-5 text-center"
        style={{ width: "30rem" }}
        onSubmit={handleSubmit}
      >
        <div className="row mb-5">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email :
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="email"
              value={editData.email}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Website:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="website"
              value={editData.website}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Company:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="company"
              value={editData.company}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Phone:
          </label>
          <div className="col-sm-12">
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={editData.phone}
              onChange={handleChange}
            />
          </div>
          {/* <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"> */}
          {/* Email:
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          </div> */}
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;
