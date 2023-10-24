import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import appStyles from "../styles/App.css";

const models = [
  {
    title: "Cat",
    subTitle: "Felix domesticus",
    text: "Blablabla",
    pic: "https://i.ibb.co/Bwws9KP/sub-bts-one-shots-who-s-your-daddy-PJM.gif",
    url: "./models/cat.glb",
  },
  {
    title: "Butterfly",
    subTitle: "Anglais Urticae",
    text: "Blablabla",
    pic: "https://i.ibb.co/gtfLwGr/A-garota-das-borboletas.gif",
    url: "./models/Butterfly.glb",
  },
];

const Test = () => {
  return (
    <div>
      {models.map((card, index) => (
        <Link to={`/Three?model=${card.title}`} key={index}>
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div>
              <div
                id="containerAnimals"
                className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"
              >
                <div className=" relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="absolute h-[90-rem] w-[100rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-ml-100 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                  >
                    <circle
                      cx={512}
                      cy={512}
                      r={512}
                      fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                      fillOpacity="0.7"
                    />
                    <defs>
                      <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
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
                      {card.subTitle}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-500">
                      {card.text}
                    </p>
                    <img
                      src={card.pic}
                      alt={`${models.pic}`}
                      className="absolute right-10 top-2 w-[35rem] max-w-none rounded-md "
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Test;
