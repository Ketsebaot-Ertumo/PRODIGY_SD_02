import React, { useState } from 'react';
import image from './images/thinking-man-with-question-mark.png'

function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const parsedGuess = parseInt(guess);
  
    if (isNaN(parsedGuess)) {
      setMessage('Please enter a valid number.');
    } else if (parsedGuess < number) {
      setMessage('Too low!😞😂');
      setAttempts(attempts + 1);
    } else if (parsedGuess > number) {
      setMessage('Too high!😞😂');
      setAttempts(attempts + 1);
    } else {
      const newNumber = Math.floor(Math.random() * 100) + 1;
      setGuess('');
      setMessage(`Congratulations!👍 You guessed the number in ${attempts + 1} attempts.  👏😊`);
      setAttempts(0);
      setNumber(newNumber);
    }
  
    // setGuess('');
  };

  return (
    <div className="justify-center h-screen bg-black">
    {/* <div className="justify-center h-screen bg-gradient-to-r from-blue-700 to-white">  */}
      <h1 className="sm:text-6xl fold:text-3xl text-4xl font-bold mb-4 text-center text-white sm:p-20 p-5 pt-10">Number Guessing Game</h1>
      <div className='sm:flex justify-center gap-20 items-center m-5 lg:my-5 xl:my-10 md:my-20 md:mx-40 md:px-10 rounded-2xl border border-gray-300 bg-black'>
          <div>
            <img className='h-[300px] w-[300px] fold-size p-10' src={image} alt='' />
          </div>
          <div className='sm:w-[70%] pb-5 text-center'>
              <div className='text-4xl fold:text-2xl mb-10 text-white text-center text-left p-2'>Guess Number 1 to 100 :</div>
              {/* <span role="img" aria-label="Grinning Face">😄</span> */}
              <input
                type="number"
                className="border px-2 py-1 text-center rounded-l sm:ml-10 pl-1"
                placeholder="Enter your guess"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-r border border-blue-500 items-center justify-center"
                onClick={handleGuess}
              >
                Guess
              </button>
              {message && <p className="sm:mt-4 text-white text-center text-xl pt-5 sm:pb-5">{message}</p>}
          </div>
      </div>
    </div>
  );
}

export default App;







// import React, { useState } from 'react';
// import image from './images/thinking-man-with-question-mark.png'

// function App() {
//   const [guess, setGuess] = useState('');
//   const [message, setMessage] = useState('');
//   const [number] = useState(Math.floor(Math.random() * 100) + 1);
//   const [attempts, setAttempts] = useState(0);

//   const handleGuess = () => {
//     const parsedGuess = parseInt(guess);

//     if (isNaN(parsedGuess)) {
//       setMessage('Please enter a valid number.');
//     } else if (parsedGuess < number) {
//       setMessage('Too low! 😞 😂');
//       setAttempts(attempts + 1);
//     } else if (parsedGuess > number) {
//       setMessage('Too high! 😞 😂');
//       setAttempts(attempts + 1);
//     } else {
//       setMessage(`Congratulations!👍 You guessed the number in ${attempts + 1} attempts.  👏😊`);
//     }

//     setGuess('');
//   };

//   return (
//     <div className="justify-center h-screen bg-black">
//     {/* <div className="justify-center h-screen bg-gradient-to-r from-blue-700 to-white">  */}
//       <h1 className="text-6xl font-bold mb-4 p-5 text-center text-white p-20 pt-20">Number Guessing Game</h1>
//       <div className='flex justify-between items-center m-20 ml-40 mr-40 pl-10 pr-20 rounded-2xl border border-gray-300 m-10 bg-black'>
//           <div>
//             <img className='h-[300px] w-[100%] p-10' src={image} alt='' />
//           </div>
//           <div className='w-[50%]'>
//               <div className='text-4xl mb-10 text-white'>Guess Number 1 to 100 :</div>
//               {/* <span role="img" aria-label="Grinning Face">😄</span> */}
//               <input
//                 type="number"
//                 className="border px-2 py-1 text-center rounded-l ml-10"
//                 placeholder="Enter your guess"
//                 value={guess}
//                 onChange={(e) => setGuess(e.target.value)}
//               />
//               <button
//                 className="bg-blue-500 text-white px-4 py-1 rounded-r border border-blue-300"
//                 onClick={handleGuess}
//               >
//                 Guess
//               </button>
//               {message && <p className="mt-4 text-white text-center text-xl pt-5">{message}</p>}
//           </div>
//       </div>
//     </div>
//   );
// }

// export default App;