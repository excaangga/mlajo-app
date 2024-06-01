import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Cart!</Text>
        </SafeAreaView>
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