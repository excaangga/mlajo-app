import { Stack } from 'expo-router';

export default function NavbarLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="option"
        options={{
          headerShown: true,
          headerTitle: 'Menu Utama',
          headerTitleStyle: {
            fontFamily: 'medium'
          }
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: true,
          headerTitle: 'Keranjang',
          headerTitleStyle: {
            fontFamily: 'medium'
          }
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: true,
          headerTitle: 'Chat',
          headerTitleStyle: {
            fontFamily: 'medium'
          }
        }}
      />
    </Stack>
  );
}