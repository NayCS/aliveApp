import axios from "axios";

export default {

    //Get all blood data
    getBloods: function () {
        return axios.get("/api/bloods");
    },

    //Gets the blood data with a given ID
    getBlood: function (id) {
        return axios.get("/api/bloods/" + id);
    },

    //Delete the blood data with the given id
    deleteBlood: function (id) {
        return axios.delete("/api/bloods/" + id);
    },

    //Saves the blood data in the database
    saveBlood: function (bloodData) {
        return axios.post("/api/bloods/", bloodData);
    }

};