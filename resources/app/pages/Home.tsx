import Calculator from "@/components/Calculator/Calculator";
import CheckIn from "@/components/CheckIn/CheckIn";
import InputForm from "@/components/InputForm/InputForm";
import Streak from "@/components/Streak/Streak";


export default function Home() {
  const headlineImg =
    "https://images.unsplash.com/photo-1649430332289-65ee9fa56a4d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cancerImg =
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/11/12/Incoming/Pictures/1285192_Wallpaper2.jpg";
  const hashImage =
    "https://asset.kompas.com/crops/9RASIC4HzJfFfWPwy4hVGOxdKc8=/0x0:1000x667/750x500/data/photo/2023/08/16/64dc796c4b5b5.jpg";

  const articles = [
    {
      title: "Bebaskan Diri Dari Jeratan Nikotin: Tips Ampuh Berhenti Merokok",
      imageUrl:
        "https://awsimages.detik.net.id/customthumb/2013/09/27/763/164414_rokoktengkorakts.jpg?w=600&q=90",
    },
    {
      title: "Menuju Hidup Sehat: Panduan Praktis Berhenti Merokok",
      imageUrl:
        "https://asset.kompas.com/crops/O-wszpDvIahU8n7huQkdkFpd0AI=/0x0:996x664/750x500/data/photo/2019/09/06/5d71c0867a6a4.jpg",
    },
    {
      title: "Ubah Kebiasaan, Ubah Hidup: Rahasia Sukses Berhenti Merokok",
      imageUrl:
        "https://surakarta.go.id/wp-content/uploads/2023/08/Screenshot_28.jpg",
    },
    {
      title:
        "Respirasi Segar, Masa Depan Cerah: Tantangan dan Kemenangan Berhenti Merokok",
      imageUrl:
        "https://www.kemenkopmk.go.id/sites/default/files/articles/2021-01/rokok-ilustrasi.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-[1366px] m-auto">
      {/* MAIN COLUMNS */}
      <CheckIn />
      <InputForm />
      <Streak />
      <div className="flex flex-row w-full">
        
        <div className="w-[60%] h-[100vh] flex items-center py-20 justify-center sticky top-0">
          <div
            className=" h-full flex items-center  w-[80%] text-7xl p-20 text-center font-semibold italic text-white object-cover platypi"
            style={{
                backgroundImage: `url(${headlineImg})`,
                backgroundSize: "cover",
                }}
          >
            Ditch the Cigarettes, Gain Your Life Back
          </div>
        </div>
        <div className="w-[40%]  flex flex-row gap-6 py-20 text-center text-2xl">
          <div className="flex flex-col w-full gap-6">
            <div className="platypi bg-[#ffa333] p-4">
              Over <br />
              <span className="text-6xl"> 4,000 </span>
              <br />
              chemicals are in cigarette smoke and more than <br />
              <span className="text-4xl"> 40 </span> <br /> are known to cause
              cancer
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
              Smoking can actually reduce your sense of smell and taste. Imagine
              a world where your favorite foods taste bland – not exactly a
              delicious consequence.
              <br />
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="platypi bg-[#f3f6f5] p-4">
              Smoking is the leading cause of preventable death in the United
              States, responsible for <br />
              <span className="text-5xl"> 1 in 5 deaths </span>each year
              <br />
            </div>
            <div className="platypi bg-[#f3f6f5] p-4">
              Smoking messes with your body's ability to use oxygen, making even
              moderate exercise feel like a marathon. No more excuses, but also
              no more easy workouts.
            </div>
            <div className="platypi bg-[#f3f6f5] p-4">
              The nicotine in cigarettes constricts blood vessels, reducing
              blood flow. This can lead to a pale, yellowish complexion – not
              exactly a look most people strive for.
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className="w-full ">
        <h1 className="text-4xl text-center my-8">Testimonials</h1>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-full gap-6">
            <div className="p-6 bg-[#f3f6f5]">
              <span className="text-2xl ">Ibu Ani, 45 tahun</span>
              <p>
                "Saya merokok selama 20 tahun dan sudah berkali-kali mencoba
                berhenti, tapi selalu gagal. Saya sering batuk dan sesak napas,
                dan dokter bilang kalau saya berisiko terkena penyakit jantung.
                Akhirnya, saya memutuskan untuk mengikuti program berhenti
                merokok di klinik dan menggunakan terapi pengganti nikotin.
                Awalnya, memang sulit untuk melawan keinginan untuk merokok,
                tapi dengan dukungan dari keluarga dan teman-teman, saya
                berhasil. Sekarang, saya sudah bebas dari rokok selama 3 tahun
                dan merasa jauh lebih sehat dan bahagia."
              </p>
            </div>
            <div className="p-6 bg-[#f3f6f5] gap-6">
              <span className="text-2xl ">Pak Budi, 50 tahun</span>
              <p>
                "Saya dulunya perokok berat, hampir 2 bungkus sehari. Saya tahu
                merokok itu bahaya, tapi saya sulit untuk berhenti. Suatu hari,
                saya melihat anak saya batuk-batuk dan saya merasa bersalah
                karena telah menjadi contoh yang buruk baginya. Saya bergabung
                dengan komunitas online untuk para perokok yang ingin berhenti
                dan mendapat banyak dukungan dan motivasi dari mereka. Sekarang,
                saya sudah bebas dari rokok selama 2 tahun dan saya bangga
                dengan diri saya sendiri."
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="p-6 bg-[#f3f6f5]">
              <span className="text-2xl ">Mas Andi, 40 tahun</span>
              <p>
                "Saya merokok selama 15 tahun dan akhirnya berhasil berhenti 1
                tahun yang lalu. Awalnya memang sulit, tapi dengan tekad dan
                dukungan dari keluarga, saya bisa melewatinya. Sekarang, saya
                lebih sehat dan bahagia tanpa rokok."
              </p>
            </div>
            <div className="p-6 bg-[#f3f6f5]">
              <span className="text-2xl ">Mas Dimas, 25 tahun</span>
              <p>
                "Saya merokok selama 5 tahun dan mulai merasa menyesal karena
                telah memulai kebiasaan ini. Saya sering sakit dan stamina saya
                menurun. Saya ingin hidup lebih sehat dan panjang umur untuk
                keluarga saya. Akhirnya, saya memutuskan untuk berhenti merokok
                dengan menggunakan aplikasi berhenti merokok di smartphone saya.
                Aplikasi ini membantu saya untuk melacak kemajuan saya dan
                memberikan tips dan motivasi untuk tetap berhenti. Sekarang,
                saya sudah bebas dari rokok selama 6 bulan dan saya merasa jauh
                lebih sehat dan energik."
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6">
            <div className="p-6 bg-[#f3f6f5] ">
              <span className="text-2xl ">Mbak Rini, 35 tahun</span>
              <p>
                "Saya merokok selama 10 tahun dan sudah berkali-kali mencoba
                berhenti, tapi selalu gagal. Saya sering batuk dan sesak napas,
                dan dokter bilang kalau saya berisiko terkena penyakit jantung.
                Akhirnya, saya memutuskan untuk mengikuti program berhenti
                merokok di klinik dan menggunakan terapi pengganti nikotin.
                Awalnya, memang sulit untuk melawan keinginan untuk merokok,
                tapi dengan dukungan dari keluarga dan teman-teman, saya
                berhasil. Sekarang, saya sudah bebas dari rokok selama 5 tahun
                dan merasa jauh lebih sehat dan bahagia. Saya bersyukur karena
                telah mengambil keputusan untuk berhenti merokok dan saya ingin
                mendorong semua orang yang masih merokok untuk segera berhenti.
                Merokok itu tidak baik untuk kesehatan dan hanya akan membawa
                dampak negatif dalam hidup Anda."
              </p>
            </div>
            <div className="p-6 bg-[#f3f6f5]">
              <span className="text-2xl ">Mbak Cici, 30 tahun</span>
              <p>
                "Saya mulai merokok saat masih remaja dan itu menjadi kebiasaan
                yang sulit untuk dihilangkan. Saya sering merasa cemas dan
                stres, dan merokok adalah cara saya untuk mengatasi hal itu.
                Tapi, saya tahu bahwa merokok itu tidak baik untuk kesehatan
                saya. Akhirnya, saya memutuskan untuk berhenti merokok dengan
                bantuan hipnoterapi. Hipnoterapi membantu saya untuk mengubah
                pola pikir dan kebiasaan saya. Sekarang, saya sudah bebas dari
                rokok selama 1 tahun dan saya merasa lebih tenang dan bahagia."
              </p>
            </div>
          </div>
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
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae
          numquam, quaerat illo voluptatibus nesciunt? Ipsum repudiandae non,
          fugit tempora esse, molestiae, quasi accusantium quis dolorem totam
          perspiciatis est atque quisquam dignissimos sint? Temporibus provident
          amet magni mollitia minus sint.
        </p>
        <div className="grid grid-cols-4 my-8 grid-flow-row gap-4">
          {articles.map((v, i) => (
            <div className="h-[350px] bg-[#f3f6f5] p-4 text-lg flex flex-col font-semibold" key={i}>
              <div
                className="h-[200px] mb-2"
                style={{
                  backgroundImage: `url(${v.imageUrl})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="line-clamp-3">{v.title}</span>
            </div>
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
      {/* CALCULATOR */}
      <div className="w-full my-8">
        <h1 className="text-4xl text-center my-8">Calculator</h1>
        <Calculator />
      </div>
    </main>
  );
}
