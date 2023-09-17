import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import NavigationMain from './src/navigation';
import MyStore, { persistor } from './src/redux/store/Mystore';
import { PersistGate } from 'redux-persist/integration/react';





const App = () => {
  return (
    <Provider store={MyStore}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationMain />
      </PersistGate>

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})