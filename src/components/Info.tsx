import { user } from "../data/users"
import './info.css'

const posts = user.postList.length;
const followers = user.followers;
const following = user.following;
const Info = () => {
  return (
    <div className="container">
        <div>
            <span className="info">
                <span className="info-number info-post">{posts}</span>
                posts
            </span>
        </div>
        <button className="info-button">
            <span className="info">
                <span className="info-number">{followers}</span>
                followers
            </span>
        </button>
        <button className="info-button">
            <span className="info">
                <span className="info-number">{following}</span>
                following
            </span>
        </button>
    </div>
  )
}

export default Info