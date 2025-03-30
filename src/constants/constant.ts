export const { hostname } = window.location;

let URL;

if (hostname.includes("domain.com")) {
  URL = "http://live.com";
} else if (hostname.includes("customDev")) {
  URL = "https://your-custom-dev-url.com";
} else {
  URL = "http://localhost:3000";
}

export const BASE_URL = `${URL}/api/v1`;
export const IMAGE_URL = `${URL}/uploads/`;
