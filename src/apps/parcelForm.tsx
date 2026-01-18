import React from 'react';
import { FaBoxOpen, FaTruckFast, FaUserCheck } from 'react-icons/fa6';

export default function ParcelForm({ onBack }: any) {
    return (
        <>
            <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
                {/* <button onClick={() => setActiveTab("dashboard")} className="flex items-center gap-2 font-black text-slate-400 hover:text-orange-600 transition-colors mb-10 text-sm uppercase tracking-widest">
                    <IoArrowBack size={18} /> Kembali
                </button> */}
                <div className="bg-white rounded-[50px] shadow-2xl shadow-orange-100/50 overflow-hidden flex flex-col md:flex-row border border-white">
                    <div className="md:w-[35%] bg-orange-500 p-12 text-white flex flex-col justify-between">
                        <h2 className="text-4xl font-black mb-6">Log Kiriman Paket.</h2>
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

            {/* <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">

                <div className="bg-white rounded-[50px] shadow-2xl shadow-orange-100/50 overflow-hidden flex flex-col md:flex-row border border-white">
                    <div className="md:w-[35%] bg-orange-500 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-black leading-tight mb-6">Log Kiriman Paket.</h2>
                            <p className="text-orange-50 text-sm leading-relaxed font-medium">Pencatatan barang masuk dari ekspedisi untuk memastikan paket sampai ke penerima yang tepat.</p>
                        </div>
                        <FaBoxOpen size={120} className="text-orange-400/30 self-center" />
                    </div>

                </div>
            </div> */}
        </>
    );
}
