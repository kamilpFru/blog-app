import React from 'react'
import { Link } from 'react-router-dom'
import jean from '/src/assets/jean.jpg'
import posts from '/src/Posts.jsx'
import food from '/src/assets/food.jpg'
import home from '/src/assets/home.jpg'

const Article = () => {

  return (
    <div className='article'>
      <div className="container">
        <div className="content">
          <h1>{posts[0].title}</h1>
          <h3>{posts[0].author}</h3>
          <p>posted 2 days ago</p>
          <img src={jean} alt="img" />

          <p>Lorem ipsum  tekst składający się z łacińskich i quasi-łacińskich wyrazów, mający korzenie w klasycznej łacinie, wzorowany na fragmencie traktatu Cycerona „O granicach dobra i zła” napisanego w 45 p.n.e. Tekst jest stosowany do demonstracji krojów pisma, kompozycji kolumny itp. Wikipedia</p>
        </div>
        <div className="menu">
            <h2>Other posts</h2>

              <div className="post">

                  <p>{posts[0].title}</p>
                  <img src={food} alt="" />
                  <Link className='link' to={`/post/${posts[0].id}`}>
                    <button>Read more</button>
                  </Link>

              </div>

              <div className="post">
                <p>{posts[1].title}</p>
                <img src={home} alt="" />
                <Link className='link' to={`/post/${posts[1].id}`}>
                  <button>Read more</button>
                </Link>

              </div>

        </div>
      </div>
    </div>
  )
}

export default Article