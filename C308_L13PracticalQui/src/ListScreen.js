import React, {useState, useEffect, Component} from 'react';
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
    Button,
    TextInput,
    LogBox,
    FlatList
} from 'react-native';

const ListScreen: () => React$Node = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");
    const [filteredCountriesData, setFilteredCountriesData] = useState([]);
    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => response.json())
        .then(responseJson => {
            var countryData = [];
            for (var i in responseJson) {
                countryData.push(responseJson[i].All)
            }
            setCountriesData(countryData);
            setFilteredCountriesData(countryData)
        })
    }, []);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = countriesData.filter(
                function (item) {
                    const itemData = item.country ?
                        item.country.toUpperCase() :
                        ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredCountriesData(newData);
            setSearchCountry(text);
        } else {
            setFilteredCountriesData(countriesData);
            setSearchCountry(text);
        }
    };

    return (
        <Container>
            <TextInput style={styles.SearchBar} placeholder="Enter Country" onChangeText={text => searchFilterFunction(text)}/>
            <Content>
            <FlatList data={filteredCountriesData} renderItem={({item}) => (
                <Card>
                <CardItem cardHeader style={styles.cardheader}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.country}</Text>
                </CardItem>
                <CardItem cardBody>
                    <View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Overall Population:</Text><Text>{item.population}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Confirmed Cases: </Text><Text>{item.confirmed}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Recovered Patients: </Text><Text>{item.recovered}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Deaths: </Text><Text>{item.deaths}</Text>
                        </View>
                    </View>
                </CardItem>
                <CardItem cardFooter style={{justifyContent: 'flex-end'}}>
                    <Text> Last Updated: {item.updated}</Text>
                </CardItem> 
            </Card>
            )}/>
            </Content>
        </Container>
    );
  };

  const styles = StyleSheet.create({
    cardheader: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    }, textViews: {
        padding: 15,
        alignItems: 'flex-start',
        flexDirection: 'row'
    }, SearchBar: {
        width: '100%',
        height: 40,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    }
})
  
  export default ListScreen;