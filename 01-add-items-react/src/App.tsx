import { useState } from "react";
import { CiTrash } from "react-icons/ci";

import "./App.css";

const INITIAL_ITEMS = [
  {
    id: crypto.randomUUID(),
    name: "Item 1",
  },
  {
    id: crypto.randomUUID(),
    name: "Item 2",
  },
];
function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");

    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input == null) {
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      name: input.value,
    };

    input.value = "";
    setItems([...items, newItem]);
  };
  return (
    <main>
      <aside>
        <form onSubmit={handleSubmit}>
          <label>Item to introduce:</label>
          <input type="text" name="item" />

          <button className="custom-button">Add element</button>
        </form>
      </aside>

      <section>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              {item.name}
              <div
                onClick={() => {
                  setItems((prevItems) =>
                    prevItems.filter((i) => i.id !== item.id)
                  );
                }}
                className="delete-button"
              >
                <CiTrash />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
