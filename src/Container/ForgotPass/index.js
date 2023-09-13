import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPass = ({navigation}) => {

  const [ButtonColor, setButtonColor] = useState('gray')

  const [Email, setEmail] = useState('')

  const checktextInput = () => {
    if (Email.length>0) {
      setButtonColor('#18DBFB');
    } else {
      setButtonColor('gray');
    }
  }
  return (
    <LinearGradient colors={['#2E4572', '#18DBFB']} style={{
      flex: 1,
      width: '100%', height: '100%'
    }}>
      <View style={{ width: '100%', height: '10%',justifyContent:'center',marginLeft:"5%" }}>   
  <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
  <Icon  name={"chevron-left"} size={30} color={'white'}/>
  </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '20%' }}>
        <Image style={{ width: 190, height: 80, marginTop: '15%' }} source={require('../../Asset/Image/logo.png')} />
      </View>
      <View style={{ width: '100%', height: '70%', paddingTop: '30%' }}>

        <View style={{ alignItems: 'center' }}>
          <View style={{ position: 'absolute', left: 20, marginBottom: 10 }}>
            <Text style={{ color: 'white' }}>Lấy mật khẩu mới </Text>
          </View>
          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13,
              marginTop: 30, margin: 10
            }}
            onChangeText={(text) => { setEmail(text), checktextInput() }}
            placeholder='Email'
            keyboardShouldPersistTaps="always" />

          <TouchableOpacity style={{
            height: 50, width: windowWith - 60,
            justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 20
            , backgroundColor: ButtonColor
          }}
            disabled={ButtonColor === 'gray'}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </LinearGradient>
  )
}

export default ForgotPass

const styles = StyleSheet.create({})