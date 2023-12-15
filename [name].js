import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

const inter = Inter({ subsets: ["latin"] });

const tags = {
  Best: [
    "#art",
    "#fitness",
    "#yoga",
    "#food",
    "#movie",
    "#art",
    "#fitness",
    "#yoga",
    "#food",
    "#movie",
    "#art",
    "#fitness",
    "#yoga",
    "#food",
    "#movie",
    "#art",
    "#fitness",
    "#yoga",
    "#food",
    "#movie",
  ],
};

const Tag = () => {
  const router = useRouter();
  const { name } = router.query;
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [choice, setChoice] = useState("Best");
  // const [initial, setInitial] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // useEffect(() => {
  //   if (initial) {
  //     const choices = ["Popular", "Trending"];
  //     let newHashtags = {};

  //     for (const choice of choices) {
  //       const shuffledTags = shuffleArray(hashtags["Best"]);
  //       newHashtags[choice] = shuffledTags;
  //       console.log(newHashtags);
  //     }
  //     setHashtags((previous) => ({
  //       ...previous,
  //       ...newHashtags,
  //     }));
  //   }
  // }, [initial]);

  useEffect(() => {
    if (!!name) {
      fetchHastags();
      // setHashtags(tags);
      // setInitial(true);
    }
  }, [name]);

  const fetchHastags = async () => {
    setLoading(true);
    await axios
      .get("/api/fetch_hashtags", { params: { name } })
      .then((res) => {
        console.log(res.data.hashtagsWithoutNumbers);
        setHashtags(res.data.hashtagsWithoutNumbers);
        setLoading(false);
      })
      .catch((err) => {});
    setLoading(false);
  };

  return (
    <>
      <div
        className={`bg-white text-black h-screen ${inter.className} flex flex-col overflow-auto`}
      >
        <Navbar />
        <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 bg-white mt-1 w-full xl:w-[1200px] mx-auto">
          <div className=" uppercase text-blue-500 font-semibold mt-4">
            instagram hashtags / {name}
          </div>
          <div className=" mt-6 font-semibold text-2xl">
            Hashtags for #{name}
          </div>
          <div className=" mt-2 text-base">
            The popularity of Instagram hashtags associated with #{name} is
            gauged based on the average daily posts utilizing the hashtag.
          </div>
          <div className="w-full mt-6 font-semibold text-xl flex">
            Top 30 popular Hashtags for #{name}
            <div className="bg-gray-100 ml-auto rounded-2xl p-1">
              <button
                className={`px-3 rounded-full ${
                  choice === "Best" ? "bg-black text-white" : ""
                }`}
                onClick={() => setChoice("Best")}
              >
                Best
              </button>
              <button
                className={`px-3 rounded-full ${
                  choice === "Popular" ? "bg-black text-white" : ""
                }`}
                onClick={() => setChoice("Popular")}
              >
                Popular
              </button>
              <button
                className={`px-3 rounded-full ${
                  choice === "Trending" ? "bg-black text-white" : ""
                }`}
                onClick={() => setChoice("Trending")}
              >
                Trending
              </button>
            </div>
          </div>
          <div class="w-full bg-white border border-gray-200 rounded-lg shadow mt-8">
            <div class="border-t border-gray-200 ">
              {loading ? (
                <div role="status" className=" flex justify-center my-4">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div class="bg-white rounded-lg">
                  <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                    {hashtags[choice]?.map((tag, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                        //   style={{ backgroundColor: getRandomColor(index) }}
                      >
                        {tag}
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Tag;
