import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                setData(res[currency] || {});
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency]);
    
    console.log('Currency Data:', data);
    
    return data;
}

export default useCurrencyInfo;
