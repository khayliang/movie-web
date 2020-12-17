import React from 'react';
import { Row, Col } from 'antd';
import MovieCard from './MovieCard';
import styles from './MovieRow.less';
import MovieData from '../../../types/movieDataInterface';

export default ({
  className,
  movieData,
}: {
  className: any;
  movieData: MovieData[];
}) => {
  const cardList = [
    movieData.map(movie => {
      return (
        <Col className={styles.list}>
          <MovieCard {...movie} />
        </Col>
      );
    }),
  ];
  return (
    <div className={className}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{cardList}</Row>
    </div>
  );
};
