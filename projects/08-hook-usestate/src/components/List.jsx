/* eslint-disable react/prop-types */

import UserItem from "./Users/UserItem";

function List({ users }) {
  return (
    <div id="list" className="pt-1 pb-1 ">
      {users.map((user) => (
        <UserItem
          key={user.id}
          name={user.name}
          age={user.age}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default List;
