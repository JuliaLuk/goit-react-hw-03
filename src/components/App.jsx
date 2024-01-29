import { useState } from "react";
import "../components/App.css";
import { PaymentForm } from "./PaymentForm";
import { Filter } from "../Filter";
import { Users } from "./Users";
import { UserForm } from "./UserForm";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState([
    { username: "Mack", id: 34567 },
    { username: "Madi", id: 45678 },
    { username: "Henry", id: 56789 },
    { username: "Abry", id: 67890 },
    { username: "Sam", id: 78901 },
    { username: "Skarlet", id: 89012 },
    { username: "Dawson", id: 90123 },
    { username: "Phinly", id: 12345 },
    { username: "Leiklan", id: 23456 },
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
      <PaymentForm onSubmit={makePayment} />
      <UserForm onAdd={addUser} />
      <Filter value={nameFilter} onChange={setNameFilter} />
      <Users items={visibleUsers} onDelete={deleteUser} />
      <p>{nameFilter}</p>
    </>
  );
};
