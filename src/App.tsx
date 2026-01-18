import { useState } from "react";
import {
  IoPersonAddSharp, IoListSharp, IoSettingsSharp, IoNotifications,
  IoArrowBack, IoCube, IoCalendar, IoInformationCircle
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import DashboardView from "./apps/dashboardView";
import CheckinForm from "./apps/checkinForm";
import ParcelForm from "./apps/parcelForm";
import PlaceholderPage from "./apps/not_found";

type TabType = "dashboard" | "checkin" | "parcel" | "list" | "appointments" | "info" | "settings";

export default function App() {
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

  // Fungsi untuk memanggil konten halaman berdasarkan tab aktif
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView onSelect={(id: any) => setActiveTab(id)} menuItems={menuItems} colorMap={colorMap} />;
      case "checkin":
        return <CheckinForm onBack={() => setActiveTab("dashboard")} />;
      case "parcel":
        return <ParcelForm onBack={() => setActiveTab("dashboard")} />;
      case "list":
        return <PlaceholderPage title="Riwayat Log" onBack={() => setActiveTab("dashboard")} />;
      case "appointments":
        return <PlaceholderPage title="Janji Temu" onBack={() => setActiveTab("dashboard")} />;
      case "info":
        return <PlaceholderPage title="Pusat Informasi" onBack={() => setActiveTab("dashboard")} />;
      case "settings":
        return <PlaceholderPage title="Sistem & Pengaturan" onBack={() => setActiveTab("dashboard")} />;
      default:
        return <DashboardView onSelect={(id: any) => setActiveTab(id)} menuItems={menuItems} colorMap={colorMap} />;
    }
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
            className="cursor-pointer flex items-center gap-2 font-black text-slate-400 hover:text-indigo-600 transition-colors mb-8 text-sm uppercase tracking-widest"
          >
            <IoArrowBack size={18} /> Kembali ke Menu Utama
          </button>
        )}
        {renderContent()}
      </main>

      {/* FOOTER NATIVE */}
      <div className="fixed bottom-10 left-10 flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-xl rounded-2xl border border-white shadow-sm">
        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
        <span className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">Vistok Engine v1.0.0</span>
      </div>
    </div>
  );
};