import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, KeyboardAvoidingScrollView,
  Dimensions, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, Modal, Pressable
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { API_LOGIN, API_USER } from '../../Api/Helper';
import axios from 'axios';
import ViewModal from '../../Component/ViewModal';
// import {AsyncStorage} from 'react-native';

import navigationService from '../../navigation/navigationService';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, login } from '../../redux/Slice/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';



const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const Login = ({ navigation }) => {
  const [issLogin, setissLogin] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user.isLoggedIn) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('Login')
    }
  }, [user.isLoggedIn])

  return (

    <LinearGradient colors={['#2E4572', '#18DBFB']} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ height: '30%', width: '100%' }}>
            <TopLogin />

          </View>
          <View style={{ height: '45%', width: '100%' }}>
            <BetweenLogin
              navigation={navigation}
              dispatch={dispatch}
              issLogin={issLogin}

            />

          </View>
          <View style={{ height: '25%', width: '100%' }}>
            <BottomLogin navigation={navigation} />

          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const TopLogin = () => {
  return (
    <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ width: 190, height: 80 }} source={require('../../Asset/Image/logo.png')} />
      <Text style={{ marginBottom: 25, color: 'white', fontWeight: 600 }}>Giải pháp dạy học trực tuyến </Text>
      <Text style={{ marginTop: 10, color: 'white' }}>Đăng nhập</Text>

    </View>
  )
}

const BetweenLogin = ({ navigation, dispatch, issLogin }) => {

  const [Email, setEmail] = useState('');
  const [PassW, setPassW] = useState('')
  const [ButtonColor, setButtonColor] = useState('gray');
  const [isModel, setisModel] = useState(false)
  const [ckecktexxt, setckecktexxt] = useState('')

  const CloseModal = () => {
    setisModel(!isModel)
  }

  useEffect(() => {
    if (Email.trim() !== '' && PassW.trim() !== '') {
      setButtonColor('#18DBFB');
    } else {
      setButtonColor('gray');

    }
  }, [Email, PassW])




  const handlerLogin = () => {
    const objectUser = { email: Email, password: PassW }

    const response = axios.post(API_LOGIN, objectUser)
      .then((response) => {
        if (response.data.message === 'success') {
          const putdatauser = response.data.data;
          dispatch(addUser(putdatauser))
          navigationService.reset('Home')
          // trinh123@gmail.com
        } else {
          setisModel(!isModel)
          setckecktexxt('có lỗi xảy ra ')
        }
      })
      .catch(error => {
        console.error('lỗi lỗi ', error);
      })
  }


  return (
    <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 50, width: windowWith - 60,
          fontSize: 17, backgroundColor: 'white', borderRadius: 10, color: 'black', paddingLeft: 13
        }}
        placeholder='E-Mail'
        onChangeText={(text) => { setEmail(text) }}
        keyboardShouldPersistTaps="always"
      />

      <TextInput
        style={{
          height: 50, width: windowWith - 60,
          fontSize: 17, backgroundColor: 'white'
          , borderRadius: 10, color: 'black', paddingLeft: 13, marginTop: 30
        }}
        onChangeText={(text) => { setPassW(text) }}
        secureTextEntry={true}
        placeholder='Mật khẩu'
        keyboardShouldPersistTaps="always" />


      {/* ddawng nhaajsdpasdasdp */}


      <TouchableOpacity style={{
        height: 50, width: windowWith - 60,
        justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginTop: 20
        , backgroundColor: ButtonColor
      }}
        disabled={ButtonColor === 'gray'}
        onPress={handlerLogin}
      >
        <Text style={{ fontWeight: 'bold', color: 'white' }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>


      <View style={{ width: windowWith - 60, alignItems: 'flex-end', marginTop: 5 }}>
        <TouchableOpacity style={{ padding: 10 }} onPress={() => { navigation.navigate('ForgotPass') }}>
          <Text style={{ color: 'white' }}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={isModel}
        CloseModal={CloseModal}

      >
        <ViewModal functionnnn={CloseModal} content={ckecktexxt} />

      </Modal>

    </View>
  )
}

const BottomLogin = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 25 }}>
        <Text style={{ color: 'gray' }}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => { navigation.navigate('Signin') }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;
