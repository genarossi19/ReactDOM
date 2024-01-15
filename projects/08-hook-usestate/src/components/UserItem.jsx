/* eslint-disable react/prop-types */
import Avatar from "./Users/Avatar"
import User from "./Users/User"
function UserItem({avatar,name,age}) {
  return (
    <div id='list-item' className="flex items-center pt-2 pb-2  rounded-xl pl-3 mb-1 hover:bg-gray-100 transition-all duration-200 ease-in-out hover:cursor-pointer">
        <Avatar avatar={avatar}/>
        <User name={name} age={age}/>
      </div>
  )
}

export default UserItem