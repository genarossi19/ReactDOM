/* eslint-disable react/prop-types */
import List from "./List";

function Card({users, clearList}) {
  return (
    <div className="bg-white rounded-md shadow-sm shadow-black mb-7 p-7 min-w-96 ml-7 ">
      <h1 className="text-xl text-center font-bold underline">5 Birthdays Today</h1>
      <List users={users}/>
      {/* aca recibimos el parametro del handleClearList y con el metodo OnClick lo ejecutamos */}
      <button className="bg-blue-900 hover:bg-blue-800 transition-all duration-500 ease-in-out min-w-96 m-2 pt-2 pb-2 rounded-md text-white" onClick={()=>clearList()}>Clear List</button>
    </div>
  );
}

export default Card;
