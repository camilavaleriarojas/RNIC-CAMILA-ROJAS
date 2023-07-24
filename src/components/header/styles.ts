import { StyleSheet } from "react-native";
import {lightContent, darkContent, isAndroid} from '../../constants/themes'

export const styles = StyleSheet.create({
    header: {
        backgroundColor: isAndroid ? lightContent.primary : darkContent.primary,
        height: 80,
        paddingTop: 25
    },
    title: {
        color: isAndroid ? lightContent.secondary : darkContent.text,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    }
})