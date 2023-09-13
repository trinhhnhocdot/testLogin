import { StyleSheet, Text, View,Image,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Intro = ({navigation}) => {
    useEffect(() => {

        const delay = setTimeout(() => {
          navigation.replace('Login'); 
       
        }, 2000); 
    
        return () => {
          clearTimeout(delay); // Hủy bỏ đợi nếu component unmounted trước khi màn hình thay đổi
        };
      }, []);
  return (
    <LinearGradient colors={['#2E4572', '#18DBFB']} style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{width:190,height:80}} source={require('../../Asset/Image/logo.png')} />
        <Text style={{color:'white',fontWeight:'600',marginBottom:15}}> Giải pháp dạy học trực tuyến </Text>
        <ActivityIndicator size="small" color="white" />
      </View>
    </LinearGradient>
  )
}

export default Intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Màu nền của màn hình splash
  },
  logo: {
    width: 200,
    height: 200,
  },
})