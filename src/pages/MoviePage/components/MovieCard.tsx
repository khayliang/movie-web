import React from 'react';
import { Card, Popover, Button, Rate } from 'antd';
import MovieData from '../../../types/movieDataInterface';
import styles from './MovieCard.less';

const { Meta } = Card;

export default ({ title, imageUrl, ratings, actors }: MovieData) => {
  const content = (
    <div>
      <Rate allowHalf defaultValue={ratings} />
      <p>{`Actors: ${actors.toString()}`}</p>
      <Button type="primary">Book now</Button>
    </div>
  );
  return (
    <Popover content={content} title={title} placement="rightTop">
      <Card
        hoverable
        className={styles.cardStyle}
        cover={<img alt="example" src={imageUrl} />}
      >
        <Meta title={title} />
      </Card>
    </Popover>
  );
};
