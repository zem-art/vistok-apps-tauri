import { IoSearch, IoFilter } from "react-icons/io5";

export default function HistoryView ({onBack} : any) {
    const data = [
        { id: 1, name: "Zaid Mustofa", type: "TAMU", info: "UNPAM", time: "14:20", status: "Aktif" },
        { id: 2, name: "Budi JNE", type: "PAKET", info: "Kurir JNE", time: "15:00", status: "Selesai" },
    ];

    return (
        <div className="max-w-6xl mx-auto animate-in fade-in duration-500 text-left">
            <div className="flex justify-between items-end mb-8">
                <div className="text-left">
                    <h2 className="text-3xl font-black text-slate-900">Riwayat Aktivitas</h2>
                    <p className="text-slate-500 text-sm">Log kunjungan dan penerimaan barang hari ini.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
                        <IoSearch className="text-slate-400 mr-2" />
                        <input type="text" placeholder="Cari nama..." className="bg-transparent outline-none text-sm font-medium" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 overflow-hidden border border-white">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Subjek</th>
                            <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Kategori</th>
                            <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Keterangan</th>
                            <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Waktu</th>
                            <th className="p-6 text-[11px] font-black uppercase tracking-widest text-slate-400">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                                <td className="p-6 font-bold text-slate-900">{item.name}</td>
                                <td className="p-6">
                                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${item.type === 'TAMU' ? 'bg-indigo-50 text-indigo-600' : 'bg-orange-50 text-orange-600'}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className="p-6 text-sm text-slate-500 font-medium">{item.info}</td>
                                <td className="p-6 text-sm font-bold text-slate-900">{item.time} WIB</td>
                                <td className="p-6">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${item.status === 'Aktif' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                                        <span className="text-xs font-bold text-slate-600">{item.status}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};