import { Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Navbar from "@/components/home/Navbar";

export default function TabLayout() {

    interface tabBarOptionsParams {
        title: string;
        iconName: React.ComponentProps<typeof Octicons>['name'];
    };

    const tabBarOptions = ({title, iconName}: tabBarOptionsParams): BottomTabNavigationOptions => ({
        title,
        tabBarIcon: ({ color }) => <Octicons size={26} name={iconName} color={color} />,
        tabBarIconStyle: {
            marginTop: 4,
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'medium'
        },
    });

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#2F934B' }}>
            <Tabs.Screen
                name="index"
                options={{
                    ...tabBarOptions({ title: 'Beranda', iconName: 'home' }),
                    header: () => <Navbar />,
                }}
            />
            <Tabs.Screen
                name="komunitas"
                options={{
                    ...tabBarOptions({ title: 'Komunitas', iconName: 'people' }),
                    headerShown: false,  // Hide the default header
                }}
            />
            <Tabs.Screen
                name="live"
                options={{
                    ...tabBarOptions({ title: 'Live', iconName: 'device-camera-video' }),
                    headerShown: false,  // Hide the default header
                }}
            />
            <Tabs.Screen
                name="notifikasi"
                options={{
                    ...tabBarOptions({ title: 'Notifikasi', iconName: 'bell' }),
                    headerShown: false,  // Hide the default header
                }}
            />
            <Tabs.Screen
                name="saya"
                options={{
                    ...tabBarOptions({ title: 'Saya', iconName: 'person' }),
                    headerShown: false,  // Hide the default header
                }}
            />
        </Tabs>
    );
}
