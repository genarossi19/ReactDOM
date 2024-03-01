function TransactionForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Ingresa una descripción" />
        <input type="number" step="0.01" placeholder="00.00"className="text-gray-800" />
        <button>Add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
