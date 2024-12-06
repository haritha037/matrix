import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[url('/bg-matrix.jpg')] bg-center bg-cover flex flex-col items-center justify-center text-white text-center">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Matrix</h1>
        <p className="text-lg mb-6">
          Embark on an exciting journey and test your knowledge. Are you ready
          to start?
        </p>
        <button
          onClick={() => navigate("/question")}
          className="bg-green-700  text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-primary transition duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Home;
