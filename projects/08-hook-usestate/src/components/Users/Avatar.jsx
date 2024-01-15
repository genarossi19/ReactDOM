/* eslint-disable react/prop-types */


function Avatar({avatar,size='50px'}) {
  
  const style = {
      width: size,
      height: size
  }
  return (
    <div className="">
        <img className="rounded-full overflow-hidden  object-cover object-center me-4" style={style} src={avatar} alt="profile" />
    </div>
  )
}

export default Avatar