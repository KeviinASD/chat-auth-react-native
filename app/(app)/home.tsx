
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const HomePage = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-bold text-base'>This page needed authorization!</Text>
    </View>
  )
}

export default HomePage