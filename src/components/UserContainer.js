import React from "react";
import { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import UserList from "./UserList";
const UserContainer = () => {
  const dispatch = useDispatch();
  // const numOf = useSelector((state) => state.user);
  const { loading, users, error } = useSelector((state) => state);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Main Component</h1>
      <UserList users={users} />
    </div>
  );
};



export default UserContainer;