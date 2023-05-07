import React from 'react'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
// import posts from '/src/Posts.jsx'

const Home = () => {

    const [posts, setPosts] = useOutletContext();

  return (
    <div className='home'>
        <div className='posts'>

            <div className="headPost">
                <div className="content">
                    <div className="text">
                        {posts[0] ? <p>{posts[0].categorie}</p> : null}
                        {/* <h1>{posts[0].title}</h1> */}
                        {posts[0] ? <p>{posts[0].title}</p> : null}

                        <Link to={'post/1'}><button>Read more</button></Link>
                        {posts[0] ? <p>{posts[0].author}, May 02, 2023</p> : null}
                    </div>
                    <div className="img">
                        {posts[0] ? <img src={posts[0].img} alt="" /> : null}
                    </div>
                </div>
            </div>
            <h1 className='recentStories'>Recent Stories</h1>
            {posts[0] ? <div className="recentPosts">
                { posts.map((post) => (
                    <div className='post' key = {post.postId}>
                        <div className='img'>
                            <Link className='link' to={`/post/${post.postId}`}>
                                <img src={post.img} alt="" />
                            </Link>
                        </div>

                        <div className='content'>
                            <h5>{post.categorie}</h5>
                            <Link className='link' to={`/post/${post.postId}`}>
                                <h3>{post.title}</h3>
                            </Link>
                        </div> 
                    </div>
                ))}
            </div>: null}
        </div> 
    </div>
    
  )
}

export default Home