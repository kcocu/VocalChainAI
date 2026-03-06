import { useState } from "react";
import ChainSelector from "./components/ChainSelector";
import ChainResult from "./components/ChainResult";
import { generateChain } from "./data/chains";

export default function App() {
  const [genre, setGenre] = useState("");
  const [vocalType, setVocalType] = useState("");
  const [mood, setMood] = useState("");
  const [chain, setChain] = useState(null);

  const handleChange = (field, value) => {
    if (field === "genre") setGenre(value);
    else if (field === "vocalType") setVocalType(value);
    else if (field === "mood") setMood(value);
  };

  const handleGenerate = () => {
    const result = generateChain(genre, vocalType, mood);
    setChain(result);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>VocalChainAI</h1>
        <p>Vocal processing chain generator for Cubase</p>
      </header>

      <ChainSelector
        genre={genre}
        vocalType={vocalType}
        mood={mood}
        onChange={handleChange}
        onGenerate={handleGenerate}
      />

      <ChainResult chain={chain} />

      <footer className="site-footer">
        <p>VocalChainAI &mdash; EQ, Compressor, Delay, Reverb settings for vocal production</p>
      </footer>
    </div>
  );
}
