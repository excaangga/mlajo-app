import { View, StyleSheet, Image, Text } from "react-native";

export default function NotImplemented () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wah maaf, halaman ini sedang dikembangkan...</Text>
            <Image source={require('../assets/images/not_implemented.png')} style={styles.image} resizeMode="contain"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '50%',
        height: '30%',
    },
    title: {
        fontFamily: 'medium',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 30,
        padding: 20,
        backgroundColor: '#2F934B',
        borderRadius: 20
    },
});