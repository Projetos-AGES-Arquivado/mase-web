import axios from "axios";
import config from "config";
import querystring from "querystring";

const userServices = {
  submitCreatePassword(payload) {
    let path = `${config.apiEndpoint}/createPassword`;
    return axios({
      method: "POST",
      url: path,
      data: payload
    });
  }
};

export default userServices;
