// import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// import CustomViewModal from './ViewModal'

// const TestModal = () => {
//     const [isModalVisible, setisModalVisible] = useState(false)
//     const [chooseData, setchooseData] = useState()
//     const changeModalVisible = (bool) => {
//         setisModalVisible(bool)
//     }
//     const setData = (data) => {
//         setchooseData(data)
//     }
//     return (
//         <SafeAreaView style={styles.container}>
//             {/* khi bam vao nut thi show modal */}
//             <Text style={{color:'white'}}>{chooseData}</Text>
//             <TouchableOpacity style={styles.touchableOpacity}
//                 onPress={() => changeModalVisible(true)}>
//                 <Text style={styles.text}>Open Modal</Text>
//             </TouchableOpacity>

//             <Modal
//                 transparent={true}
//                 animationType='fade'
//                 visible={isModalVisible}
//                 nRequestClose={() => { changeModalVisible }}>
//                 <CustomViewModal
//                     changeModalVisible={changeModalVisible}
//                     setData={setData} />

//             </Modal>
//         </SafeAreaView>
//     )
// }

// export default TestModal

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'black'
//     },
//     touchableOpacity: {
//         backgroundColor: 'pink',
//         paddingHorizontal: 50,
//     },
//     text: {
//         marginVertical: 20,
//         fontSize: 20,
//         fontWeight: 'bold'
//     }
// })