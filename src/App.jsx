import { useState, useRef } from "react";
const App = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>
    </div>
  );
};

export default App;
