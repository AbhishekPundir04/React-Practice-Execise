import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoEx() {
  const [addUrl, setUrl] = useState('');

  const urlHandler = (event) => {
    event.preventDefault();
    setUrl(addUrl);
  };

  return (
    <div>
      <form onSubmit={urlHandler}>
        <input type="url" value={addUrl} onChange={(event) => setUrl(event.target.value)} />
        <button type="submit">Visit Now</button>
      </form>
      {addUrl && (
        <div>
          <h2>Video Player</h2>
          <ReactPlayer url={addUrl} controls width="260px" height="175px" />
        </div>
      )}
    </div>
  );
}
