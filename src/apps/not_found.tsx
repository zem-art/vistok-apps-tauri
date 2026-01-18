import React from 'react';
import { IoInformationCircle } from 'react-icons/io5';

// 1. Definisikan Halaman yang Belum Ada (Placeholder)
export default function PlaceholderPage({ title, onBack }: { title: string, onBack: () => void }) {
    return (
        <>
            <div className="max-w-4xl mx-auto animate-in fade-in duration-500 text-left p-12 bg-white rounded-[50px] shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-6">
                    <IoInformationCircle size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">{title}</h2>
                <p className="text-slate-500 mb-8 leading-relaxed italic font-medium">
                    Modul ini sedang disiapkan untuk rilis berikutnya. Mohon tunggu update dari tim engineer.
                </p>
                <button onClick={onBack} className="cursor-pointer px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all">
                    Kembali ke Dashboard
                </button>
            </div>
            {/* <div className="max-w-2xl mx-auto text-left p-20 bg-white rounded-[50px] shadow-xl border border-dashed border-slate-200 flex flex-col items-start">
                <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400 mb-6">
                    <IoInformationCircle size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Segera Hadir.</h2>
                <p className="text-slate-500 leading-relaxed mb-8">Fitur ini sedang dalam tahap pengembangan oleh Tim Engineer VISTOK.</p>
                <button
                    onClick={onBack}
                    className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all"
                >
                    Oke, Mengerti
                </button>
            </div> */}
        </>
    );
}
