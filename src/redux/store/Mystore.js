import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Slice/UserSlice'

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const userpersisConfig = {
    key: 'root',
    storage:AsyncStorage,
    // whitelist: ['isLoggedIn','data']
};


const persistedReducer = persistReducer(userpersisConfig, UserReducer);


const MyStore = configureStore({
    reducer: {
        user: persistedReducer
    }
});

export const persistor = persistStore(MyStore)
export default MyStore;