import React, {useState, useEffect} from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text, 
    Icon
} from 'native-base';
import {
    Image, 
    View, 
    StyleSheet,
    Button
} from 'react-native';

const Challenge: () => React$Node = () => {
    const [character, SetCharacter] = useState([]);

    useEffect(() => {
        fetch('http://hp-api.herokuapp.com/api/characters')
        .then(response => response.json())
        .then(responseJson => {
        SetCharacter(responseJson);
        console.log(character);
      })
      }, []);

      return (
        <Container>
            <Header style={{backgroundColor: '#740001'}}>
                <Text style={{fontSize: 25, color: '#EEBA30'}}>
                    Fanoid: Harry Potter
                </Text>
            </Header>
            <Content>
            {character.map(i => { 
                    <Card>
                    <CardItem cardBody style={styles.cardbody}>
                        <Image source={{uri: i.image}} style={{height: 200, width: 200}}/>
                        <View style={styles.textBody}>
                            <Text>{i.name}</Text>
                            <Text>{i.house}</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.starContainer}>
                        <Icon name="star-outline" type="Ionicons" style={styles.star}/> 
                        <Text>Favourite</Text>
                    </CardItem>
                </Card>
                })}
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EEBA30',
        width: '60%', 
        alignItems: 'center', 
        alignSelf: 'center', 
        height: 50, 
        borderRadius: 30, 
        justifyContent: 'center', 
        margin: 40
    }, cardbody: {
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15
    }, textBody: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }, star: {
        color: 'gray',
    }, starContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
export default Challenge;