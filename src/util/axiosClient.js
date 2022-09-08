import axios from "axios";

export const options = {  
    method: "GET",
 url: 'https://livescore-football.p.rapidapi.com/soccer/news-detail',
  params: {
    slug: 'mourinho-buys-afena-gyan-800-trainers-after-match-winning-roma-display-2021112223190752865'
  },	
  headers: {
    'X-RapidAPI-Key': '63d217a0demshec0815c456c8760p190a53jsnfa42b273f008' ,
    'X-RapidAPI-Host': 'livescore-football.p.rapidapi.com'
  }
};

export const fetchStories = async (url,options) => {
    const response = await axios(url, options);
    return response.data;
}


