import { StyleSheet, Text, View, Image, TextInput, ScrollView,Modal, Dimensions, TouchableOpacity, LogBox } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'
import { API_REGISTER, API_USER } from '../../Api/Helper';
import { Toast } from 'react-native-toast-message';
import ViewModal from '../../Component/ViewModal';


const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signin = ({ navigation }) => {
  const [ButtonColor, setButtonColor] = useState('gray')
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [PassW, setPassW] = useState('')
  const [PassAgain, setPassAgain] = useState('')
  const [checkTexxt, setcheckTexxt] = useState('')

  const [isModel, setisModel] = useState(false)
  const CloseModal = () => {
    setisModel(!isModel)
  }

  useEffect(() => {
    if (FullName.trim() !== '' && Email.trim() !== '' && Phone.trim() !== '' && PassW.trim() !== '' && PassAgain.trim() !== '') {
      setButtonColor('#18DBFB');
    } else {
      setButtonColor('gray');

    }
  }, [FullName, Email, Phone, PassW, PassAgain])



  const Signin_PRO = async () => {

    const isValidEmail = (textemail) => {
      // Biểu thức chính quy để kiểm tra định dạng email
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

      return emailRegex.test(textemail);
    };

    const isValidPhoneNumber = (phoneNumber) => {
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(phoneNumber);
    };

    if (!isValidEmail(Email)) {
      setcheckTexxt('Email không hợp lệ')
      setisModel(!isModel)
      return;
    } else {
      if (!isValidPhoneNumber(Phone)) {
        setcheckTexxt('Số điện thoại không hợp lệ')
        setisModel(!isModel)
        return;
      }
    }
    if (PassW !== PassAgain) {
      setcheckTexxt('Nhập lại mật khẩu không khớp ')
      setisModel(!isModel)
      return;
    } else if (PassW.length < 6) {
      setcheckTexxt('mật khẩu phải lớn hơn 6 kí tự ')
      setisModel(!isModel)
      
      return;
    }else{
      const objectUser = { name: FullName, email: Email,password: PassW }
      console.log(objectUser);
      try {
        const response = await axios.post(API_REGISTER, objectUser)
        .then((response) => {
          console.log(response.data.message)
         
          if (response.data.message==='success') {
            setcheckTexxt('Đăng kí thành công')
            setisModel(!isModel)
          }
        })

      } catch (error) {
        setcheckTexxt('Lỗi khi gửi yêu cầu')
        setisModel(!isModel)
        console.error('Lỗi khi gửi yêu cầu:', error);
      }
     
    }
  }


  return (
    <LinearGradient colors={['#2E4572', '#18DBFB']} style={{ flex: 1, width: '100%', height: '100%', minHeight: '100%' }}>

      <View style={{ height: '8%' }}></View>
      <View style={{ flex: 1, width: '100%', height: '90%', alignItems: 'center' }}>
        <Image style={{ width: 190, height: 80 }} source={require('../../Asset/Image/logo.png')} />
        <Text style={{ color: 'white', fontSize: 20 }}>Đăng ký </Text>

        <ScrollView showsVerticalScrollIndicator={false} >

          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
            }}
            onChangeText={(text) => { setFullName(text) }}
            placeholder='Họ và tên '
            keyboardShouldPersistTaps="always" />

          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
            }}
            onChangeText={(text) => { setEmail(text) }}
            placeholder='Email'
            keyboardShouldPersistTaps="always" />

          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
            }}
            onChangeText={(text) => { setPhone(text) }}
            placeholder='Nhập số điện thoại '
            keyboardShouldPersistTaps="always" />

          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
            }}
            onChangeText={(text) => { setPassW(text) }}
            placeholder='Mật khẩu'
            secureTextEntry={true}
            keyboardShouldPersistTaps="always" />
          <TextInput
            style={{
              height: 50, width: windowWith - 60,
              fontSize: 17, backgroundColor: 'white'
              , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
            }}
            onChangeText={(text) => { setPassAgain(text) }}
            secureTextEntry={true}
            placeholder='Nhập lại mật khẩu'
            keyboardShouldPersistTaps="always" />

          <TouchableOpacity style={{
            height: 50, width: windowWith - 60,
            justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 20
            , backgroundColor: ButtonColor
          }}
            disabled={ButtonColor === 'gray'}
            onPress={Signin_PRO}
          >
            <Text style={{ fontWeight: 'bold', color: 'white' }}>
              Đăng ký
            </Text>
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Bạn đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>  Đăng nhập</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>


        <Modal
        transparent={true}
        visible={isModel}
        CloseModal={CloseModal}
      >
       
       <ViewModal functionnnn={CloseModal} content={checkTexxt} />
       

      </Modal>



      </View>

    </LinearGradient>
  )
}

export default Signin

const styles = StyleSheet.create({})