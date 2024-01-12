import User from "./Users/User";
import Avatar from "./Users/Avatar";

function List() {
  return (
    <div className="pt-1 pb-1 ">
      <div className="flex items-center pt-2 pb-2">
        <Avatar />
        <User />
      </div>
      <div className="flex items-center pt-2 pb-2">
        <Avatar />
        <User />
      </div>
      <div className="flex items-center pt-2 pb-2">
        <Avatar />
        <User />
      </div>
    </div>
  );
}

export default List;
