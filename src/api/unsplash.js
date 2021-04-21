import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dk_UG3LbenngHDrsB4BGyXebJj74FPuJbYI5ioY-MJ0",
  },
});
