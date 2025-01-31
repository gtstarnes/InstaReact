import { user } from "../data/users"

type Props = {
    height: string,
    width: string,
}

const pic = user.profPic;


const ProfilePic = (props:Props) => {
    const {height, width} = props
  return (
    <div style={{backgroundColor: `${pic}`, 
        borderRadius: '50%',
        height: `${height}`,
        width: `${width}`}
        }>
    </div>
  )
}

export default ProfilePic