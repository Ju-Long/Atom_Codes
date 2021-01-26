import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

const Activity: () => React$Node = () => {

  const [movie_data, setMovieData] = useState([]);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setMovieData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Text style={{
      justifyContent: 'center',
      alignSelf: 'center'
    }}>{movie_data[0].title}, {movie_data[0].releaseYear}</Text>
  )
};

const styles = StyleSheet.create({});

export default Activity;
