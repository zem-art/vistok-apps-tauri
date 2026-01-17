import { useState } from "react";

type TabType = "checkin" | "list";

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("checkin");

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Top Navigation - Lebih Modern dibanding Sidebar */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Vistok<span className="text-indigo-600">.</span></span>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("checkin")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'checkin' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Check-in
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Log Tamu
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {activeTab === "checkin" ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Selamat Datang</h2>
              <p className="text-slate-500 mt-2">Silakan isi data kunjungan Anda dengan lengkap.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300" placeholder="Zaid" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Instansi</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300" placeholder="Universitas Pamulang" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Tujuan Bertemu</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-300" placeholder="Siapa yang ingin Anda temui?" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Keperluan</label>
                <textarea className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all h-32 resize-none placeholder:text-slate-300" placeholder="Tuliskan alasan kunjungan Anda..."></textarea>
              </div>

              <button className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95">
                Konfirmasi Kedatangan
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Log Kunjungan Hari Ini</h2>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">12 Tamu</span>
            </div>

            <div className="grid gap-4">
              {/* Card Style untuk List - Lebih Modern dibanding Table di Mobile/Small Desktop */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                      Z
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Zaid</h4>
                      <p className="text-sm text-slate-400">Bertemu Kaprodi TI • 14:20 WIB</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-xl">Selesai</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="fixed bottom-6 w-full text-center">
        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.2em]">Powered by Tauri & Rust Backend</p>
      </footer>
    </div>
  );
}

export default App;