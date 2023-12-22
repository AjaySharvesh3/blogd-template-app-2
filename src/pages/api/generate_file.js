// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const path = require("path");
const fs = require("fs/promises");
const fileContent = require("../../constants/filecontent").default;

export default async function handler(req, res) {
  try {
    const str ="art";
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
        Popular: [
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
            "#art",
          ],
          Trending: [
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
            "#art",
            "#fitness",
          ],
      };
    const outputDirectory = path.join(__dirname, "../../../../src/pages/articles");
    const filePath = path.join(outputDirectory, "generated.js");
    // console.log(fileContent())
    await fs.writeFile(filePath, fileContent(str, tags));

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
