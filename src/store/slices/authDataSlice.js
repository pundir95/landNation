import { createSlice } from '@reduxjs/toolkit';


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
    }

})

export const {authDataLoading} = authDataSlice.actions

export default authDataSlice.reducer

export function agentRegister(payload) {
    return async (dispatch) => {
        console.log(payload,"payload")
        dispatch(authDataLoading())
        try {

        } catch (error) {

        }
    };
}

export function agentLogin(payload) {
    return async (dispatch) => {
        console.log(payload,"payload")
        dispatch(authDataLoading())
        try {

        } catch (error) {

        }
    };
}