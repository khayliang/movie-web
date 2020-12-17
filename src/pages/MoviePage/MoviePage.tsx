import React from 'react';
import { Card, Button, Carousel } from 'antd';
import styles from './MoviePage.less';
import MovieRow from './components/MovieRow';

const { Meta } = Card;
const movieData = [
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  {
    title: 'Legend of Oz',
    ratings: 4.5,
    actors: ['Jeff Bezos, Warren Buffet, Tim Cook'],
    imageUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    description: "You can also take advantage of JavaScript’s type coercion: the + operator can either add two numbers or concatenate two strings. But what happens when you try to join an object (an array [] is also an object) with something else? JavaScript is forgiving so it won’t crash our program, instead it does know how to concatenate strings, so it will convert everything into a string."
  },
  
];

export default () => {
  const carouselList = [
    movieData.map(movie => {
      return (
        <Card
          bordered={true}
          className={styles.bannerCard}
          cover={
            <img
              className={styles.bannerImage}
              alt="bannerImg"
              src={movie.imageUrl}
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
      <Carousel autoplay autoplaySpeed={3000}>
        {carouselList}
      </Carousel>

      <h1 className={styles.pageHeading}>Top movies</h1>
      <MovieRow className={styles.movieRowsDiv} movieData={movieData} />
    </div>
  );
};
