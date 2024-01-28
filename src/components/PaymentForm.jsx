import { useState, useId } from "react";
export const PaymentForm = ({ onSubmit }) => {
  const userNameFildId = useId();
  const selectId = useId();
  const [username, setUserName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("apple");
  const handelsubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ username, paymentMethod });
    evt.target.reset();
  };
  return (
    <form onSubmit={handelsubmit}>
      <div>
        <label htmlFor={userNameFildId}>User Name </label>
        <input
          type="text"
          id={userNameFildId}
          value={username}
          onChange={(evt) => setUserName(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor={selectId}></label>
        <select
          id={selectId}
          value={paymentMethod}
          onChange={(evt) => setPaymentMethod(evt.target.value)}
        >
          <option value="apple">aplle pay</option>
          <option value="visa">visa</option>
          <option value="cash">cash</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
