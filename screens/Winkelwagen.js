import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Pressable, FlatList, TouchableWithoutFeedback, Button, ScrollView} from 'react-native';


const Winkelwagen = ({navigation}) =>{

    const [trips, setTrips] = useState ([]);

    const getTrips = async () => {
        try {
            const response = await fetch ("https://loremarissens.be/wp-json/wp/v2/posts?categories=4", {

            })
            const json = await response.json();
            setTrips(json);
            console.log(trips);
        } 
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTrips();
    }, []);


    return (
        <ScrollView style={styles.container}>
        <View style={styles.plek}>
        <Text style={styles.title}>Winkelwagen</Text>
      <View style={styles.details}>
        </View>
      </View>
      <View>
        <Text style={styles.what}>Je winkelwagentje is leeg </Text>
        <Text style={styles.description}>Ga snel eens snuffelen door onze leuke reisspelletjes!</Text>
      </View>
        <View style={styles.click}>  
           <Button title="Snuffelen maar" color={'#fca311'} onPress={() => navigation.navigate("Games for you")}/>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create ({
    click: {
        height: 100,
        width: 150,
        textAlign: 'center',
        marginLeft: 130,
        marginTop: 60,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 170,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    what: {
        paddingTop: 40,
        paddingBottom: 25,
        fontSize: 15,
        fontWeight: '500',
        paddingLeft: 20,
    },
    description: {
        paddingLeft: 20,
        paddingRight: 30,
    },
    price: {
        paddingLeft: 310,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    inhoud: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 20,
    },
}
);

export default Winkelwagen