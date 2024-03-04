import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import TransactionForm from "./components/TransactionForm.jsx";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello world</h1>
    </GlobalProvider>
  );
}

export default App;