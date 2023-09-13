

import { CommonActions } from '@react-navigation/native';
import React from 'react'
const navigationRef = React.createRef();


const navigate = (name, params) => {
    navigationRef.current.dispatch(
        CommonActions.navigate({
            name: name,
            params: params
        })
    );

}

const reset = (name, params) => {
    navigationRef.current.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: name,
                    params: params,

                },
            ],
        })
    );
}




export default {
    navigationRef, navigate,reset
}