import { createSlice } from '@reduxjs/toolkit';
import instance from '../../services/axios.instance';
import { generateApiUrl } from '../../utils/utility';


const initialHomeData = {
    loading: false,
    searchValue: [],
    openFilterModal: false,
    propertyList: [],
    stateCityOrCountry: [],
    singlePropertyDetailsData:{},
    propertyFilterList:{}
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
            state.loading = false;
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
        },

        setPropertyListSortFilter:(state,action)=>{
         state.loading=false
         state.propertyList=action.payload
        },

        setLikeDislikeProperties:(state,action)=>{
            state.propertyList=action.payload
        },
        setBrowseByCategory:(state,action)=>{
            state.loading=false
            state.propertyList=action.payload
        },

        setPropertyFilterList:(state,action)=>{
            state.propertyFilterList=action.payload
        }
    }

})

export const {propertyDataloader, setPageTitle, setSearchValue, setFilterModal, setPropertyFeatureList,setPropertyFilterList,setBrowseByCategory, setStateCityOrCountryList, setSinglePropertyDetailsLoading,selectSearchProperty, setSinglePropertyDetails,setPropertyListSortFilter,setLikeDislikeProperties } = homeDataSlice.actions

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
            dispatch(propertyDataloader())
            let result = await instance.get('/realestate/agent-property/featured');
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
        let result = await instance.get(generateApiUrl(payload, "/realestate/property/"))
        dispatch(selectSearchProperty(result.data.results))
    };
}

export function searchByStateCityOrCountry(payload) {
    return async (dispatch) => {
        dispatch(setSinglePropertyDetailsLoading())
        let result = await instance.get(`/realestate/property/names/?name=${payload}`)
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
        let result=await instance.get(`/realestate/agent-property/${payload}/`)
        dispatch(setSinglePropertyDetails(result.data))
    }
}


export function getPropertyListSortFilter(payload){
    return async (dispatch)=>{
        dispatch(setSinglePropertyDetailsLoading())
        let result=await instance.get(`/realestate/property/?ordering=${payload}`)
        dispatch(setPropertyListSortFilter(result.data.results))
    }
}

export function _likeDislikeProperties(payload){
    return async (dispatch)=>{
        dispatch(setSinglePropertyDetailsLoading())
        let result=await instance.put(`/realestate/agent-property/${payload.id}/`,{
         featured:payload.featured
        })
     console.log(result)
    }
}


export function getBrowseByCategory(payload,callBack){
    return async (dispatch)=>{
        dispatch(setSinglePropertyDetailsLoading())
        let result=await instance.get(`/realestate/property/?property_type=${payload}`)
        console.log(result,"browser")
        dispatch(setBrowseByCategory(result.data.results))
        return callBack()
     }
}

export function propertyFilter(){
    return async (dispatch)=>{
        // dispatch(setSinglePropertyDetailsLoading())
        let result=await instance.get(`/realestate/property/count/`)
        dispatch(setPropertyFilterList(result.data))

     }
}







