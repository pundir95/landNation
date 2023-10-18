import { createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios.instance';
import { toast } from 'react-toastify';


const initialAuthData = {
    loading: false,
}

export const authDataSlice = createSlice({
    name: 'home',
    initialState: initialAuthData,
    reducers: {

        authDataLoading: (state, action) => {
            state.loading = true;
        },
        authDataSuccess: (state, action) => {
            state.loading = false;
        },
        authDataError: (state, action) => {
            state.loading = false;
        },
    }

})

export const { authDataLoading, authDataError,authDataSuccess } = authDataSlice.actions

export default authDataSlice.reducer

export function agentRegister(payload,callBack) {
    return async (dispatch) => {
        console.log(payload, "payload")
        dispatch(authDataLoading())
        try {
            let result = await instance.post('register/', { ...payload })
            console.log(result,"red")
            if (result.status == 200) {
              dispatch(authDataSuccess())
              toast.success("Your are Registered Successfully")
             return callBack()
            }
        } catch (error) {
            console.log(error,"errr")
            const message = error.message || "Something went wrong";
            toast.error(message)
            dispatch(authDataError())
        }
    };
}

export function agentLogin(payload) {
    return async (dispatch) => {
        console.log(payload, "payload")
        dispatch(authDataLoading())
        try {
            let result = await instance.post('login/', { ...payload })
            if (result.status == 200) {
                localStorage.setItem("token", result.data.access_token)
                window.location.href = "/dashboard-home"
            }
        } catch (error) {
            const message = error.message || "Something went wrong";
            dispatch(authDataError())
        }
    };
}

export function verifyOtp(payload) {
    return async (dispatch) => {
        dispatch(authDataLoading())
        try {
            let result = await instance.post('enterotp/', { ...payload })
            console.log(result)
        } catch (error) {
            const message = error.message || "Something went wrong";
            dispatch(authDataError())
        }
    };
}