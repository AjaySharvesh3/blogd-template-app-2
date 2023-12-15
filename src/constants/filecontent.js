const fileContent = (str, hashtags) => {
  return `import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });
const ${str.charAt(0).toUpperCase() + str.slice(1)} = () => {
  const [choice, setChoice] = useState("Best");
  const [hashtags, setHashtags] = useState([]);

  return (
    <>
      <div
        className={\`bg-white text-black h-screen \${inter.className} flex flex-col overflow-auto\`}
      >
        <Navbar />
        <div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 bg-white mt-1 w-full xl:w-[1200px] mx-auto">
          <div className=" uppercase text-blue-500 font-semibold mt-4">
            instagram hashtags / ${str}
          </div>
          <div className=" mt-6 font-semibold text-2xl">
            Hashtags for #${str}
          </div>
          <div className=" mt-2 text-base">
            The popularity of Instagram hashtags associated with #${str} is
            gauged based on the average daily posts utilizing the hashtag.
          </div>
          <div className="w-full mt-6 font-semibold text-xl flex">
            Top 30 popular Hashtags for #${str}
            <div className="bg-gray-100 ml-auto rounded-2xl p-1">
              <button
                className={\`px-3 rounded-full \${
                  choice === "Best" ? "bg-black text-white" : ""
                }\`}
                onClick={() => setChoice("Best")}
              >
                Best
              </button>
              <button
                className={\`px-3 rounded-full \${
                  choice === "Popular" ? "bg-black text-white" : ""
                }\`}
                onClick={() => setChoice("Popular")}
              >
                Popular
              </button>
              <button
                className={\`px-3 rounded-full \${
                  choice === "Trending" ? "bg-black text-white" : ""
                }\`}
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
                  ${hashtags["Best"]?.map(( tag, index ) => (
                  `<div
                    key={${index}}
                    className=\{\`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100\`}
                  >
                    ${tag}
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                      onClick={() => {
                        const url = \`/hashtags/\${tag.substring(1)}\`;
                        router.push(url);
                      }}
                    />
                  </div>\n`
                )).join("")}
                  </>
                    )}
                    {choice === "Popular" && (
                      <>
                      ${hashtags["Popular"]?.map(( tag, index ) => (
                      `<div
                        key={${index}}
                        className=\{\`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100\`}
                      >
                        ${tag}
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                          onClick={() => {
                            const url = \`/hashtags/\${tag.substring(1)}\`;
                            router.push(url);
                          }}
                        />
                      </div>\n`
                    )).join("")}
                      </>
                        )}
                        {choice === "Trending" && (
                          <>
                          ${hashtags["Trending"]?.map(( tag, index ) => (
                          `<div
                            key={${index}}
                            className=\{\`flex items-center justify-center py-2 px-4 rounded-md bg-gray-100\`}
                          >
                            ${tag}
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-xs ml-auto cursor-pointer hover:text-gray-500"
                              onClick={() => {
                                const url = \`/hashtags/\${tag.substring(1)}\`;
                                router.push(url);
                              }}
                            />
                          </div>\n`
                        )).join("")}
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

export default ${str.charAt(0).toUpperCase() + str.slice(1)};`;
};

export default fileContent;
