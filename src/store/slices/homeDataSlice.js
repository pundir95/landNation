import { createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios.instance';


const initialHomeData = {
    loading: false,
    searchValue:[],
    openFilterModal:false,
    propertyList: [],
    propertyFeatureList:[]
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
        setPropertyFeatureList: (state, action) => {
            state.loading = false;
            state.propertyFeatureList =action.payload
        },

        setSearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        setFilterModal:(state,action)=>{
         state.openFilterModal=!state.openFilterModal
        }
    }

})

export const { setPageTitle,setSearchValue,setFilterModal,setPropertyFeatureList} = homeDataSlice.actions

export default homeDataSlice.reducer

export function getProperty(payload) {
    return async (dispatch) => {
        dispatch(propertyDataloader())
        try {

        } catch (error) {

        }
    };
}

export function getFeatureProperty(payload) {
    return async (dispatch) => {
        try {
            let result = await instance.get('realestate/agent-property/featured');
            dispatch(setPropertyFeatureList(result.data))
        } catch (error) {

        }
    };
}

export function selectedSearchValue(payload) {
    return async (dispatch) => {
        dispatch(setSearchValue(payload))
    };
}


export function handleFilterModal() {
    return async (dispatch) => {
        dispatch(setFilterModal())
    };
}

