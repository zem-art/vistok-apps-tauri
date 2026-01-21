import { useState } from "react";
import {
  IoPersonAddSharp, IoListSharp, IoSettingsSharp, IoNotifications,
  IoArrowBack, IoCube, IoCalendar, IoInformationCircle
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import DashboardView from "./apps/dashboardView";
import CheckinForm from "./apps/checkinForm";
import ParcelForm from "./apps/parcelForm";
import PlaceholderPage from "./not_found";
import ProfileView from "./apps/profileView";
import AppointmentView from "./apps/appointmentView";
import HistoryView from "./apps/historyView";
import { LoginView } from "./apps/auth/LoginView";
import { colorMap } from "./common/const";
import { useDateTime } from "./common/hooks/useDateTime";

type TabType = "dashboard" | "checkin" | "parcel" | "list" | "appointments" | "info" | "settings" | "profile" | "login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");
  const { formattedDate, formattedTime, greeting } = useDateTime()

  // DATA GRID DINAMIS
  const menuItems = [
    { id: "checkin", title: "Check-in Tamu", desc: "Pendaftaran tamu baru dan pendataan instansi kunjungan.", icon: <IoPersonAddSharp size={28} />, color: "indigo" },
    { id: "parcel", title: "Paket Masuk", desc: "Pencatatan kiriman barang, dokumen, atau paket dari kurir.", icon: <IoCube size={28} />, color: "orange" },
    { id: "list", title: "Riwayat Log", desc: "Pantau seluruh log kunjungan dan status paket hari ini.", icon: <IoListSharp size={28} />, color: "emerald" },
    { id: "appointments", title: "Janji Temu", desc: "Lihat daftar tamu yang sudah melakukan reservasi jadwal.", icon: <IoCalendar size={28} />, color: "blue" },
    { id: "info", title: "Informasi Staf", desc: "Pusat informasi prosedur dan pengumuman internal kantor.", icon: <IoInformationCircle size={28} />, color: "amber" },
    { id: "settings", title: "Sistem Pengaturan", desc: "Konfigurasi database, printer label, dan profil akun.", icon: <IoSettingsSharp size={28} />, color: "slate" },
  ];

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
        return <HistoryView onBack={() => setActiveTab("dashboard")} />;
      case "appointments":
        return <AppointmentView onBack={() => setActiveTab("dashboard")} />;
      case "info":
        return <PlaceholderPage title="Pusat Informasi" onBack={() => setActiveTab("dashboard")} />;
      case "settings":
        return <PlaceholderPage title="Sistem & Pengaturan" onBack={() => setActiveTab("dashboard")} />;
      case "profile":
        return <ProfileView onLogoutAction={() => setIsLoggedIn(false)} onBack={() => setActiveTab("dashboard")} />;
      default:
        return <DashboardView onSelect={(id: any) => setActiveTab(id)} menuItems={menuItems} colorMap={colorMap} />;
    }
  };

  // --- LOGIKA UTAMA: PROTEKSI HALAMAN ---
  if (!isLoggedIn) {
    return (
      <LoginView
        onLoginSuccess={() => setIsLoggedIn(true)}
      />
    );
  }


  return (
    <div className="min-h-screen w-full bg-[#F0F2F5] text-slate-800 font-sans selection:bg-indigo-100 overflow-x-hidden">
      {/* Header Area - Sticky agar tidak "hilang" saat scroll di layar kecil */}
      <header className="sticky top-0 z-30 bg-[#F0F2F5]/80 backdrop-blur-md px-6 py-4 md:px-10 md:py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 shrink-0">
              <MdDashboard className="text-xl md:text-3xl" />
            </div>
            <div className="text-left">
              <h1 className="text-lg md:text-2xl font-black tracking-tighter text-slate-900 leading-none">VISTOK</h1>
              <p className="text-[9px] md:text-[11px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="truncate">Receptionist Desk</span>
              </p>
            </div>
          </div>

          {/* Bagian Waktu di apps.tsx */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Gunakan sm:flex agar jam muncul lebih awal (tidak nunggu layar lebar/lg) */}
            <div className="hidden sm:flex flex-col items-end border-r border-slate-200 pr-4 min-w-[80px] md:min-w-[100px]">
              <span className="text-[12px] md:text-[14px] font-black text-slate-900 tabular-nums leading-none">
                {formattedTime}
              </span>
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                {formattedDate}
              </span>
            </div>

            {/* Tombol Notifikasi tetap muncul namun lebih kecil di mobile */}
            <button className="p-2.5 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
              <IoNotifications size={18} className="text-slate-600 md:text-[20px]" />
            </button>

            {/* Profil Button */}
            <button
              onClick={() => setActiveTab('profile')}
              className="cursor-pointer bg-white p-1 md:p-1.5 pr-3 md:pr-5 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2 md:gap-3 hover:border-indigo-300 transition-colors"
            >
              <img
                src={`https://ui-avatars.com/api/?name=Admin+Zaid&background=4f46e5&color=fff`}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-inner"
                alt="avatar"
              />
              {/* Gunakan block agar nama tetap muncul, hanya ganti ukuran font */}
              <div className="text-left">
                <p className="text-[9px] md:text-xs font-bold text-slate-900 leading-tight">
                  {greeting}, Admin
                </p>
                <p className="text-[7px] md:text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                  Engineer
                </p>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 pb-32">
        {activeTab !== "dashboard" && (
          <button
            onClick={() => setActiveTab("dashboard")}
            className="group cursor-pointer flex items-center gap-2 font-black text-slate-400 hover:text-indigo-600 transition-colors mb-6 md:mb-8 text-[10px] md:text-sm uppercase tracking-widest"
          >
            <IoArrowBack size={18} className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Menu Utama
          </button>
        )}

        {/* Container Content - Pastikan renderContent menggunakan Grid responsif */}
        <div className="w-full">
          {renderContent()}
        </div>
      </main>

      {/* FOOTER - Diubah dari fixed absolute ke fixed bottom dengan penyesuaian mobile */}
      <footer className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-40">
        <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/50 shadow-lg shadow-slate-200/50">
          <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
          <span className="text-[8px] md:text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">
            Vistok Engine <span className="text-indigo-600">v1.0.0</span>
          </span>
        </div>
      </footer>
    </div>
  );
};