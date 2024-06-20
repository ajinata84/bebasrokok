import { Pencil } from "lucide-react";
import React from "react";
import { Textarea } from "../ui/textarea";
import Cookies from "js-cookie"

export default function InputForm() {


  return (
    <div className=" flex flex-col items-center justify-center font-inter bg-white p-8 h-screen snap-center ">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col md:ml-8">
            <h2 className="text-5xl font-semibold">Pengalaman</h2>
            <h2 className="text-5xl font-semibold">anda ke kami</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-end">
            <h2 className="text-5xl font-semibold md:ml-8">Tanggapan AI</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="rounded-lg bg-gray-100 p-6 flex flex-col h-full">
              <Textarea className="h-[200px] bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 text-justify mb-4" />
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg self-start flex items-center"
                style={{ backgroundColor: "#7DE163" }}
                aria-label="Edit"
              >
                <Pencil className="inline-block h-4 w-4 mr-2" /> ubah
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-gray-100 p-6 flex flex-col h-full">
              <p className="text-gray-700 text-justify mb-4">
                Kisah Anda sungguh luar biasa! Berhenti merokok setelah serangan
                jantung dan meraih hidup lebih sehat adalah pencapaian luar
                biasa. Tekad dan komitmen Anda patut diacungi jempol. Testimoni
                Anda memotivasi banyak orang untuk mengikuti jejak Anda.
                Berhenti merokok memang tidak mudah, tapi manfaatnya sangat
                besar. Mari bersama ciptakan generasi bebas asap rokok!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
