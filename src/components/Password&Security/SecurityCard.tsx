'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Eye, EyeOff } from 'lucide-react';
import SMSVerificationModal from './SmsVerification';

const SecurityCard: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'password' | '2fa' | 'devices' | null>(null);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const handleCancelClick = () => {
        setActiveSection(null);
        setOldPassword('');
        setNewPassword('');
        setShowOldPassword(false);
        setShowNewPassword(false);
    };

    const renderChangePassword = () => (
        <div className="mt-6 w-2/5">
            <h3 className="text-xl text-gray-700 mb-4">Change Password</h3>
            <div className="mb-4 relative">
                <label htmlFor="old-password" className="block text-sm text-gray-500">
                    Old Password
                </label>
                <input
                    type={showOldPassword ? "text" : "password"}
                    id="old-password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="mt-2 w-full border border-black px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none"
                    style={{ borderRadius: '6px' }}
                />
                <div
                    className="absolute bottom-3 right-0 flex items-center px-3 cursor-pointer"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                >
                    {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
            </div>
            <div className="mb-4 relative">
                <label htmlFor="new-password" className="block text-sm text-gray-500">
                    New Password
                </label>
                <input
                    type={showNewPassword ? "text" : "password"}
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-2 w-full border border-black px-4 py-2 font-semibold focus:border focus:border-orange-300 focus:outline-none"
                    style={{ borderRadius: '6px' }}
                />
                <div
                    className="absolute bottom-3 right-0 flex items-center px-3 cursor-pointer"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    className="rounded-3xl bg-orange-500 p-3 px-6 text-xs text-white"
                    onClick={() => { /* Implement save functionality */ }}
                >
                    Update
                </button>
                <button
                    className="rounded-3xl border p-3 px-6 text-xs"
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
            </div>
        </div>
    );

    const renderEnable2FA = () => (
        <div className="mt-6 w-full">
            <h3 className="text-2xl text-gray-700 mb-4 font-axiformaBold">Add an extra security system</h3>
            <p className="text-sm text-gray-400 w-4/5">2FA Authentication adds an extra layer of security by requiring two forms of verification This ensures that even if your password is compromised, your account remains protected with an additional layer of defense. An additional code will be required when you log in an unauthorized device..</p>
            <div className="w-full flex flex-col mt-6">
                <h2 className='text-lg text-gray-700 mb-4 font-axiformaBold'>Choose your security method</h2>
                <div className="flex space-x-4">
                    <div className='w-3/5'>
                        <h3 className='text-base text-gray-700 font-axiformaSemiBold'>Authentication app</h3>
                        <div className="flex">
                            <p className='text-gray-400 text-xs'>For enhanced security, we recommend using an authentication app for verification . Authentication apps generate time-sensitive codes, making it much harder for unauthorized users to gain access to your account. </p>
                        </div>

                    </div>

                    <div className='w-2/5'>
                        <h3 className='text-base text-gray-700 font-axiformaSemiBold'>SMS or Email</h3>
                        <div className="flex">
                            <p className='text-gray-400 text-xs'>A code will be sent to your number or email</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <button
                    className="rounded-3xl bg-orange-500 p-2 px-10 text-xs text-white"
                    onClick={() => { /* Implement enable 2FA functionality */ }}
                >
                    Continue
                </button>               
                 <button
                    className="rounded-3xl border p-3 px-6 text-xs"
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
            </div>
        </div>
    );

    const renderDevicesLoggedIn = () => (
        <div className="mt-6 w-2/5">
            <h3 className="text-xl text-gray-700 mb-4">Devices You're Logged In</h3>
            {/* Add your devices list here */}
            <ul className="text-sm text-gray-500">
                <li>Device 1 - Last active: 2023-08-01</li>
                <li>Device 2 - Last active: 2023-08-02</li>
                {/* Add more devices as needed */}
            </ul>
            <div className="flex justify-between mt-4">
                <button
                    className="rounded-3xl bg-orange-500 p-3 px-6 text-xs text-white"
                    onClick={() => { /* Implement device management functionality */ }}
                >
                    Manage Devices
                </button>
                <button
                    className="rounded-3xl border p-3 px-6 text-xs"
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
            </div>
        </div>
    );

    return (
        <div className="py-10 bg-white border rounded-xl w-full px-12 mx-auto mt-8 font-axiforma">
            <div className="flex items-center justify-between">
                <div className="w-full">
                    {activeSection === 'password' && renderChangePassword()}
                    {activeSection === '2fa' && renderEnable2FA()}
                    {activeSection === 'devices' && renderDevicesLoggedIn()}
                    {activeSection === null && (
                        <div className="w-3/5 space-y-20">
                            <div className="block py-2 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-gray-400">Change Password</h3>
                                    </div>
                                    <button onClick={() => setActiveSection('password')}>
                                        <ChevronRight size={20} className='text-gray-400' />
                                    </button>
                                </div>
                            </div>
                            <div className="block py-2 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-gray-400">Enable 2FA-authentication</h3>
                                    </div>
                                    <button onClick={() => setActiveSection('2fa')}>
                                        <ChevronRight size={20} className='text-gray-400' />
                                    </button>
                                </div>
                            </div>
                            <div className="block py-2">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-gray-400">Devices you're logged in</h3>
                                    </div>
                                    <button onClick={() => setActiveSection('devices')}>
                                        <ChevronRight size={20} className='text-gray-400' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {(activeSection !== '2fa') && (
                    <div className="flex justify-center mt-6">
                        <Image
                            src="/profile/shield with lock.png"
                            alt="Security Shield"
                            width={200}
                            height={200}
                            className="rounded-md"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SecurityCard;
