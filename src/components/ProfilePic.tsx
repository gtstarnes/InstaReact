import { user } from "../data/users"

type Props = {
    height: string,
    width: string,
}

const pic = user.profPic;


const ProfilePic = (props:Props) => {
    const {height, width} = props
  return (
    <button className="profile-Button">
        <div style={{backgroundColor: `${pic}`, 
            borderRadius: '50%',
            height: `${height}`,
            width: `${width}`}
            }>
        </div>
    </button>
  )
}

export default ProfilePic