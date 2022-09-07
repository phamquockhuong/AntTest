import './App.css';

function App({num1, num2}) {
  return (
    <div>
      <h1 className="text-amber-800 text-2xl font-bold">
          {num1}+{num2} = {num1+num2}
      </h1>
    </div>
  );
}

export default App;
