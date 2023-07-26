const apiKey = process.env.OpenAI_API_KEY;
const url = "https://api.openai.com/v1/completions";

export default async function handler(req, res) {
  try {
    // get selectedSequenceOptions from the request body
    const { selectedSequenceOptions } = req.body;

    // create the prompt based on selectedSequenceOptions
    const prompt = `Please create a bold and dynamic yoga sequence with a concise and attention-grabbing first sentence. The sequence should include the following:

    1. A captivating first sentence (maximum 7 words) that highlights the personalized preferences chosen for the sequence, such as ${JSON.stringify(
      selectedSequenceOptions
    )}. Please do not include the word 'Title' or 'Headline' in the first sentence. For example, a suitable first sentence could be "Energizing Morning Flow", "Chakra-Focused Vinyasa Flow" or "Balancing Yin Yoga Sequence."

    2. Leave a line break between the first and this part. Begin with a fun and yogic style introduction to the personalized preferences chosen for the sequence, which can be described as ${JSON.stringify(
      selectedSequenceOptions
    )}. Please do not label this section as 'Introduction'.
    

3. Include one or two breathing exercises, each accompanied by a brief (maximum 1 sentence) description of the personalized preferences chosen for the sequence, such as ${JSON.stringify(
      selectedSequenceOptions
    )}. For instance, you could include a breathing exercise that focuses on deep relaxation or one that promotes mental clarity.

4. The main section of the sequence should consist of eight to ten specific asanas. Please provide the name of each asana in both English and Sanskrit (romanized, without Sanskrit letters), along with a short (maximum 1 sentence) explanation of the benefits of each pose. For example, you could include poses like Downward-Facing Dog (Adho Mukha Svanasana) to stretch and strengthen the entire body or Warrior II (Virabhadrasana II) to improve balance and focus.

5. Conclude the sequence with an inspiring closing remark that leaves the practitioner feeling motivated and uplifted.

Please remember to add numbers only to the breathing exercises and asanas, excluding any other parts of the sequence. Also, avoid including the word 'Title' in the heading.`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt,
        max_tokens: 2048,
      }),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
