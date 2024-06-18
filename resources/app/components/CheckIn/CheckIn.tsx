import React from 'react';

export default function CheckIn() {
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="text-left flex items-start">
        <div className="mr-8">
          <h1 className="text-5xl font-bold mb-4">
            Hai. <span className="text-black font-normal">Prash Trisula Ajinata</span>
          </h1>
          <h2 className="text-5xl mb-6">Apakah anda <span className="text-red-500">merokok</span> hari ini?</h2>
          <p className="text-gray-500">Anda sudah tidak merokok selama <span className="font-bold">10</span> hari berturut turut</p>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="bg-green-400 text-black font-medium py-4 px-16 rounded-md text-2xl">Tidak</button>
          <button className="bg-gray-200 text-black font-medium py-4 px-16 rounded-md text-2xl">Iya</button>
        </div>
      </div>
    </div>
  );
}
