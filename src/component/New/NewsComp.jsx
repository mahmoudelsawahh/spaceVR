import React, { useEffect, useState } from "react";

const NewsComp = () => {
  const [photoDate, setPhotoDate] = useState(null);
  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=3yl2JKjKeXlmyfSUopKvy0BtlaFzzkOETeStmguf`
      );
      const data = await res.json();
      setPhotoDate(data);
    }
  }, []);
  if (!photoDate) {
    return <div>No Data</div>;
  }
  return (
    <div className="newsParent">
      <div>
        <img src={photoDate.url} alt={photoDate.title} />
      </div>
      <div>
        <h1>{photoDate.title}</h1>
        <p>{photoDate.date}</p>
        <p>{photoDate.explanation}</p>
      </div>
    </div>
  );
};

export default NewsComp;
