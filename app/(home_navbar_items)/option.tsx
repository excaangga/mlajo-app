import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OptionScreen(){
    const router = useRouter();
  
    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return(
        <View style={styles.container}>
            <View style={styles.upperDiv}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Masuk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Daftar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lowerDiv}>
                <TouchableOpacity style={styles.lowerDivElement} onPress={() => handleNavigation('/not_implemented')}>
                    <Octicons name='checklist' size={27} color={'black'} />
                    <Text style={styles.lowerDivText}>Daftar Transaksi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lowerDivElement} onPress={() => handleNavigation('/not_implemented')}>
                    <Octicons name='heart' size={27} color={'black'} />
                    <Text style={styles.lowerDivText}>Wishlist</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lowerDiv}>
                <TouchableOpacity style={styles.lowerDivElement} onPress={() => handleNavigation('/not_implemented')}>
                    <Octicons name='alert' size={27} color={'black'} />
                    <Text style={styles.lowerDivText}>Komplain Pelanggan Anda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lowerDivElement} onPress={() => handleNavigation('/not_implemented')}>
                    <Octicons name='code-of-conduct' size={27} color={'black'} />
                    <Text style={styles.lowerDivText}>Bantuan #MlajoUntukmu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lowerDiv}>
                <TouchableOpacity style={styles.lowerDivElement} onPress={() => handleNavigation('/not_implemented')}>
                    <Octicons name='bug' size={27} color={'black'} />
                    <Text style={styles.lowerDivText}>Laporkan Bug</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperDiv: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 5,
        paddingVertical: 20,
        backgroundColor: 'white'
    },
    loginButton: {
        backgroundColor: '#2F934B',
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 5
    },
    signupButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#2F934B',
        paddingHorizontal: 50,
        paddingVertical: 5
    },
    loginButtonText: {
        fontFamily: 'bold',
        fontSize: 20,
        color: 'white'
    },
    signupButtonText: {
        fontFamily: 'bold',
        fontSize: 20,
        color: '#2F934B'
    },
    lowerDiv: {
        flexDirection: 'column',
        gap: 30,
        paddingVertical: 20,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    lowerDivElement: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginHorizontal: 30,
    },
    lowerDivText: {
        fontFamily: 'medium',
        fontSize: 18
    },
});