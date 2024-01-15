/* eslint-disable react/prop-types */
function User({ name, age }) {
  return (
    <div className="flex flex-col w-full pl-2">
      <h4 className="font-bold text-[#457b9d]">{name}</h4>
      <p>{age}</p>
    </div>
  );
}

export default User;
