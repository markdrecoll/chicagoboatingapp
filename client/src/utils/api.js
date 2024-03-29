import axios from 'axios';

export default {
    getAllWeather : function(){
        return axios.get("/api/weather");
    },
    saveActivity: function(activity) {
        return axios.post("/api/activity", {date: activity.date, text: activity.text});
    },
    getRegularWeather : function(){
        return axios.get("");
    },
    getItinery: function(){
        return axios.get("/api/activity/myItinerary");
    },
    setHarborForUser: function(harbor) {
        return axios.put("/api/harbor", 
        {
            harbor: harbor,
        })
    },
    getHarborForUser: function(harbor) {
        return axios.get("/api/harbor", harbor)
    },
    setAttractionForUser: function(attraction) {
        return axios.put("/api/attraction", 
        {
            attraction: attraction,
        })
    },
}