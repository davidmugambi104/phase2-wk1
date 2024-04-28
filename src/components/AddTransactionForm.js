import React from "react";
function AddTransactionForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, description, category, amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Transaction added:", data);
      })

  }

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input id="date" type="date" name="date" />
          <input id="description" type="text" name="description" placeholder="Description" />
          <input id="category" type="text" name="category" placeholder="Category" />
          <input id="amount" type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button onClick={handleSubmit} className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
