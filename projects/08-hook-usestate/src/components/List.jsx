/* eslint-disable react/prop-types */
import User from "./Users/User";
import Avatar from "./Users/Avatar";

function List({users}) {
  return (
    <div id="list" className="pt-1 pb-1 ">
      {users.map(user=>(
        <div id='list-item' className="flex items-center pt-2 pb-2  rounded-xl pl-3 mb-1 hover:bg-gray-100 transition-all duration-200 ease-in-out hover:cursor-pointer"key={user.id}>
        <Avatar avatar={user.avatar}/>
        <User name={user.name} age={user.age}/>
      </div>

      ))}
      
  
    </div>
  );
}

export default List;

