import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {
  const [users, setUsers] = useState();

  const url = "https://my-crud-user.onrender.com/api/v1/users/";

  //GET
  const getAllUsers = () => {
    return axios
      .get(url)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  //POST
  const createNewUser = (data) => {
    axios
      .post(url, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  //DELETE
  const deleteUserById = (id) => {
    const urlDelete = `${url}${id}/`;
    return axios
      .delete(urlDelete)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  //UPDATE
  const updateUserById = (id, data) => {
    const urlUpdate = `${url}${id}/`;
    axios
      .put(urlUpdate, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  return {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById,
  };
};

export default useUserCrud;
