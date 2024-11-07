import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const StartIndex = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='gap-3'>
        <Text className='font-bold text-base'>This is Start Page</Text>

        <ActivityIndicator size='large' color='#0000ff' />

        <Pressable className='bg-blue-700 py-2 px-4 rounded-md'
          onPress={() => {
            router.push('/signIn')
          }}
        >
            <Text className='text-white font-bold text-center'>
                Go to Login
            </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default StartIndex
