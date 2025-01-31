type User = {
    username: string,
    name: string,
    profPic: string,
    des: string,
    followers: number,
    following: number,
    postList: Post[],
}
type Post = {
    img: string,
    likes: number,
    comments: number,
}

const user = {
    username: '_ipsom55',
    name: 'Ipsom',
    profPic: 'DarkOrchid',
    des: "Loror ipsom unet lau. Sporor. Jipum. Kelent."
}

function randomNum() {
    return Math.floor(Math.random()*100)
}