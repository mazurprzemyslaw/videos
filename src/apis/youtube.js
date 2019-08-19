import axios from "axios";

const KEY = "AIzaSyD9913h0K1B6z6UXfOHHPALV26ZYCeFI_U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
