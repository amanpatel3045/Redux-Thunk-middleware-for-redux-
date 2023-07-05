import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          {/* Add additional properties as needed */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
