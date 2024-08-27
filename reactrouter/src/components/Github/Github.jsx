import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState("");

  useEffect(() => {
    // when component will be loaded

    fetch("https://api.github.com/users/ankitaandhare")
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
      Github Followers: {data.followers}
      <img src= {data.avatar_url} alt="Git Picture" width={300}/>
       
    </div>
  );
}

export default Github;
