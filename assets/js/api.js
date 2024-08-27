"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const /* {String} */ APP_ID = "687b57e1";

const /* {String} */ API_KEY = "6df1c4fb2a1655d4ad65e54c383642f6";

const /* {String} */ TYPE = "public";

/*

  $ @param {Array} queries Query array

  $ @param {Function} successCallback Success callback function

*/

export const fetchData = async function (queries, successCallback) {
  const baseURL = "https://api.edamam.com/api/recipes/v2"; 

  // Construct the query string
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  // Construct the full URL
  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    successCallback(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
