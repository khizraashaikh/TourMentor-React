import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw?.lat,
              tr_latitude: ne?.lat,
              bl_longitude: sw?.lng,
              tr_longitude: ne?.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'get-it-from-rapid api'
            }
          });

        return data;
    } catch (error) {
        console.log(error);
    }
};