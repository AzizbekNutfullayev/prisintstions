import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const slides = [
    {
      title: "Daisyworld: Modelling a Sustainable Planet",
      content: `Welcome to our project presentation!

Daisyworld is a digital model that simulates how living systems — like daisies — help maintain the balance of temperature and sunlight on a planet.

Our goal was to understand how this balance works and what happens if new environmental factors are introduced.`,
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png",
      layout: "center",
    },
    {
      title: "The Balance of Daisyworld",
      content: `Daisyworld contains two main types of daisies:

🌼 White daisies — reflect sunlight → cooling effect  
⚫ Black daisies — absorb sunlight → warming effect  

If the planet becomes too cold → black daisies grow more (warming it).  
If it becomes too hot → white daisies spread (cooling it).

❗ Without this natural feedback, the planet could become either frozen or overheated.`,
      image: "https://cdn-icons-png.flaticon.com/512/2909/2909773.png",
      layout: "right",
    },
    {
      title: "New Environmental Factors We Added",
      content: `We introduced 4 new factors to study how balance changes:

☁️ Clouds — block sunlight. Too many clouds make the planet cooler, daisies may stop growing.  
🌧️ Rain — increases daisy growth but too much rain lowers soil temperature.  
🏭 Pollution — reduces sunlight and damages plant health; balance becomes unstable.  
☀️ Sunlight — the key source of energy; if sunlight changes, all systems react.

💡 These factors helped us understand how small environmental changes cause large effects.`,
      image: "https://cdn-icons-png.flaticon.com/512/1039/1039328.png",
      layout: "left",
    },
    {
      title: "What Happens Without Balance?",
      content: `If natural feedback is broken or any factor becomes extreme:

❌ Too much sunlight — all daisies die, temperature rises uncontrollably.  
❌ Too much pollution — plants can't photosynthesize, planet cools too fast.  
❌ No rain — daisy growth stops, less sunlight reflection, imbalance grows.

🌿 Sustainability means keeping all these forces in balance over time.`,
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149700.png",
      layout: "right",
    },
    {
      title: "Team Roles and Our Work",
      content: `Each team member had a professional role:

👨‍🔬 Ecologist — Researched Daisyworld as a living system  
💻 Programmer — Built the simulation logic  
📊 Data Analyst — Collected and visualized temperature and growth data  

Teamwork showed how digital models can explain real sustainability principles.`,
      image: "https://cdn-icons-png.flaticon.com/512/3471/3471347.png",
      layout: "left",
    },
    {
      title: "Our Key Learnings",
      content: `✅ Balance is dynamic — it changes constantly  
✅ Small environmental changes can cause big reactions  
✅ Interdisciplinary teamwork improves understanding  
✅ Technology helps simulate and protect natural systems  

🌎 The Daisyworld model teaches us that even digital simulations can help us protect the planet through sustainable thinking.

Thank you for listening! 🌱`,
      image: "https://cdn-icons-png.flaticon.com/512/189/189001.png",
      layout: "center",
    },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <div className="presentation-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={`slide ${slide.layout}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="slide-content-box">
            <h1 className="slide-title">{slide.title}</h1>
            {slide.subtitle && (
              <p className="slide-subtitle">{slide.subtitle}</p>
            )}
            <pre className="slide-text">{slide.content}</pre>
          </div>

          {slide.image && (
            <motion.img
              src={slide.image}
              alt="slide visual"
              className="slide-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="controls">
        <button onClick={prev}>← Previous</button>
        <span>
          {index + 1} / {slides.length}
        </span>
        <button onClick={next}>Next →</button>
      </div>


    </div>
  );
}
