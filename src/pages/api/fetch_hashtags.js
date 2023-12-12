// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const OpenAIAPI = require("openai");

export default async function handler(req, res) {
  try {
    const { name } = req.query;

    const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
    const openai = new OpenAIAPI({ apiKey: apiKey });

    let prompt = "";
    if (!!name) {
      prompt =  `Generate top 30 currently trending Instagram hashtags for ${name}`;
    } else {
      prompt = ("Generate 30 common instagram hashtags");
    }

    if (!apiKey) {
      console.error("ACCESS_KEY is missing in the .env file.");
    }
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const hashtagsString = completion.choices[0].message.content;
    const hashtagsArray = hashtagsString
      .split("\n")
      .map((item) => item.trim().toLowerCase());
    const hashtagsWithoutNumbers = hashtagsArray
      .map((item) => {
        const hashtagMatch = item.match(/#(\S+)/);
        return hashtagMatch ? hashtagMatch[0] : null;
      })
      .filter(Boolean);

    res.status(200).json({ name, hashtagsWithoutNumbers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
