import { View, Text, StyleSheet } from 'react-native';

export default function LiveScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Live!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'regular',
        fontSize: 30
    }
});