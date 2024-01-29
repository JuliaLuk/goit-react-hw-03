import { useState } from "react";
import "../components/App.css";
// import { PaymentForm } from "./PaymentForm";
import { Filter } from "./Filter/Filter";
import { Users } from "./Users/Users";
import { UserForm } from "./UserForm/UserForm";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState([
    { username: "Mack", access: "r", id: 34567 },
    { username: "Madi", access: "w", id: 45678 },
    { username: "Henry", access: "m", id: 56789 },
    { username: "Abry", access: "r", id: 67890 },
    { username: "Sam", access: "m", id: 78901 },
    { username: "Skarlet", access: "w", id: 89012 },
    { username: "Dawson", access: "r", id: 90123 },
    { username: "Phinly", access: "m", id: 12345 },
    { username: "Leiklan", access: "w", id: 23456 },
  ]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { username: newUser, id: Date.now() }];
    });
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };
  const visibleUsers = users.filter((user) =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const makePayment = (options) => {
    console.log("make payment on: ", options);
  };

  return (
    <>
      {/* <PaymentForm onSubmit={makePayment} /> */}
      <UserForm onAdd={addUser} />
      <Filter value={nameFilter} onChange={setNameFilter} />
      <Users items={visibleUsers} onDelete={deleteUser} />
      <p>{nameFilter}</p>
    </>
  );
};
