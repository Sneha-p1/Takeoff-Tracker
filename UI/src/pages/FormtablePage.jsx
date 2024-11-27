import '../App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Formtable from '../components/Formtable';

axios.defaults.baseURL = "http://localhost:5005/";

function FormtablePage() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    userRoll: "",
    mobile: ""
  });
  const [formDataEdit, setFormDataEdit] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    userRoll: "",
    mobile: "",
    _id: ""
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create", formData);

      if (response.data.success) {
        // Reset the form
        setFormData({
          username: "",
          email: "",
          password: "",
          userType: "",
          userRoll: "",
          mobile: ""
        });

        // Show the alert
        alert(response.data.message);

        // Reload the page
        window.location.reload();
      } else {
        alert(response.data.message || "Failed to create user.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("An error occurred while creating the user.");
    }
  };

  const getFetchData = async () => {
    try {
      const data = await axios.get("/");
      if (data.data.success) {
        setDataList(data.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("/delete/" + id);
      if (response.data.success) {
        // Show the alert
        alert(response.data.message);

        // Reload the page
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/update", formDataEdit);
      if (response.data.success) {
        // Show the alert
        alert(response.data.message);

        // Reload the page
        window.location.reload();
      } else {
        alert(response.data.message || "Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user.");
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          <button
            className="btn btn-add bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => setAddSection(true)}
          >
            Add User
          </button>
        </div>
        {addSection && (
          <Formtable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData}
          />
        )}
        {editSection && (
          <Formtable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Password</th>
                <th className="px-4 py-2 text-left">User Type</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((el) => (
                  <tr key={el._id}>
                    <td className="px-4 py-2">{el.username}</td>
                    <td className="px-4 py-2">{el.email}</td>
                    <td className="px-4 py-2">{el.password}</td>
                    <td className="px-4 py-2">{el.userType}</td>
                    <td className="px-4 py-2">{el.userRoll}</td>
                    <td className="px-4 py-2">{el.mobile}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button
                        className="btn btn-edit bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        onClick={() => handleEdit(el)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-delete bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(el._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-4 text-gray-500 font-medium"
                  >
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FormtablePage;
