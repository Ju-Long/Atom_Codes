import React from 'react';
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
    StyleSheet
} from 'react-native';

const Worksheet: () => React$Node = () => {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem header>
                        <Icon name="cart-outline"/>
                        <Text>View Cart</Text>
                    </CardItem>
                    <CardItem cardBody style={styles.body}> 
                        <Body>
                            <Image source={require('./image/CartTitan.jpg')} style={{width: '60%', height: 200}}/>
                            <Text>Total Item: 7</Text>
                            <Text>Total Amount: $4100</Text>
                            <View style={styles.mail}>
                                <Icon name="mail-unread-outline"/>
                                <Text>Sent to Mail</Text>
                            </View>
                        </Body>
                    </CardItem>
                    <CardItem footer> 
                        <Text>Make Payment </Text>
                        <Icon name="wallet-outline"/>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    mail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    body: {
        paddingHorizontal: 10
    }
})

export default Worksheet;
