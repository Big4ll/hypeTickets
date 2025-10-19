export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">HYPETIX 🎟️</h1>
      <p className="text-lg mb-8 text-gray-300">Vibes. Energy. Bold Youth Culture.</p>

      <form className="flex flex-col gap-3 w-64">
        <input
          type="email"
          placeholder="Email"
          className="p-2 bg-gray-900 border border-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 bg-gray-900 border border-gray-700 rounded"
        />
        <button className="bg-red-600 hover:bg-red-700 rounded py-2">
          Login
        </button>
      </form>
    </div>
  );
}
