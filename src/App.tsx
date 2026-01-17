import { useState } from "react";
import {
  IoPersonAddSharp, IoListSharp, IoSettingsSharp, IoNotifications,
  IoArrowBack, IoChevronForward, IoCube, IoCalendar, IoInformationCircle
} from "react-icons/io5";
import { FaUserCheck, FaBuildingUser, FaClock, FaBoxOpen, FaTruckFast } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";


type TabType = "dashboard" | "checkin" | "parcel" | "list" | "appointments" | "info" | "settings";

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  // DATA GRID DINAMIS
  const menuItems = [
    { id: "checkin", title: "Check-in Tamu", desc: "Pendaftaran tamu baru dan pendataan instansi kunjungan.", icon: <IoPersonAddSharp size={28} />, color: "indigo" },
    { id: "parcel", title: "Paket Masuk", desc: "Pencatatan kiriman barang, dokumen, atau paket dari kurir.", icon: <IoCube size={28} />, color: "orange" },
    { id: "list", title: "Riwayat Log", desc: "Pantau seluruh log kunjungan dan status paket hari ini.", icon: <IoListSharp size={28} />, color: "emerald" },
    { id: "appointments", title: "Janji Temu", desc: "Lihat daftar tamu yang sudah melakukan reservasi jadwal.", icon: <IoCalendar size={28} />, color: "blue" },
    { id: "info", title: "Informasi Staf", desc: "Pusat informasi prosedur dan pengumuman internal kantor.", icon: <IoInformationCircle size={28} />, color: "amber" },
    { id: "settings", title: "Sistem Pengaturan", desc: "Konfigurasi database, printer label, dan profil akun.", icon: <IoSettingsSharp size={28} />, color: "slate" },
  ];

  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:shadow-indigo-200/50",
    orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:shadow-orange-200/50",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:shadow-emerald-200/50",
    blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:shadow-blue-200/50",
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:shadow-amber-200/50",
    slate: "bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:shadow-slate-300/50",
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-800 font-sans p-6 md:p-10 text-left">
      {/* Header Area */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-indigo-200">
            <MdDashboard size={32} />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-black tracking-tighter text-slate-900">VISTOK</h1>
            <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Receptionist Desk
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
            <IoNotifications size={22} className="text-slate-600" />
          </button>
          <div className="bg-white p-1.5 pr-5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=Admin+Zaid&background=4f46e5&color=fff" className="w-10 h-10 rounded-xl" alt="avatar" />
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900">Admin Zaid</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto">
        {/* Tombol Back Global: Muncul otomatis jika tidak di Dashboard */}
        {activeTab !== "dashboard" && (
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-2 font-black text-slate-400 hover:text-indigo-600 transition-colors mb-8 text-sm uppercase tracking-widest"
          >
            <IoArrowBack size={18} /> Kembali ke Menu Utama
          </button>
        )}

        {/* 1. VIEW DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className="group cursor-pointer bg-white p-8 rounded-[45px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-white flex flex-col items-start text-left hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center mb-6 transition-all duration-500 group-hover:text-white ${colorMap[item.color]}`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-slate-900 leading-none">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Akses Menu <IoChevronForward className="text-indigo-600" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* FORM TAMU VIEW */}
        {activeTab === "checkin" && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
            {/* <button onClick={() => setActiveTab("dashboard")} className="flex items-center gap-2 font-black text-slate-400 hover:text-indigo-600 transition-colors mb-10 text-sm uppercase tracking-widest">
              <IoArrowBack size={18} /> Kembali
            </button> */}
            <div className="bg-white rounded-[50px] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-white">
              <div className="md:w-[35%] bg-indigo-600 p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-black leading-tight mb-6">Buku Tamu Digital.</h2>
                  <p className="text-indigo-100 text-sm leading-relaxed font-medium">Lengkapi identitas pengunjung untuk keperluan administrasi keamanan dan verifikasi data.</p>
                </div>
                <div className="bg-indigo-500/30 p-4 rounded-2xl flex items-center gap-3 self-start">
                  <FaClock className="text-indigo-100" />
                  <span className="text-xs font-bold tracking-widest uppercase">{new Date().toLocaleTimeString()} WIB</span>
                </div>
              </div>
              <div className="md:w-[65%] p-12 space-y-8">
                <div className="grid grid-cols-1 gap-8 text-left">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nama Pengunjung</label>
                    <div className="flex items-center bg-slate-50 rounded-3xl px-6 py-1 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                      <FaUserCheck className="text-slate-300 mr-3" />
                      <input type="text" className="w-full py-4 bg-transparent outline-none text-sm font-bold" placeholder="Contoh: Zaid" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Instansi Asal</label>
                    <div className="flex items-center bg-slate-50 rounded-3xl px-6 py-1 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                      <FaBuildingUser className="text-slate-300 mr-3" />
                      <input type="text" className="w-full py-4 bg-transparent outline-none text-sm font-bold" placeholder="Contoh: Universitas Pamulang" />
                    </div>
                  </div>
                </div>
                <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-[25px] shadow-xl shadow-indigo-100 transition-all transform active:scale-[0.98] uppercase tracking-widest">
                  Simpan Kunjungan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FORM PAKET VIEW */}
        {activeTab === "parcel" && (
          <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
            {/* <button onClick={() => setActiveTab("dashboard")} className="flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 transition-colors mb-10 text-sm uppercase tracking-widest">
              <IoArrowBack size={18} /> Kembali
            </button> */}
            <div className="bg-white rounded-[50px] shadow-2xl shadow-orange-100/50 overflow-hidden flex flex-col md:flex-row border border-white">
              <div className="md:w-[35%] bg-orange-500 p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-black leading-tight mb-6">Log Kiriman Paket.</h2>
                  <p className="text-orange-50 text-sm leading-relaxed font-medium">Pencatatan barang masuk dari ekspedisi untuk memastikan paket sampai ke penerima yang tepat.</p>
                </div>
                <FaBoxOpen size={120} className="text-orange-400/30 self-center" />
              </div>
              <div className="md:w-[65%] p-12 space-y-8">
                <div className="space-y-6 text-left">
                  <div className="space-y-2 text-left">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Ekspedisi / Kurir</label>
                    <div className="flex items-center bg-slate-50 rounded-3xl px-6 py-1 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-orange-500 transition-all">
                      <FaTruckFast className="text-slate-300 mr-3" />
                      <input type="text" className="w-full py-4 bg-transparent outline-none text-sm font-bold" placeholder="Contoh: JNE / GrabExpress" />
                    </div>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Ditujukan Kepada</label>
                    <div className="flex items-center bg-slate-50 rounded-3xl px-6 py-1 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-orange-500 transition-all">
                      <FaUserCheck className="text-slate-300 mr-3" />
                      <input type="text" className="w-full py-4 bg-transparent outline-none text-sm font-bold" placeholder="Nama Staf / Dosen..." />
                    </div>
                  </div>
                </div>
                <button className="w-full py-6 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-[25px] shadow-xl shadow-orange-100 transition-all transform active:scale-[0.98] uppercase tracking-widest">
                  Konfirmasi Paket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. SAFETY VIEW: Jika menu diklik tapi kodenya belum dibuat */}
        {!["dashboard", "checkin", "parcel"].includes(activeTab) && (
          <div className="max-w-2xl mx-auto text-left p-20 bg-white rounded-[50px] shadow-xl border border-dashed border-slate-200 flex flex-col items-start">
            <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 mb-6">
              <IoInformationCircle size={40} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Segera Hadir.</h2>
            <p className="text-slate-500 leading-relaxed mb-8">Fitur ini sedang dalam tahap pengembangan oleh Tim Engineer VISTOK.</p>
            <button
              onClick={() => setActiveTab("dashboard")}
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all"
            >
              Oke, Mengerti
            </button>
          </div>
        )}

      </main>

      {/* FOOTER NATIVE */}
      <div className="fixed bottom-10 left-10 flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-xl rounded-2xl border border-white shadow-sm">
        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
        <span className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Vistok Engine v1.0.0</span>
      </div>
    </div>
  );
};

export default App;