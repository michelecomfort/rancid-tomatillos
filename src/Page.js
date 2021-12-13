import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video'
import './Page.css';

const Page = ({ movie, overview, trailer }) => {
  console.log(overview)
  // {!overview && overview = 'There is currently no information for this movie. Sorry!'}
  return (
    <section className='movie-page'>
      <img className='page-img'src={movie.backdrop_path} alt={movie.title}/>
      <article className='side-info'>
        <div className="title-container">
          <h2 className="movie-title">{movie.title}</h2>
          <Link to="/" style={{textDecoration: 'none'}} onClick={() => {this.props.refresh()}}><button className='return-button'>Return to All Movies!</button></Link>
        </div>
        <h3 className="movie-rating">Audience Rating: {Math.round(movie.average_rating)}</h3>
        <Video trailer={trailer}/>
        <p className="movie-plot">{overview}</p>
      </article>
    </section>
  )
}

export default Page;
