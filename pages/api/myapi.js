const apiKey = process.env.OpenAI_API_KEY;
const url = "https://api.openai.com/v1/completions";

export default async function handler(req, res) {
  try {
    // get selectedSequenceOptions from the request body
    const { selectedSequenceOptions } = req.body;

    // create the prompt based on selectedSequenceOptions
    const prompt = `Create a **bold** and dynamic yoga sequence with a short, catchy title. This sequence should consist of:

    - A captivating headline (max 7 words), highlighting the personalized preferences that have been chosen for the sequence: ${JSON.stringify(
      selectedSequenceOptions
    )}, Note: Do not include the word 'Title' in the heading.. Example headline output 1: "Seasonal Power Flow". Example headline output 2: "Moon Inspired Advanced Chakra Flow".

    - A fun and yogic style introduction to  the personalized preferences that have been chosen for the sequence: ${JSON.stringify(
      selectedSequenceOptions
    )}.

    - Two to three Breathing exercises, with each exercise providing a brief (maximum 1 sentence) description of the personalized preferences that have been chosen for the sequence: ${JSON.stringify(
      selectedSequenceOptions
    )}.
    
    - The main section should include a eight to ten specific asanas, with each asana's name provided in both English and Sanskrit (romanized, no sanskrit letters) and a short (maximum 1 sentence) explanation of the benefit/s of the pose. 
    
    - The sequence should end with an inspiring closing inspiring remark. 
    
    Only add numbers to the Breathing exercises and Asanas, not to any other parts. Do not include the word 'Title' in the heading.
    `;

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
