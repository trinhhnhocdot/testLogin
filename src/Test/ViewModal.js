// import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
// import React from 'react'



// const windowWith = Dimensions.get('window').width;
// const ViewModal = (props) => {

//     const closeModal = (bool,data) =>{
//         props.changeModalVisible(bool);
//         props.setData(data)
//     }
//     return (
//         <TouchableOpacity
//             disabled={true}
//             style={styles.container}>

//             <View style={styles.modal}>
//                 <View style={styles.textView}>
//                     <Text style={styles.texxt}>
//                         Sample Modal Header
//                     </Text>
//                     <Text style={styles.texxt}>
//                         Text Description
//                     </Text>
//                 </View>

//                 <View style={styles.buttonView}>
//                     <TouchableOpacity
//                     onPress={()=>closeModal(false,'Cancel')}
//                      style={styles.touchableOpacity}>
//                         <Text style={styles.texxt}>Cancel</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                        onPress={()=>closeModal(false,'OK')}
//                     style={styles.touchableOpacity}>
//                         <Text style={styles.texxt}>OK</Text>
//                     </TouchableOpacity>

//                 </View>


//             </View>



//         </TouchableOpacity>
//     )
// }

// export default ViewModal

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     modal: {
//         paddingTop: 10,
//         height: 150,
//         width: windowWith - 50,
//         backgroundColor: 'white',
//         borderRadius: 20,


//     },
//     textView: {
//         flex: 1,
//         alignItems: 'center'
//     },
//     texxt: {
//         margin: 5,
//         fontSize: 16,

//     },
//     buttonView: {
//         flex: 1,
//         flexDirection:'row'
//     },
//     touchableOpacity: {
//         justifyContent:'center',
//         flex:1,
//         paddingVertical: 10,
//         alignItems: 'center',
//         backgroundColor:'pink'

//     }
// })