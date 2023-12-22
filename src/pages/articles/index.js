import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const Hashtags = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [hashtags, setHashtags] = useState([]);
  const tags = [
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
  ];

  useEffect(() => {
    // fetchHastags();
    setHashtags(tags)
  }, []);

  const fetchHastags = async () => {
    setLoading(true)
    await axios
      .get("/api/fetch_hashtags")
      .then((res) => {
        console.log(res.data.hashtagsWithoutNumbers);
        setHashtags([...res.data.hashtagsWithoutNumbers]);
        setLoading(false)
      })
      .catch((err) => {});
      setLoading(false)
  };

  const getRandomColor = (index) => {
    const colors = ["#ECFFFF", "#FFEEEE", "#E4FFEC", "#EEF5FF", "#FFF2D0"];
    return colors[index % colors.length];
  };

  return (
    <>
      <div
        className={`bg-white text-black h-screen ${inter.className} flex flex-col overflow-auto`}
      >
        <Navbar />

        <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 w-full xl:w-[1200px] mx-auto">
          <form class="md:w-6/12 w-full mx-auto pt-4">
            <label
              for="default-search"
              class="mb-2 text-xs font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Hashtags..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2"
                onClick={(event) => {
                  event.preventDefault();
                  const url = `/hashtags/${searchText}`;
                  router.push(url);
                }}
              >
                Search
              </button>
            </div>
          </form>

          <div class="w-full bg-white border border-gray-200 rounded-lg shadow mt-8">
            <div class="border-t border-gray-200 w-full">
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
                    {hashtags.map((tag, index) => (
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

export default Hashtags;
