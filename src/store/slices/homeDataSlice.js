import { createSlice } from '@reduxjs/toolkit';


const initialHomeData = {
    loading: false,
    propertyList: []
}

export const homeDataSlice = createSlice({
    name: 'home',
    initialState: initialHomeData,
    reducers: {

        propertyDataloader: (state, action) => {
            state.loading = true;
            state.propertyList = []
        },

        setPropertyList: (state, action) => {
            state.loading = false;
            state.propertyList = [{ name: "pamkajk", age: "12" }]
        },
    }

})

export const { setPageTitle } = homeDataSlice.actions

export default homeDataSlice.reducer

export function getProperty(payload) {
    return async (dispatch) => {
        dispatch(propertyDataloader())
        try {

        } catch (error) {

        }
    };
}