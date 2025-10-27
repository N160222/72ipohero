import { TrendingUp, Users, Activity, ArrowUp, ArrowDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cfe8fc] via-white to-[#d4f7d0] relative overflow-hidden">
      {/* Floating animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-32 h-32 bg-green-300 rounded-full opacity-15 animate-float-delayed"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            72IPO
          </h1>
        </div>
        <div className="flex items-center space-x-8">
          <a
            href="#mainboard"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 hover:scale-105 transform"
          >
            Mainboard IPOs
          </a>
          <a
            href="#sme"
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 hover:scale-105 transform"
          >
            SME IPOs
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Upcoming
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  IPOs with Confidence
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Track, analyze, and invest smarter with 72IPO — your IPO companion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#mainboard" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                Mainboard IPOs
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a href="#sme" className="group px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                SME IPOs
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Daily Visitors</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">150+</div>
                <div className="text-sm text-gray-600">Active IPOs</div>
              </div>
            </div>
          </div>

          {/* Right Illustration - Market Dashboard */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Market Dashboard Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Market Overview</h3>
                    <p className="text-sm text-gray-500">Live IPO Performance</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stock Ticker Cards */}
                <div className="space-y-4 mb-6">
                  {/* Stock 1 */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 hover:scale-105 transform transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">TECHIPO</div>
                          <div className="text-xs text-gray-600">Tech Corp</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600 flex items-center gap-1">
                          <ArrowUp className="w-4 h-4" />
                          +12.5%
                        </div>
                        <div className="text-sm text-gray-600">₹542</div>
                      </div>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                      <div className="flex-1 bg-green-400 rounded-t" style={{height: '60%'}}></div>
                      <div className="flex-1 bg-green-400 rounded-t" style={{height: '75%'}}></div>
                      <div className="flex-1 bg-green-400 rounded-t" style={{height: '50%'}}></div>
                      <div className="flex-1 bg-green-500 rounded-t" style={{height: '85%'}}></div>
                      <div className="flex-1 bg-green-500 rounded-t" style={{height: '100%'}}></div>
                    </div>
                  </div>

                  {/* Stock 2 */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 hover:scale-105 transform transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">FINIPO</div>
                          <div className="text-xs text-gray-600">Finance Ltd</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600 flex items-center gap-1">
                          <ArrowDown className="w-4 h-4" />
                          -3.2%
                        </div>
                        <div className="text-sm text-gray-600">₹362</div>
                      </div>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                      <div className="flex-1 bg-red-400 rounded-t" style={{height: '80%'}}></div>
                      <div className="flex-1 bg-red-400 rounded-t" style={{height: '65%'}}></div>
                      <div className="flex-1 bg-red-500 rounded-t" style={{height: '55%'}}></div>
                      <div className="flex-1 bg-red-500 rounded-t" style={{height: '45%'}}></div>
                      <div className="flex-1 bg-red-500 rounded-t" style={{height: '35%'}}></div>
                    </div>
                  </div>

                  {/* Stock 3 */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 hover:scale-105 transform transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">GROWIPO</div>
                          <div className="text-xs text-gray-600">Growth Inc</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600 flex items-center gap-1">
                          <ArrowUp className="w-4 h-4" />
                          +8.7%
                        </div>
                        <div className="text-sm text-gray-600">₹295</div>
                      </div>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                      <div className="flex-1 bg-blue-400 rounded-t" style={{height: '45%'}}></div>
                      <div className="flex-1 bg-blue-400 rounded-t" style={{height: '60%'}}></div>
                      <div className="flex-1 bg-blue-500 rounded-t" style={{height: '70%'}}></div>
                      <div className="flex-1 bg-blue-500 rounded-t" style={{height: '85%'}}></div>
                      <div className="flex-1 bg-blue-500 rounded-t" style={{height: '75%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-green-600 font-bold text-lg">
                      <Users className="w-5 h-5" />
                      2.5K
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Active Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-600 font-bold text-lg">
                      <Activity className="w-5 h-5" />
                      ₹15Cr
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Total Volume</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
