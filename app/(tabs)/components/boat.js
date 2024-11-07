import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Movie = ({title,description,icon_name,poster})=> {
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.boatName} >
                <Icon name={icon_name} size={40} />  {title}
            </Text>
            <Text  style={styles.description}>
                {description}
            </Text>
            <Image source = {poster} style={{width: 400, height: 300}}/>
        </View>
    );
};
class BoatList extends React.Component {
    render() {
        return (
            <ScrollView style={styles.ScrollStyle} horizontal={true} >
                <Movie title="Bayliner 510" description="Compact, light, perfect for the shoreline enthusiast."
                       icon_name="ship" poster={require("./img/bayliner.jpg")}/>

                <Movie title="Fairline MK2" description="A well-built general use cutter, modular to fit every need."
                       icon_name="ship" poster={require("./img/fairline.jpg")}/>

                <Movie title="Karoline Flipper" description="Impress your friends with the speed of this nimble speedboat!"
                       icon_name="ship" poster={require("./img/flipper.jpg")}/>

                <Movie title="Johnny Four Winns G105A2" description="A light boat built for the calm waters of lakes and rivers, but not shy of the sea."
                       icon_name="ship" poster={require("./img/four_winns.jpg")}/>

                <Movie title="Peugot Princess HS21" description="Luxury in a compact package, without compromising speed."
                       icon_name="ship" poster={require("./img/princess.jpg")}/>

                <Movie title="P120 'Sea Ray' Patrol Boat" description="Purpose built for guarding coastal waters, comes stock with state-of-the-art detection equipment."
                       icon_name="ship" poster={require("./img/sea_ray.jpg")}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    ScrollStyle:{
        flexDirection:'row',
        backgroundColor:'#006994',
        height:'100%',
    },
    MainContainer:{
        flex:1,
        maxWidth:420,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#ADD8E6',
        borderColor:'black',
        borderWidth:2

    },
    boatName:{
        fontSize: 40,
        color: "grey"
    },
    description:{
        fontSize: 20
    },
    icon:{
        size:40
    }


})


    export default BoatList;
