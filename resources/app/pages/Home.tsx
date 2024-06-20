import CheckIn from "@/components/CheckIn/CheckIn";
import InputForm from "@/components/InputForm/InputForm";
import Layout from "@/components/AppLayout/Layout";
import Streak from "@/components/Streak/Streak";
import ArticleRead from "@/components/ArticleRead/ArticleRead";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { getApiUrl } from "@/lib/constants";

interface Article {
  id: number;
  created_at: string;
  title: string;
  content: string;
  thumbnail: string;
}

export interface Testimony {
  id: number;
  created_at: string;
  user_id: number;
  content: string;
  ai_feedback: string;
  username: string;
  age: number;
}

interface AllTestimony {
  id: number;
  created_at: string;
  user_id: number;
  content: string;
  ai_feedback: string;
  username: string;
  age: number;
  max_streak: number;
}

export interface UserFetch {
  username: string;
  streak_count: number;
  check_in_dates: string[];
}

export default function Home() {
  const token = Cookies.get("token");

  const headlineImg =
    "https://images.unsplash.com/photo-1649430332289-65ee9fa56a4d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cancerImg =
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/11/12/Incoming/Pictures/1285192_Wallpaper2.jpg";
  const hashImage =
    "https://asset.kompas.com/crops/9RASIC4HzJfFfWPwy4hVGOxdKc8=/0x0:1000x667/750x500/data/photo/2023/08/16/64dc796c4b5b5.jpg";

  const [articles, setArticles] = useState<Article[]>([]);

  const [testimonies, setTestimonies] = useState<AllTestimony[]>([]);

  const [user, setUser] = useState<UserFetch>({
    username: "",
    check_in_dates: [""],
    streak_count: 0,
  });

  const fetchToken = {
    Authorization: "Bearer " + token,
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${getApiUrl()}/getstreak`, {
        headers: fetchToken,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetch:", error);
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${getApiUrl()}/viewarticles`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    const fetchTestimonies = async () => {
      try {
        const response = await axios.get(
          `${getApiUrl()}/viewtestimonies`
        );
        setTestimonies(response.data);
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    if (token) {
      fetchUserData();
    }

    fetchArticles();
    fetchTestimonies();
  }, [token]);

  return (
    <main className="">
      <Layout>
        {/* MAIN COLUMNS */}
        {token && (
          <>
            <CheckIn user={user} refetchUser={fetchUserData} />
            <InputForm />
            <Streak streak={user.check_in_dates} maxcount={user.streak_count} />
          </>
        )}
        <div className="snap-start">
          <div className="flex flex-row w-full">
            <div className="w-[50%] h-[100vh] flex items-center py-20 justify-center sticky top-0">
              <div
                className=" h-full  flex items-center  w-[90%] text-7xl p-20 text-center font-semibold italic text-white object-cover platypi"
                style={{
                  backgroundImage: `url(${headlineImg})`,
                  backgroundSize: "cover",
                }}
              >
                Ditch the Cigarettes, Gain Your Life Back
              </div>
            </div>
            <div className="w-[50%]  flex flex-row gap-6 py-20 text-center text-2xl">
              <div className="flex flex-col w-full gap-6">
                <div className="platypi bg-[#ffa333] p-4">
                  Over <br />
                  <span className="text-6xl"> 4,000 </span>
                  <br />
                  chemicals are in cigarette smoke and more than <br />
                  <span className="text-4xl"> 40 </span> <br /> are known to
                  cause cancer
                </div>
                <div className="platypi bg-[#f3f6f5] p-4">
                  <div
                    className="h-40 mb-2"
                    style={{
                      backgroundImage: `url(${cancerImg})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  Smokers' lungs retain over <br />
                  <span className="text-6xl"> 70% </span>
                  <br /> of the <br />
                  <span className="text-5xl"> tar and nicotine </span>
                  <br /> they inhale
                </div>
                <div className="platypi bg-[#f3f6f5] p-4">
                  Smoking can actually reduce your sense of smell and taste.
                  Imagine a world where your favorite foods taste bland – not
                  exactly a delicious consequence.
                  <br />
                </div>
              </div>
              <div className="flex flex-col w-full gap-6">
                <div className="platypi bg-[#f3f6f5] p-4">
                  Smoking is the leading cause of preventable death in the
                  United States, responsible for <br />
                  <span className="text-5xl"> 1 in 5 deaths </span>each year
                  <br />
                </div>
                <div className="platypi bg-[#f3f6f5] p-4">
                  Smoking messes with your body's ability to use oxygen, making
                  even moderate exercise feel like a marathon. No more excuses,
                  but also no more easy workouts.
                </div>
                <div className="platypi bg-[#f3f6f5] p-4">
                  The nicotine in cigarettes constricts blood vessels, reducing
                  blood flow. This can lead to a pale, yellowish complexion –
                  not exactly a look most people strive for.
                </div>
              </div>
            </div>
          </div>
          {/* TESTIMONIALS */}
          <div className="w-full ">
            <h1 className="text-4xl text-center my-8">Testimonials</h1>
            <div className="flex flex-row gap-6">
              <TooltipProvider>
                {testimonies.map((testimony, index) => (
                  <div key={index} className="flex flex-col w-full gap-6">
                    <div className="p-6 bg-[#f3f6f5] flex flex-col">
                      <div className="flex flex-row">
                        <span className="text-2xl">
                          {testimony.username}, {testimony.age} tahun
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button size={"icon"} variant={"link"}>
                              AI
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-80">
                            <p>{testimony.ai_feedback}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <span className="text-xl my-4">
                        Sudah tidak merokok sepanjang {testimony.max_streak}{" "}
                        hari
                      </span>
                      <p>{testimony.content}</p>
                    </div>
                  </div>
                ))}
              </TooltipProvider>
            </div>
          </div>
          {/* ARTICLES */}
          <div className="w-full my-8">
            <div
              className="h-[600px] mb-2 flex items-end"
              style={{
                backgroundImage: `url(${hashImage})`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-20 py-10 bg-white text-6xl  font-bold rounded-tr-2xl text-red-800">
                <span>#MerokokMembunuhmu</span>
              </div>
            </div>
            <p className="text-3xl">
              Setiap rokok yang Anda hisap, adalah detik berharga yang hilang
              dari hidup Anda. Berhenti sekarang dan raih masa depan yang lebih
              sehat.
            </p>
            <div className="grid grid-cols-4 my-8 grid-flow-row gap-4">
              {articles.map((v, i) => (
                <ArticleRead
                  key={`ar${i}`}
                  article={{
                    imageUrl: v.thumbnail,
                    title: v.title,
                    content: v.content,
                  }}
                />
              ))}
            </div>
          </div>
          {/* STATISTICS */}
          <div className="w-full flex gap-6 flex-col">
            <h1 className="text-4xl text-center my-8">Statistics</h1>
            <iframe
              src="https://ourworldindata.org/grapher/number-of-deaths-by-risk-factor?tab=chart"
              className="w-full h-[600px]"
              loading="lazy"
              allow="web-share; clipboard-write"
            ></iframe>
            <iframe
              src="https://ourworldindata.org/grapher/share-deaths-smoking?tab=map"
              className="w-full h-[600px]"
              loading="lazy"
              allow="web-share; clipboard-write"
            ></iframe>
          </div>
        </div>
      </Layout>
    </main>
  );
}
