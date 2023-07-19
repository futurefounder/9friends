const apiKey = process.env.OpenAI_API_KEY;
const url = "https://api.openai.com/v1/completions";

export default async function handler(req, res) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Create a yoga sequence for beginners.",
      }),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
