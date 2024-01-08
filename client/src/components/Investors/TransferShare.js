import "./investors.css";
import { useState } from "react";

function TransferShare({ state, account }) {
  const { contract } = state;
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState(""); // Add state for address

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  async function shareTransfer(event) {
    try{
    event.preventDefault();
    // Use the state values instead of querying the DOM
    console.log("Amount:", amount);
    console.log("Address:", address);
    await contract.methods.transferShare(amount, address).send({ from: account, gas: 480000 });
  } catch(error){
    alert(error)
   }
   window.location.reload()
}

  return (
    <>
      <form onSubmit={shareTransfer}>
        <label className="label1" htmlFor="amount">
          <span className="font">Amount:</span>
        </label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
        ></input>

        <label className="label1" htmlFor="to">
          <span className="font">Address:</span>
        </label>
        <input
          type="text"
          id="to"
          value={address}
          onChange={handleAddressChange} // Add onChange handler
        ></input>

        <button className="button" type="submit">
          Transfer Share
        </button>
      </form>
      <br></br>
    </>
  );
}

export default TransferShare;
