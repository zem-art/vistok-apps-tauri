import { MdDashboard } from "react-icons/md";


export const LoginView = ({ onLoginSuccess }: any) => {
    const handleLogin = () => {
        // Lakukan validasi user/pass di sini jika perlu
        onLoginSuccess(); // Ubah state di App menjadi true
    }
    return (
        <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-6 text-left">
            <div className="bg-white w-full max-w-md p-12 rounded-[50px] shadow-2xl border border-white">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-100">
                    <MdDashboard size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Masuk ke Vistok.</h2>
                <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">Gunakan kredensial admin untuk mengelola resepsionis.</p>

                <div className="space-y-6">
                    <div className="space-y-2 text-left">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Username</label>
                        <input type="text" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-600" placeholder="admin_zaid" />
                    </div>
                    <div className="space-y-2 text-left">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-2">Password</label>
                        <input type="password" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:ring-2 focus:ring-indigo-600" placeholder="••••••••" />
                    </div>
                    <button onClick={handleLogin} className="cursor-pointer w-full py-5 bg-slate-900 text-white font-black rounded-3xl shadow-lg hover:bg-indigo-600 transition-all mt-4 uppercase tracking-[0.2em] text-xs">
                        Otorisasi Akses
                    </button>
                </div>
            </div>
        </div>
    );
}