import { useState } from "react";

function Primitive() {
  const [count, setCount] = useState(0); // number
  const [name, setName] = useState(""); // string
  const [isActive, setIsActive] = useState(false); // boolean

  function handleSubmit(e) {
    e.preventDefault();
    setIsActive(true);
  }

  return (
    <>
      <h2>Primitive Data Types</h2>

      {/* onClick */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <p>Count: {count}</p>

      {/* onChange */}
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name: {name}</p>

      {/* onSubmit */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Activate</button>
      </form>

      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </>
  );
}

export default Primitive;
