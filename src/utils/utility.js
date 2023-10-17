export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const generateApiUrl = (filters, endpointName) => {
    const queryParams = [];
  
    for (const key in filters) {
      if (filters[key]) {
        queryParams.push(`${key}=${encodeURIComponent(filters[key])}`);
      }
    }
    const apiUrl = `/${endpointName}?${queryParams.join("&")}`;
    return apiUrl;
  };

  export const activityFilter={
    search:'',
    region:'',
    country:'',
    price:''
  }

  export const getValuesFromUrlLocation=(value)=>{
   if(value.search.includes("+")){
    return {id:value.search.split("+")[1]}
   }else if(value.search.split("=")[1]){
    let splitWithEqualTo=value.search.split("=")[1]?.replace(/%20/g, ' ');
    return {item:splitWithEqualTo}
   }else{
    return null
   }
  }


 export  function stringToArrayOfObjects(inputString) {
    const values = inputString.split(',');
  
    const result = values.map(value => ({
      label: value.trim(),
      value: value.trim()
    }));
  
    return result;
  }