import Counter from "./components/Counter";
import RandomPokemon from "./components/RandomPokemon";
import Form from "./components/Form";

export default function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const age = event.target[1].value;

    console.log(name);
    console.log(age);
  };

  return (
    <div className="app">
      <h1>Test Components</h1>

      <div className="section">
        <h2>Counter</h2>
        <Counter />
      </div>

      <div className="section">
        <h2>Random Pokemon</h2>
        <RandomPokemon />
      </div>

      <div className="section">
        <h2>Form</h2>
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
