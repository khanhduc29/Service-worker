// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     fetch('http://localhost:5000/api/hello')
// //       .then(response => response.json())
// //       .then(data => setMessage(data.message))
// //       .catch(error => console.error('Error fetching data:', error));
// //   }, []);

// //   return (
// //     <div className="App">
// //       <h1>React App with Service Worker</h1>
// //       <p>Message from API: {message}</p>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/data')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => setData(data))
//       .catch((error) => setError(error.message));
//   }, []);

//   return (
//     <div>
//       <h1>Service Worker API Test</h1>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('');
  const [regionData, setRegionData] = useState(null);
  const [timeData, setTimeData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (type) => {
    const url = `http://localhost:5000/svc/v1/trends/${type}?keywords=${keyword}`;
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (type === 'region') {
          setRegionData(data);
        } else {
          setTimeData(data);
        }
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h1>Service Worker API Search Test</h1>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={() => handleSearch('region')}>Search Region</button>
      <button onClick={() => handleSearch('time')}>Search Time</button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {regionData && <pre>{JSON.stringify(regionData, null, 2)}</pre>}
      {timeData && <pre>{JSON.stringify(timeData, null, 2)}</pre>}
    </div>
  );
}

export default App;
