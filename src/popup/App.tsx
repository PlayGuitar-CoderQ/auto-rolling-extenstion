import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      popup：{count()}
    </button>
  );
};

export default App;
