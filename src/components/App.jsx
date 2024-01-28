import { useState } from "react";
import "../components/App.css";
import { PaymentForm } from "./PaymentForm";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([
    "Mack",
    "Madi",
    "Henry",
    "Abry",
    "Sam",
    "Skarlet",
    "Dawson",
    "Phinly",
    "Leiklan",
  ]);
  const visibleUsers = users.filter((user) =>
    user.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(visibleUsers);
  const makePayment = (options) => {
    console.log("make payment on: ", options);
  };

  return (
    <>
      <PaymentForm onSubmit={makePayment} />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ul>
        {visibleUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <p>{inputValue}</p>
    </>
  );
};
