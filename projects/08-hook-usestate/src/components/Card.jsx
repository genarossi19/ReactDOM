/* eslint-disable react/prop-types */
import Button from "./Button";
import List from "./List";

function Card({ users, clearList }) {
  return (
    <div className="bg-white rounded-md shadow-sm shadow-black mb-7 p-7 min-w-96 ml-7 ">
      <h1 className="text-xl text-center font-bold underline">
        5 Birthdays Today
      </h1>
      <List users={users} />
      {/* aca recibimos el parametro del handleClearList y lo pasamos como prop a button */}
      <Button clearList={clearList} />
    </div>
  );
}

export default Card;
