import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.item];
    case "delete":
      return state.filter((_item, idx) => idx !== action.payload);
    case "update":
      return state.map((item, idx) =>
        idx === action.payload.idx ? action.payload.item : item,
      );
    default:
      throw Error("unknown action");
  }
}

export default function App() {
  const [items, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const [editIdx, setEditIdx] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (editIdx === null) {
      dispatch({ type: "add", payload: { item: input } });
    } else {
      dispatch({ type: "update", payload: { idx: editIdx, item: input } });
      setEditIdx(null);
    }
    setInput("");
  }

  return (
    <div className="h-dvh w-dvw space-y-4 bg-zinc-950 p-6 text-zinc-50">
      <p>Task Manager</p>

      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          className="text-zinc-950"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{editIdx === null ? "add" : "update"}</button>
      </form>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4">
            <span>{item}</span>
            <button
              onClick={() => {
                setInput(item);
                setEditIdx(idx);
              }}
              className="rounded-md bg-zinc-700 px-4 py-1"
            >
              edit
            </button>
            <button
              onClick={() => dispatch({ type: "delete", payload: idx })}
              className="rounded-md bg-zinc-700 px-4 py-1"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
