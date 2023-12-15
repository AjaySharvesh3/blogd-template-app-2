import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const Art = () => {
  const [choice, setChoice] = useState("Best");
  const [hashtags, setHashtags] = useState([]);

  return (
    <>
      <div
        className={`bg-white text-black h-screen ${inter.className} flex flex-col overflow-auto`}
      >
        <Navbar />
        <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 bg-white mt-1 w-full xl:w-[1200px] mx-auto">
          <div className=" uppercase text-blue-500 font-semibold mt-4">
            instagram hashtags / art
          </div>
          <div className=" mt-6 font-semibold text-2xl">
            Hashtags for #art
          </div>
          <div className=" mt-2 text-base">
            The popularity of Instagram hashtags associated with #art is
            gauged based on the average daily posts utilizing the hashtag.
          </div>
          <div className="w-full mt-6 font-semibold text-xl flex">
            Top 30 popular Hashtags for #art
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
              <div class="bg-white rounded-lg">
                <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                {choice === "Best" && (
                  <>
                  <div
                    key={0}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #art
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={1}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #fitness
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={2}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #yoga
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={3}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #food
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={4}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #movie
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={5}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #art
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={6}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #fitness
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={7}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #yoga
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={8}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #food
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={9}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #movie
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={10}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #art
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={11}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #fitness
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={12}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #yoga
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={13}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #food
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={14}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #movie
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={15}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #art
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={16}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #fitness
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={17}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #yoga
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={18}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #food
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>
<div
                    key={19}
                    className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                  >
                    #movie
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = `/hashtags/${tag.substring(1)}`;
                        router.push(url);
                      }}
                    />
                  </div>

                  </>
                    )}
                    {choice === "Popular" && (
                      <>
                      <div
                        key={0}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #fitness
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={1}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #yoga
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={2}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #food
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={3}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #movie
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={4}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #art
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={5}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #fitness
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={6}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #yoga
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={7}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #food
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={8}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #movie
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={9}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #art
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={10}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #fitness
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={11}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #yoga
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={12}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #food
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={13}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #movie
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={14}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #art
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={15}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #fitness
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={16}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #yoga
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={17}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #food
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={18}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #movie
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>
<div
                        key={19}
                        className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                      >
                        #art
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = `/hashtags/${tag.substring(1)}`;
                            router.push(url);
                          }}
                        />
                      </div>

                      </>
                        )}
                        {choice === "Trending" && (
                          <>
                          <div
                            key={0}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #yoga
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={1}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #food
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={2}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #movie
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={3}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #art
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={4}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #fitness
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={5}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #yoga
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={6}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #food
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={7}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #movie
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={8}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #art
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={9}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #fitness
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={10}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #yoga
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={11}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #food
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={12}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #movie
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={13}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #art
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={14}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #fitness
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={15}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #yoga
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={16}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #food
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={17}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #movie
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={18}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #art
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>
<div
                            key={19}
                            className={`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100`}
                          >
                            #fitness
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = `/hashtags/${tag.substring(1)}`;
                                router.push(url);
                              }}
                            />
                          </div>

                          </>
                            )}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Art;