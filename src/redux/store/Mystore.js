const { configureStore } = require("@reduxjs/toolkit");
import UserReducer from '../Slice/UserSlice'

const MyStore = configureStore({
    reducer: {
        user: UserReducer
    }
})


export default MyStore;