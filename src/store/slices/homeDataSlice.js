import { createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios.instance';
import { generateApiUrl } from '../../utils/utility';


const initialHomeData = {
    loading: false,
    searchValue: [],
    openFilterModal: false,
    propertyList: [],
    stateCityOrCountry: [],
    singlePropertyDetailsData:{}
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
            state.propertyList = action.payload
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setFilterModal: (state, action) => {
            state.openFilterModal = !state.openFilterModal
        },

        setStateCityOrCountryList: (state, action) => {
            let mapStateorCityCountryOptions = action.payload?.map((item) => {
                return { value: item, label: item }
            })
            state.stateCityOrCountry = mapStateorCityCountryOptions
        },
        selectSearchProperty: (state, action) => {
            state.propertyList = action.payload
        },

        setSinglePropertyDetailsLoading:(state,action)=>{
            state.loading=true
            state.singlePropertyDetailsData={}
        },
        setSinglePropertyDetails: (state, action) => {
         state.singlePropertyDetailsData=action.payload
         state.loading=false
        }
    }

})

export const { setPageTitle, setSearchValue, setFilterModal, setPropertyFeatureList, setStateCityOrCountryList, setSinglePropertyDetailsLoading,selectSearchProperty, setSinglePropertyDetails } = homeDataSlice.actions

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
            let result = await instance.get('/agent-property/featured');
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

export function searchAgentProperty(payload) {
    return async (dispatch) => {
        let result = await instance.get(generateApiUrl(payload, "property/"))
        dispatch(selectSearchProperty(result.data))
    };
}


export function searchByStateCityOrCountry(payload) {
    return async (dispatch) => {
        let result = await instance.get(`/property/names/?name=${payload}`)
        console.log(result)
        dispatch(setStateCityOrCountryList(result.data))
    }
}

export function handleFilterModal() {
    return async (dispatch) => {
        dispatch(setFilterModal())
    };
}

export function getSinglePropertyDetails(payload){
    return async (dispatch)=>{
        dispatch(setSinglePropertyDetailsLoading())
        let result=await instance.get(`agent-property/${payload}/`)
        dispatch(setSinglePropertyDetails(result.data))
    }
}

