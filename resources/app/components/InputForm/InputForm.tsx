import { Pencil } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import axios from "axios";
import { Testimony } from "@/pages/Home";
import { getApiUrl } from "@/lib/constants";

export default function InputForm() {
  const [ownTestimony, setOwnTestimony] = useState<Testimony | null>(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTestimony = async () => {
      const token = Cookies.get("token");
      if (!token) return;

      try {
        const response = await axios.get(`${getApiUrl()}/getuser-testimonies`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data && response.data.length > 0) {
          setOwnTestimony(response.data[0]);
          setContent(response.data[0].content);
        }
      } catch (error) {
        console.error("Error fetching testimony:", error);
      }
    };

    fetchTestimony();
  }, []);

  const handleSave = async () => {
    const token = Cookies.get("token");
    if (!token || !content) return;

    setIsLoading(true);

    try {
      if (ownTestimony) {
        await axios.put(
          `${getApiUrl()}/edit-testimony`,
          { content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post(
          `${getApiUrl()}/create-testimony`,
          { content },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      const response = await axios.get(`${getApiUrl()}/getuser-testimonies`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && response.data.length > 0) {
        setOwnTestimony(response.data[0]);
        setContent(response.data[0].content);
      }
    } catch (error) {
      console.error("Error saving testimony:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center font-inter bg-white p-8 h-screen snap-center">
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
              <Textarea
                className="h-[200px] bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700 text-justify mb-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button
                className="mt-4 px-4 py-2 bg-[#7DE163] rounded-lg self-start flex items-center hover:bg-[#68CF4E]"
                aria-label="Edit"
                onClick={handleSave}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-white"></div>
                ) : (
                  <>
                    <Pencil className="inline-block h-4 w-4 mr-2" />{" "}
                    {ownTestimony ? "Ubah" : "Simpan"}
                  </>
                )}
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-gray-100 p-6 flex flex-col h-full">
              <p className="text-gray-700 text-justify mb-4">
                {isLoading ? "..." : ownTestimony ? ownTestimony.ai_feedback : "Belum ada tanggapan AI."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
