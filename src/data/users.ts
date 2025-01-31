/**
 * Collection of types, variables, functions related to the User.
 * Will probably convert to a store as this project gets more complex
 */


//TYPES
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

//USER DATA
const user: User = {
    username: '_ipsom55',
    name: 'Ipsom',
    profPic: 'DarkOrchid',
    des: "Loror ipsom unet lau. Sporor. Jipum. Kelent.",
    followers: randomNum(),
    following: randomNum(),
    postList: [
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
}


//FUNCTIONS
function randomNum() {
    return Math.floor(Math.random()*100)
}


//EXPORTS
export {user}
