import List from "./List";

function Card() {
  return (
    <div className="bg-white rounded-xl shadow-sm shadow-black mb-7 p-7 min-w-96 ">
      <h1 className="text-xl text-center font-bold underline">5 Birthdays Today</h1>
      <List></List>
    </div>
  );
}

export default Card;
