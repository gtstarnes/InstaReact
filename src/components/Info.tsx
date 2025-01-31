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
        <button >
            <span className="followers">
                {followers}
                followers
            </span>
        </button>
        <button>
            <span className="following">
                {following}
                following
            </span>
        </button>
    </div>
  )
}

export default Info