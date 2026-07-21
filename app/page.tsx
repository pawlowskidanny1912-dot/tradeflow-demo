export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight">
          TradeFlow
        </h2>

        <div className="space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Features</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">About</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-32 text-center">

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
          Smarter trading.
          <br />
          Powered by AI.
        </h1>

        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto">
          TradeFlow helps traders analyse markets, discover opportunities,
          and make smarter decisions with artificial intelligence.
        </p>


        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:opacity-80 transition">
            Get Started
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition">
            Learn More
          </button>

        </div>


        {/* Product Card */}
        <div className="mt-24 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 p-1 shadow-2xl">

          <div className="bg-black rounded-3xl p-12 text-white">

            <h2 className="text-4xl font-semibold">
              AI Trading Dashboard
            </h2>

            <p className="mt-4 text-gray-400 text-lg">
              Real-time insights, market analysis and intelligent automation.
            </p>


            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-medium">
                  Market Analysis
                </h3>
                <p className="mt-2 text-gray-400">
                  Understand trends faster with AI-powered analysis.
                </p>
              </div>


              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-medium">
                  Smart Signals
                </h3>
                <p className="mt-2 text-gray-400">
                  Identify opportunities with intelligent alerts.
                </p>
              </div>


              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-medium">
                  Portfolio AI
                </h3>
                <p className="mt-2 text-gray-400">
                  Track performance and improve decisions.
                </p>
              </div>

            </div>

          </div>

        </div>


      </section>


      {/* Footer */}
      <footer className="border-t py-8 text-center text-gray-500 text-sm">
        © 2026 TradeFlow AI. All rights reserved.
      </footer>

    </main>
  );
}