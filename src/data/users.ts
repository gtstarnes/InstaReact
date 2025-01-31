type User = {
    username: string,
    name: string,
    profPic: string,
    followers: number,
    following: number,
    postList: Post[],
}
type Post = {
    img: string,
    likes: number,
    comments: number,
}