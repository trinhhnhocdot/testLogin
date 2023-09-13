// import { Button, StyleSheet, ActivityIndicator, Text, View, StatusBar, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Image } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import Icon from "react-native-vector-icons/FontAwesome";


// const windowWith = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const SIGNIN = 'SIGNIN';
// const GETSTARTED = 'GETSTARTED'

// const Login = ({ navigation }) => {
//   const [page, setpage] = useState(SIGNIN);



//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="always">
//       <View style={{ flex: 1, width: '100%', height: '100%' }}>
//         <View style={{ height: '25%', width: '100%' }}><TopComponent page={page} setpage={setpage} /></View>
//         <View style={{ height: '40%', width: '100%', backgroundColor: '#F5F5F5' }}><BetweenComponent /></View>
//         <View style={{ height: '100%', width: '100%', backgroundColor: '#F5F5F5' }}><BottomComponent /></View>
//       </View>
//     </ScrollView>



//   );
// }

// const TopComponent = ({ page, setpage }) => {
//   return (
//     <View style={{ width: '100%', height: '100%' }}>

//       <View style={{ width: '100%', flex: 1, backgroundColor: '#4D8D6E', justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize: 50, fontWeight: '800', color: 'white' }}> Wasty. </Text>
//         <Text style={{ color: 'white' }}>Think for nature</Text>
//       </View>
//       {/* View tab */}
//       <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>

//         <TouchableOpacity onPress={() => setpage(SIGNIN)}
//           disabled={page === SIGNIN ? true : false}
//           style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Sign In</Text>
//           {page === SIGNIN ? <View style={{
//             position: 'absolute', bottom: 0, height: 3
//             , width: '100%', backgroundColor: '#4D8D6E'
//           }}></View> : null}
//         </TouchableOpacity>

//         <TouchableOpacity disabled={page === GETSTARTED ? true : false}
//           onPress={() => setpage(GETSTARTED)} style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
//           <Text style={{ fontSize: 20, color: '#4D8D6E' }}>Get Started</Text>
//           {page === GETSTARTED ? <View style={{
//             position: 'absolute', bottom: 0, height: 3
//             , width: '100%', backgroundColor: 'black'
//           }}></View> : null}
//         </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// const BetweenComponent = () => {
//   const [email, setemail] = useState('');
//   const [pass, setpass] = useState('');
//   const [passHidden, setpassHidden] = useState(true);
//   const clicktextinput = () => {
//     Keyboard.dismiss();
//   }
//   return (
//     <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>
//       <Text style={{ color: 'black', fontSize: 24, fontWeight: '800', marginLeft: 30 }}>Login Your Account .</Text>
//       {/* Mail */}
//       <View style={{
//         flexDirection: 'row', borderRadius: 8, alignItems: 'center'
//         , marginLeft: 10, backgroundColor: 'white', width: windowWith - 60, marginLeft: 30,
//         height: 45, marginTop: 20,
//       }}>
//         <View style={{ marginLeft: 13, marginRight: 11 }}>
//           <Icon name={"envelope"} size={22} />
//         </View>
//         <TextInput
//           style={{ height: '100%', flex: 1, width: '100%', fontSize: 17 }}
//           placeholder='E-Mail'
//           keyboardShouldPersistTaps="always" />
//       </View>
//       {/* pass */}
//       <View style={{
//         flexDirection: 'row', borderRadius: 8, alignItems: 'center'
//         , marginLeft: 10, backgroundColor: 'white', width: windowWith - 60, marginLeft: 30,
//         height: 45, marginTop: 20,
//       }}>
//         <View style={{ marginLeft: 13, marginRight: 11 }}>
//           <Icon name={"key"} size={22} />
//         </View>
//         <TouchableWithoutFeedback >
//           <TextInput
//             style={{ height: '100%', flex: 1, width: '100%', fontSize: 17 }}
//             placeholder='Pass'
//             keyboardShouldPersistTaps="always"
//             secureTextEntry={passHidden ? true : false} />
//         </TouchableWithoutFeedback >
//         <View style={{}}>
//           <TouchableOpacity onPress={() => setpassHidden(!passHidden)} style={{
//             height: '100%',
//             justifyContent: 'center', alignItems: 'center',
//             aspectRatio: 1
//           }} >
//             {passHidden ? <Icon name={"eye-slash"} size={22} /> : <Icon name={"eye"} size={22} />}
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* forgot */}
//       <View style={{ width: windowWith - 60, marginLeft: 30, marginTop: 20, marginBottom: 25 }}>
//         <Text style={{ position: 'absolute', right: 0 }}>Forgot PassWord ?</Text>
//       </View>
//       <TouchableOpacity style={{
//         width: windowWith - 60,
//         marginLeft: 30, marginTop: 25, backgroundColor: '#4D8D6E',
//         height: 45, borderRadius: 25, justifyContent: 'center', alignItems: 'center'
//       }}>
//         <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}> Login </Text>
//       </TouchableOpacity>

//     </View>

//   )
// }

// const BottomComponent = () => {
//   return (
//     <View style={{ height: '100%', width: '100%' }}>

//       <View style={{
//         width: windowWith - 60, marginLeft: 30, marginTop: 20,
//         marginBottom: 25, flexDirection: 'row',
//         justifyContent: 'center', alignItems: 'center'
//       }}>
//         <View style={{ borderWidth: 1, width: '30%', height: 1 }}></View>
//         <Text style={{ marginHorizontal: 20, color: 'black' }}>
//           Or conected with
//         </Text>
//         <View style={{ borderWidth: 1, width: '30%', height: 1 }}></View>
//       </View>


//       <View style={{
//         width: windowWith - 60, marginLeft: 30, marginTop: 20,
//         marginBottom: 25, flexDirection: 'row',
//         justifyContent: 'center', alignItems: 'center',backgroundColor:'red'
//       }}>
//         <View  >
//           <Image style={{ width:100, height: 100, backgroundColor: 'pink' }} 
//           source={{ uri: 'https://banner2.cleanpng.com/20180528/prw/kisspng-google-logo-google-search-console-google-adwords-google-5b0bbd3790af74.8119460015274959915926.jpg' }} style={{ width: 50, height: 50 }} />
//         </View>
//         <View>
//           {/* <Image source={{ uri: 'https://banner2.cleanpng.com/20180528/prw/kisspng-google-logo-google-search-console-google-adwords-google-5b0bbd3790af74.8119460015274959915926.jpg' }} style={{ width: 50, height: 50 }} /> */}
//         </View>
//       </View>
//     </View>
//   )
// }


// export default Login;

