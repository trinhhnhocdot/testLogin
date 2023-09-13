import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from'react-redux'
import NavigationMain from './src/navigation';
import MyStore from './src/redux/store/Mystore';



const App = () => {
  return (
    <Provider store={MyStore}>
      <NavigationMain/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})