import React from 'react';
import { IoPerson, IoMail, IoKey, IoCall, IoLogOut, IoArrowBack } from 'react-icons/io5';
import { FaUserShield, FaBriefcase, FaEdit } from 'react-icons/fa';

// Definisikan props untuk ProfileView jika ingin tombol back berfungsi
interface ProfileViewProps {
    onBack: () => void;
    onLogoutAction: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ onLogoutAction, onBack }: any) => {
    const handleLoginLogout = () => {
        onLogoutAction()
        onBack()
    }
    return (
        <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-500 text-left">
            {/* <button
                onClick={onBack}
                className="flex items-center gap-2 font-black text-slate-400 hover:text-indigo-600 transition-colors mb-10 text-sm uppercase tracking-widest"
            >
                <IoArrowBack size={18} /> Kembali ke Sistem
            </button> */}

            <div className="bg-white rounded-[50px] shadow-2xl shadow-slate-200/50 overflow-hidden border border-white p-12">
                <div className="text-center mb-12">
                    <img
                        src="https://ui-avatars.com/api/?name=Admin+Zaid&background=4f46e5&color=fff&size=128"
                        alt="Admin Avatar"
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <h2 className="text-3xl font-black text-slate-900 mb-1">Admin Zaid</h2>
                    <p className="text-indigo-600 font-bold text-sm flex items-center justify-center gap-2">
                        <FaUserShield size={16} /> Receptionist
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Card Info Utama */}
                    <div className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IoPerson size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Nama Lengkap</p>
                            <p className="text-lg font-bold text-slate-900">Zaid Mustofa</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IoMail size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                            <p className="text-lg font-bold text-slate-900">zaid.mustofa@vistok.id</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IoCall size={24} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Telepon</p>
                            <p className="text-lg font-bold text-slate-900">+62 812-3456-7890</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FaBriefcase size={22} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Jabatan</p>
                            <p className="text-lg font-bold text-slate-900">Resepsionis Utama</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="cursor-pointer flex-1 py-4 bg-slate-900 hover:bg-indigo-600 text-white font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3">
                        <FaEdit size={20} /> Edit Profil
                    </button>
                    <button onClick={() => handleLoginLogout()} className="cursor-pointer flex-1 py-4 bg-red-500 hover:bg-red-600 text-white font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3">
                        <IoLogOut size={22} /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;