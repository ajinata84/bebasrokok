export const slideUp = {
    initial: {
      y: "0",
    },
    exit: {
      y: "-200vh",
      transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
    },
  };
  
  export const opacity = {
    initial: {
      opacity: 0,
    },
  
    enter: {
      opacity: 0.75,
  
      transition: { duration: 1, delay: 0.1 },
    },
  };
  