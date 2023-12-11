import React, { useState } from "react";

const useRequest =  ({url, method}) => {
  const API_KEY = `_H9Cw1v4KADPFA9dD1K7eCSrrVR5M2bg-pm2S_ukNGIWn33ijA`
  const [loading, setLoading] = useState(false);
  const sendRequest = async(body, custom) => {
    setLoading(true);
  const res =  await fetch(url || custom, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined
    })
    const data = await res.json();
    setLoading(false);

  return data;
}
return {loading, sendRequest}
}

export default useRequest;