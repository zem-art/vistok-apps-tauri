import React from 'react';
import { FaBuildingUser, FaClock, FaUserCheck } from 'react-icons/fa6';

export default function CheckinForm({ onBack }: any) {
    return (
        <>
            <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
                <div className="bg-white rounded-[50px] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row border border-white">
                    <div className="md:w-[35%] bg-indigo-600 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-black leading-tight mb-6">Buku Tamu Digital.</h2>
                            <p className="text-indigo-100 text-sm leading-relaxed font-medium">Lengkapi identitas pengunjung.</p>
                        </div>
                        <div className="bg-indigo-500/30 p-4 rounded-2xl flex items-center gap-3 self-start">
                            <FaClock className="text-indigo-100" />
                            <span className="text-xs font-bold uppercase">{new Date().toLocaleTimeString()} WIB</span>
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
        </>
    );
}
