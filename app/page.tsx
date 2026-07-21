export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-6xl font-semibold tracking-tight">
          TradeFlow
        </h1>

        <p className="mt-6 max-w-xl text-xl text-gray-500">
          Intelligent trading tools.
          Analyse markets, track opportunities, and make smarter decisions.
        </p>

        <button className="mt-10 rounded-full bg-black px-8 py-4 text-white text-lg transition hover:bg-gray-800">
          Get Started
        </button>

      </section>
    </main>
  );
}