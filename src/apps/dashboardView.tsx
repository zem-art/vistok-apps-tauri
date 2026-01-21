import React from 'react';
import { IoChevronForward } from 'react-icons/io5';

export default function DashboardView({ menuItems, colorMap, onSelect }: any) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {menuItems.map((item: any) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className="group cursor-pointer bg-white p-8 rounded-[45px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-white flex flex-col items-start text-left hover:-translate-y-2"
                    >
                        <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center mb-6 transition-all duration-500 group-hover:text-white ${colorMap[item.color]}`}>
                            {item.icon}
                        </div>

                        <h3 className="text-2xl font-black mb-3 text-slate-900 leading-none">
                            {item.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            {item.desc}
                        </p>

                        <div className="mt-auto flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Akses Menu <IoChevronForward className="text-indigo-600" />
                        </div>
                    </button>
                ))}
            </div>
        </>
    );
}