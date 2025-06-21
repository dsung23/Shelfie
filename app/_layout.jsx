import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { UserProvider } from '../context/UserContext'
import { BooksProvider } from '../context/BooksContext'

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light
  console.log(colorScheme);
  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground},
            headerTintColor: theme.title
        }}>
            <Stack.Screen name="(auth)" options={{ headerShown: false}} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false}} />


            <Stack.Screen name="index" options={{
                title: 'Home'
            }}/>

            
        </Stack>
      </BooksProvider>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})