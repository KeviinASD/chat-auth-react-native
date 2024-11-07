import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { wp, hp } from '@/src/helpers/common'
import {StatusBar} from 'expo-status-bar'
import { Octicons, SimpleLineIcons } from "@expo/vector-icons"
import { useRouter } from 'expo-router'
import Loading from '@/components/Loading'
import CustomKeyBoardView from '@/components/CustomKeyBoardView'
import { useAuth } from '@/src/context/authContext'

const SignUp = () => {

  const {register} = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const emailRef = useRef<string>("")
  const passwordRef = useRef<string>("")
  const usernameRef = useRef<string>("")
  const profileRef = useRef<string>("prueba")

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields')
      return
    }
    let user = {
      email: emailRef.current,
      password: passwordRef.current,
      username: usernameRef.current,
      profileUrl: profileRef.current
    }
    setLoading(true)
    let response: any = await register(user)
    setLoading(false)
    console.log(response)
    if (!response.succes){
      Alert.alert('Sign Up', response.msg)
    }

  }

  return (
    <CustomKeyBoardView>
      <StatusBar style="dark" />
      <View className='flex-1 gap-12'
        style={styles.container}
      >
        {/* sigIn Image */}
        <View className='items-center'>
          <Image source={require('@/assets/images/register.jpg')} style={styles.image} resizeMode='contain'/>
        </View>

        <View className='gap-10'>
          <Text style={{fontSize: hp(4)}} className='font-bold text-center tracking-wider text-neutral-600'>Sign Up</Text>
          {/* inputs */}
          <View className='gap-4'>

            {/* Username */}
            <View
              style={{height: hp(7)}}
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-md'
            >
              <SimpleLineIcons name='user' size={hp(2.5)} color='gray' />
              <TextInput
                onChangeText={(text) => {
                  usernameRef.current = text
                }}
                placeholder='Username' 
                className='text-neutral-600 font-semibold flex-1'
                placeholderTextColor={'gray'}
              />
            </View>
            {/* Mail */}
            <View
              style={{height: hp(7)}}
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-md'
            >
              <Octicons name='mail' size={hp(2.5)} color='gray' />
              <TextInput
                onChangeText={(text) => {
                  emailRef.current = text
                }}
                placeholder='Email Adress' 
                className='text-neutral-600 font-semibold flex-1'
                placeholderTextColor={'gray'}
              />
            </View>
            {/* Password */}
            <View
                style={{height: hp(7)}}
                className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-md'
              >
                <SimpleLineIcons name='lock' size={hp(2.5)} color='gray' />
                <TextInput
                  onChangeText={(text) => {
                    passwordRef.current = text
                  }}
                  secureTextEntry={true}
                  placeholder='Password' 
                  className='text-neutral-600 font-semibold flex-1'
                  placeholderTextColor={'gray'}
                />
            </View>

            {/* Submit button */}
            <View className='gap-4' style={{marginTop: hp(2)}}>
              {
                loading ? (
                  <View className='flex-row justify-center'>
                    <Loading size={hp(8)} />
                  </View>
                ): (
                  <TouchableOpacity
                    onPress={handleRegister}
                    style={{height: hp(6)}}
                    className='bg-neutral-700 rounded-md justify-center items-center'
                  >
                    <Text style={{fontSize: hp(2.7)}} className='text-white font-semibold tracking-wider'>Sign Up</Text>
                  </TouchableOpacity>
                )
              }
            </View>

            {/* Register */}
            <View className='flex-row justify-between'>
              <Text className='text-neutral-500 font-semibold'>Already hava an account?</Text>
              <TouchableOpacity
                onPress={() => {router.navigate('/signIn')}}
              >
                <Text className='text-neutral-800 font-semibold'>Sign In</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
    </CustomKeyBoardView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5),
    paddingTop: hp(8),
  },
  image: {
    height: hp(25)
  }
})

export default SignUp