import "@/global.css"
import { Slot, Stack, useRouter, useSegments } from 'expo-router'
import { AuthContextProvider, useAuth } from '@/src/context/authContext'
import { useEffect } from 'react'

const MainLayout = () => {
  const {isAuthenticated} = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    // check if user is authenticated or not
    if (typeof isAuthenticated === 'undefined') return;
    const inApp = segments[0] === "(app)"
    if (isAuthenticated && !inApp) {
      router.navigate('/(app)/home')
    } else if (isAuthenticated == false) {
      router.navigate('/signIn')
    }

  }, [isAuthenticated] )

  console.log(segments)
  return <Slot />
}

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  )
}

export default RootLayout

/* <Stack>
      <Stack.Screen name="(app)" options={{headerShown: false, title: "Home page", headerTitle: "Home page"}}/>
      <Stack.Screen name='index' options={{headerShown: false, title: "Start page", headerTitle: "Start page"}}/>
      <Stack.Screen name='signIn' options={{headerShown: false, title: "Sign In", headerTitle: "Sign In"}}/>
      <Stack.Screen name='signUp' options={{headerShown: false, title: "Sign Up", headerTitle: "Sign Up"}}/>
    </Stack> */