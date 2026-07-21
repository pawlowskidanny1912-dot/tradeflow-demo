export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-6xl font-semibold tracking-tight text-gray-900">
          TradeFlow
        </h1>

        <p className="mt-6 text-xl text-gray-500">
          The smarter way to manage your trading workflow.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-black px-8 py-3 text-white text-lg hover:bg-gray-800 transition">
            Get Started
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-3 text-lg text-gray-700 hover:bg-white transition">
            Learn More
          </button>
        </div>

        <div className="mt-16 rounded-3xl bg-white shadow-xl p-10">
          <h2 className="text-2xl font-medium text-gray-900">
           Powered Trading Dashboard
          </h2>

          <p className="mt-3 text-gray-500">
            Track markets, analyse opportunities and organise your trading decisions in one place.
          </p>
        </div>

      </div>
    </main>
  );
}