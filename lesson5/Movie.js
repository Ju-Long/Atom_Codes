import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const movie = {
  title: 'Doctor Sleep',
  year: '2019'
};

const MOVIE_DATA = [{
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIE_DATA.map(data =>
    <View>
      <Text > {data.title} {'\n'} {data.year} </Text>
      <Image source={data.poster} />
    </View>
  );
}

class Movie extends React.Component {
  render() {
    return ( <
      Text > {
        movie.title
      } {
        '\n'
      } {
        movie.year
      } <
      /Text>
    );
  }
}

export {
  MovieList
};
