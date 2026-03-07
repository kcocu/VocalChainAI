import { useState, useEffect } from "react";
import ChainSelector from "./components/ChainSelector";
import ChainResult from "./components/ChainResult";
import ExportPanel from "./components/ExportPanel";
import CustomBuilder from "./components/CustomBuilder";
import ReferencePanel from "./components/ReferencePanel";
import CubaseGuide from "./components/CubaseGuide";
import AudioSimulator from "./components/AudioSimulator";
import { generateChain } from "./data/chains";

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default function App() {
  const [genre, setGenre] = useState("");
  const [vocalType, setVocalType] = useState("");
  const [mood, setMood] = useState("");
  const [chain, setChain] = useState(null);

  // Theme
  const [theme, setTheme] = useLocalStorage("vocalchain-theme", "dark");

  // History & Favorites
  const [history, setHistory] = useLocalStorage("vocalchain-history", []);
  const [favorites, setFavorites] = useLocalStorage("vocalchain-favorites", []);

  // Current chain key for favorites
  const chainKey = genre && vocalType && mood ? `${genre}|${vocalType}|${mood}` : null;
  const isFavorite = chainKey ? favorites.some((f) => f.key === chainKey) : false;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = (field, value) => {
    if (field === "genre") setGenre(value);
    else if (field === "vocalType") setVocalType(value);
    else if (field === "mood") setMood(value);
  };

  const handleGenerate = () => {
    const result = generateChain(genre, vocalType, mood);
    setChain(result);

    // Add to history (max 10, no duplicates at top)
    const entry = { key: `${genre}|${vocalType}|${mood}`, genre, vocalType, mood, timestamp: Date.now() };
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.key !== entry.key);
      return [entry, ...filtered].slice(0, 10);
    });
  };

  const handleToggleFavorite = () => {
    if (!chainKey) return;
    if (isFavorite) {
      setFavorites((prev) => prev.filter((f) => f.key !== chainKey));
    } else {
      setFavorites((prev) => [...prev, { key: chainKey, genre, vocalType, mood }]);
    }
  };

  const handleLoadPreset = (entry) => {
    setGenre(entry.genre);
    setVocalType(entry.vocalType);
    setMood(entry.mood);
    const result = generateChain(entry.genre, entry.vocalType, entry.mood);
    setChain(result);
  };

  const labelMap = {
    pop: "Pop", rnb: "R&B", hiphop: "Hip-Hop", rock: "Rock", ballad: "Ballad", edm: "EDM", jazz: "Jazz",
    female: "Female", male: "Male",
    bright: "Bright", warm: "Warm", dark: "Dark",
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <h1>VocalChainAI</h1>
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "\u2600" : "\u263E"}
          </button>
        </div>
        <p>Vocal processing chain generator for Cubase</p>
      </header>

      <ChainSelector
        genre={genre}
        vocalType={vocalType}
        mood={mood}
        onChange={handleChange}
        onGenerate={handleGenerate}
      />

      {/* Favorites */}
      {favorites.length > 0 && (
        <div className="presets-panel">
          <h3>Favorites</h3>
          <div className="preset-list">
            {favorites.map((f) => (
              <button key={f.key} className="preset-btn fav" onClick={() => handleLoadPreset(f)}>
                <span className="preset-star">{"\u2605"}</span>
                {labelMap[f.genre]} / {labelMap[f.vocalType]} / {labelMap[f.mood]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="presets-panel">
          <h3>Recent</h3>
          <div className="preset-list">
            {history.map((h) => (
              <button key={h.key} className="preset-btn" onClick={() => handleLoadPreset(h)}>
                {labelMap[h.genre]} / {labelMap[h.vocalType]} / {labelMap[h.mood]}
              </button>
            ))}
          </div>
        </div>
      )}

      <CustomBuilder onApply={(customChain) => setChain(customChain)} />

      <ReferencePanel genre={genre} vocalType={vocalType} mood={mood} />

      <ChainResult
        chain={chain}
        isFavorite={isFavorite}
        onToggleFavorite={chain ? handleToggleFavorite : null}
      />

      <AudioSimulator chain={chain} />

      <ExportPanel chain={chain} />

      <CubaseGuide />

      <footer className="site-footer">
        <p>VocalChainAI &mdash; EQ, Compressor, Delay, Reverb settings for vocal production</p>
      </footer>
    </div>
  );
}
