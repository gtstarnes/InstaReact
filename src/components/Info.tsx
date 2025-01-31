import { user } from "../data/users"

const posts = user.postList.length;
const followers = user.followers;
const following = user.following;
const Info = () => {
  return (
    <div className="container">
        <div>
            <span className="posts">
                {posts}
                posts
            </span>
        </div>
        <button className="followers">
            <span>
                {followers}
                followers
            </span>
        </button>
        <button className="following">
            <span>
                {following}
                following
            </span>
        </button>
    </div>
  )
}

export default Info