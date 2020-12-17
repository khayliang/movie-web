import React, { useEffect, useState } from 'react';
import { Card, Button, Carousel } from 'antd';
import styles from './MoviePage.less';
import MovieRow from './components/MovieRow';
import MovieData from '../../types/movieDataInterface';
import { getMovies } from '../../services/api';
const { Meta } = Card;

export default () => {
  const [movies, setMovies] = useState([] as MovieData[]);

  useEffect(() => {
    getMovies().then((val: MovieData[]) => {
      setMovies(val);
    });
  }, []);

  const carouselList = [
    movies.map(movie => {
      return (
        <Card
          bordered={true}
          className={styles.bannerCard}
          cover={
            <img
              className={styles.bannerImage}
              alt="bannerImg"
              src={movie.bannerUrl}
            />
          }
        >
          <Meta
            className={styles.bannerMeta}
            title={movie.title}
            description={movie.description}
          />
          <Button type="primary" size="large" className={styles.bannerButton}>
            Book now
          </Button>
        </Card>
      );
    }),
  ];
  return (
    <div>
      <Carousel autoplay autoplaySpeed={5000}>
        {carouselList}
      </Carousel>

      <h1 className={styles.pageHeading}>Top movies</h1>
      <MovieRow className={styles.movieRowsDiv} movieData={movies} />
    </div>
  );
};
