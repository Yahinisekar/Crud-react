

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    //using useNavigate  to redirect to the user page
    const navigate = useNavigate();
    //using useState to manage the state of the input fields
  const [createData, setCreateData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    phone: "",
  });
    
 //function to handle changes in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    //post  request to add a new user using axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://65d9dcb6bcc50200fcdc38d3.mockapi.io/users",
        createData
      );
      console.log(response.data);
      navigate("/users"); // Redirect to users page after successful creation
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

    return (
      //Form with all the necessary fields for adding a new user
    <form
      className="container mt-5 text-center"
      style={{ width: "30rem" }}
      onSubmit={handleSubmit}
    >
      <div className="row mb-5">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={createData.name}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email :
        </label>
        <div className="col-sm-12">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={createData.email}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="website" className="col-sm-2 col-form-label">
          Website:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={createData.website}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="company" className="col-sm-2 col-form-label">
          Company:
        </label>
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={createData.company}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="phone" className="col-sm-2 col-form-label">
          Phone:
        </label>
        <div className="col-sm-12">
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={createData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default AddUser;
