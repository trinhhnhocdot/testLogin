import { StyleSheet, Text, View, TouchableOpacity, Dimensions,Pressable } from 'react-native'
import React from 'react'



const windowWith = Dimensions.get('window').width;


const ViewModal = ({functionnnn,content}) => {

    return (
        <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.6)',justifyContent:'center'}}>
            <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <View style={{backgroundColor:'white',width:'80%',height:90,
              borderRadius:7, padding:15}}>
              <Pressable   
                onPress={functionnnn}>
                <Text >{content}</Text>
                <TouchableOpacity style={{alignItems:'flex-end',marginTop:20}} onPress={functionnnn}>
                  <Text style={{color:'#18DBFB'}}>Đồng ý </Text>
                </TouchableOpacity>
              </Pressable>
  
              </View>
          </View>
        </View>
    )
}

export default ViewModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        paddingTop: 20,
        height: 100,
        width: windowWith - 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding:25
    },
 

})