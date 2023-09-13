import { StyleSheet, Text, View,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const StatusBarCustom = ({text,icontitle,onPress}) => {
  StatusBar.setBackgroundColor('#18DBFB');
  return (
 
      
      <View style={styles.statusbarst}>
        <View style={styles.textContainer}>
          <Text style={styles.textstatus}>{text}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}    
      onPress={onPress}
        >
          <Icon name={icontitle} size={23} color={'white'} />
        </TouchableOpacity>
      </View>
  )
}

export default StatusBarCustom

const styles = StyleSheet.create({
  statusbarst: {
    width: '100%',
    height: 40,
    backgroundColor: '#18DBFB',
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textstatus: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconContainer: {
    padding:6,
    position:'absolute',
    left:10,
    
  },
})
