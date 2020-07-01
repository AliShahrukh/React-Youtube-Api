import axios from 'axios';

const KEY = 'AIzaSyDlha4n8kS5pL0WlBrWaB6rkfRijNkki-g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
