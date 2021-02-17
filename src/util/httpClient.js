import axios from "axios";
const BaseURL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

function getHeaders(secured) {
  let options = {
    "Content-Type": "application/json",
  };
  if (secured) {
    options["Authorization"] = localStorage.getItem("token");
  }
  return options;
}

export function GET(url, isSecure = false, params = {}) {
  return http.get(url, {
    //http means axios
    headers: getHeaders(isSecure),
    params,
  });
}

export function POST(url, data, isSecure = false, params = {}) {
  return http.post(url, data, {
    headers: getHeaders(isSecure),
    params,
  });
}

export function PUT(url, data, isSecure = false, params = {}) {
  return http.put(url, data, {
    headers: getHeaders(isSecure),
    params,
  });
}

export function DELETE(url, isSecure = false, params = {}) {
  return http.delete(url, {
    headers: getHeaders(isSecure),
    params,
  });
}


