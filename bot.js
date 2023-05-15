import axios from 'axios';
import {createAlert} from "../utils/notify";
(() => 
{
  console.log("starting");
  let i = 0;
  let inter;
  inter = setInterval(() => {
    async function f() {
      await axios.post(`${import.meta.env.VITE_URL}/api/rooms/epi-place/canvas/pixels`, {
        "posX": Math.floor(Math.random() * 89),
        "posY": 189 + Math.floor(Math.random() * 40),
        "color": Math.floor(Math.random() * 32),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem("token")}`,
        }
      }).then(() => {
        createAlert("Pixel", "pixel", "success");
        i += 1;
      })
        .catch((error) => {
          if (error.response.status === 401)
          {
            authedAPIRequest(error.response.data.message);
            //setTimeout(f, 10000);
          }
        });
    };
    f();
  }, 5500);
})();
