import User from "./Users/User";
import Avatar from "./Users/Avatar";

function List() {
  return (
    <div>
      <div>
        <Avatar />
        <User />
      </div>
      <div>
        <Avatar />
        <User />
      </div>
      <div>
        <Avatar />
        <User />
      </div>
    </div>
  );
}

export default List;
