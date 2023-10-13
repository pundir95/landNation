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
    search:''
  }