import { StyleSheet } from "react-native";
import {lightContent, darkContent, isAndroid} from '../../constants/themes'

const commonStyles = {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 17,
    padding: 5,
    color: isAndroid ? lightContent.secondaryText : darkContent.text,
  };

const styles = StyleSheet.create({
    container: {
        backgroundColor: isAndroid ? lightContent.secondary : darkContent.secondary,
        margin: 10,
        borderRadius: 20
    },
    tasks: {
        ...commonStyles,
        padding: 5
    },
    title: {
        ...commonStyles,
        fontWeight: '400'
    },
    completed: {
        ...commonStyles,
        margin: 7,
        color: '#198641',
    },
    notCompleted: {
        ...commonStyles,
        margin: 7,
        color: '#f95653'
    }
 
})

export default styles