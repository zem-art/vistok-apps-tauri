import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

export default function AppointmentView({ onBack }: any) {
    return (
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500 text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Janji Temu Hari Ini</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-[35px] shadow-sm border border-slate-100 flex justify-between items-center group hover:shadow-xl transition-all">
                        <div className="text-left">
                            <div className="flex items-center gap-2 text-blue-600 font-black text-xs mb-3 uppercase tracking-widest">
                                <IoTimeOutline /> 10:00 - 11:30 WIB
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-1">Dr. Ahmad Subarjo</h3>
                            <p className="text-slate-400 text-sm font-medium">Kunjungan: Konsultasi Akademik</p>
                        </div>
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">
                            AS
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}