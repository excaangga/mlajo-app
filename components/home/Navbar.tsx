import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Navbar() {
  const router = useRouter();
  
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Cari..." />
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('(home_navbar_items)/chat')}>
          <Octicons name="comment-discussion" size={24} color="#8E8E8F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('(home_navbar_items)/cart')}>
          <Feather name="shopping-cart" size={24} color="#8E8E8F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('(home_navbar_items)/option')}>
          <Octicons name="kebab-horizontal" size={24} color="#8E8E8F" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: 'medium'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});
