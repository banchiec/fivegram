import Post from "../Post/Post"

const posts = [
    {
        id: '123',
        username: 'banchi',
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "PUBLICATION FIRST"
    },
    {
        id: '123',
        username: 'banchi',
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "PUBLICATION SECOND"
    }
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            username={post.username}
                            userImg={post.userImg}
                            img={post.img}
                            caption={post.caption}
                        />
                    )
                })
            }
        </div>
    )
}

export default Posts
