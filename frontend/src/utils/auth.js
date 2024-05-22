import Cookies from "universal-cookie";

const cookies = new Cookies();

export const csrfToken = cookies.get("csrftoken");
