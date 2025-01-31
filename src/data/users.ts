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
    des: "Loror ipsom unet lau. Sporor. Jipum. Kelent.",
    followers: randomNum(),
    following: randomNum(),

}

const posts:Post[] = [
    {
        img: "DarkKhaki",
        likes: randomNum(),
        comments: randomNum(),
    },
    {
        img: "DarkOrange",
        likes: randomNum(),
        comments: randomNum(),
    },
    {
        img: "FireBrick",
        likes: randomNum(),
        comments: randomNum(),
    },
    {
        img: "DodgerBlue",
        likes: randomNum(),
        comments: randomNum(),
    },

    {
        img: "Indigo",
        likes: randomNum(),
        comments: randomNum(),
    },
    {
        img: "MintCream",
        likes: randomNum(),
        comments: randomNum(),
    },
]

function randomNum() {
    return Math.floor(Math.random()*100)
}
