import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardProps } from "../../types/types";


const Card = () =>{
    // const { data } = props;
    // const {title, description, toDo} = data;

    return (
        <View style={styles.container}>
            <Text>{'Title '}</Text>
            <Text>{'Description '}</Text>
            <Text>{'Finished '}</Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
})