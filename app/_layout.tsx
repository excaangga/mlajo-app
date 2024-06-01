import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        regular: require('../assets/fonts/BalooBhai2-Regular.ttf'),
        medium: require('../assets/fonts/BalooBhai2-Medium.ttf'),
        bold: require('../assets/fonts/BalooBhai2-Bold.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
           SplashScreen.hideAsync(); 
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
                <Stack.Screen name="(home_navbar_items)" options={{ headerShown: false }}/>
                <Stack.Screen name="not_implemented" options={{
                    headerTitle: 'Kembali berbelanja',
                    headerTitleStyle: {
                        fontFamily: 'medium'
                    }
                }}/>
            </Stack>
        </SafeAreaProvider>
    );
}