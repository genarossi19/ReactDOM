/* eslint-disable react/prop-types */

function Avatar({ avatar, size = "50px" }) {
  const style = {
    width: size,
    height: size,
    objectFit: "cover",
  };
  return (
    <div className="">
      <img
        className="rounded-full overflow-hidden   me-4"
        style={style}
        src={avatar}
        alt="profile"
      />
    </div>
  );
}

export default Avatar;
