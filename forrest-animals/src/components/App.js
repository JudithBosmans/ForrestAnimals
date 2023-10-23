import React from "react";
import { motion } from "framer-motion";
import appStyles from "../styles/App.css";
import data from "./data.json";

const App = () => {
  return (
    <div>
      {data.map((card, index) => (
        <motion.div
          key={index}
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            id="containerAnimals"
            className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"
          >
            <div className=" relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                id={`title${index}`}
              >
                {card.title}
              </h2>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl mt-4"
                id={`subtitle${index}`}
              >
                {card.subtitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {card.text}
              </p>
              <img
                src={card.pic}
                alt={`${card.pic}`}
                className="mt-6 w-full max-h-80 rounded-md m-10"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default App;
