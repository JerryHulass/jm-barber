import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Shuffle = () => {
  // Modular: use numbers for positions
  const [order, setOrder] = useState(["first", "second", "third", "fourth"]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  // Card data array for modularity
  const cards = [
    {
      imgUrl: "/images/scissors.svg",
      title: "FULL HAIRCUT WITHOUT SHAVE",
      description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem."
    },
    {
      imgUrl: "/images/razor.svg",
      title: "FULL HAIRCUT WITH SHAVE",
      description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem."
    },
    {
      imgUrl: "/images/facial.svg",
      title: "KIDS CUT",
      description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem."
    },
    {
      imgUrl: "/images/beard.svg",
      title: "SHAVE",
      description: "Duis porta, ligula rhoncus euismod pretium, nisl tellus eleifend odio, luctus viverra sem."
    }
  ];

  return (
    <div className="grid place-content-center overflow-hidden px-2 py-8 text-slate-50">
      <div className="relative mx-auto w-[90vw] h-[120vw] min-h-[320px] max-w-xs max-h-[400px] sm:w-[250px] sm:h-[350px] md:-ml-[175px]">
        {cards.map((card, idx) => (
          <Card
            key={card.title}
            imgUrl={card.imgUrl}
            title={card.title}
            description={card.description}
            handleShuffle={handleShuffle}
            position={order[idx]}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ handleShuffle, title, position, imgUrl, description }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;
    if (diff > 150) {
      handleShuffle();
    }
    mousePosRef.current = 0;
  };

  // Modular position logic for 4 cards
  let x, rotateZ, zIndex;
  switch (position) {
    case "first":
      x = "0%";
      rotateZ = "-6deg";
      zIndex = 3;
      break;
    case "second":
      x = "22%";
      rotateZ = "-2deg";
      zIndex = 2;
      break;
    case "third":
      x = "44%";
      rotateZ = "2deg";
      zIndex = 1;
      break;
    case "fourth":
      x = "66%";
      rotateZ = "6deg";
      zIndex = 0;
      break;
    default:
      x = "0%";
      rotateZ = "0deg";
      zIndex = 0;
  }

  const draggable = position === "first";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid w-[90vw] h-[120vw] min-h-[320px] max-w-xs max-h-[400px] sm:w-[250px] sm:h-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-[#E9C664] bg-slate-800/20 p-4 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${title}`}
        className="pointer-events-none mx-auto w-20 h-20 sm:w-24 sm:h-24"
      />
      <span className="text-center text-xl text-white" style={{ fontFamily: "Abril Fatface, serif" }}>
        {title}
      </span>
      <span className="text-center text-sm font-medium text-white" style={{ fontFamily: "Inter, serif" }}>
        {description}
      </span>
    </motion.div>
  );
};

export default Shuffle;