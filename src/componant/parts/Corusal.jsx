import React, { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/500x300?text=Image+1",
    "https://via.placeholder.com/500x300?text=Image+2",
    "https://via.placeholder.com/500x300?text=Image+3",
    "https://via.placeholder.com/500x300?text=Image+4",
    "https://via.placeholder.com/500x300?text=Image+5",
  ];

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <Box position="relative">
      <Flex
        overflowX="hidden"
        scrollSnapType="x mandatory"
        WebkitOverflowScrolling="touch"
        scrollBehavior="smooth"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            flexShrink={0}
            width="100%"
            scrollSnapAlign="start"
            opacity={index === activeIndex ? 1 : 0.6}
            transition="opacity 0.5s ease-in-out"
          >
            <img src={image} alt="" />
          </Box>
        ))}
      </Flex>
      <Button
        position="absolute"
        top="50%"
        left="4"
        transform="translateY(-50%)"
        onClick={handlePrevClick}
      >
        Prev
      </Button>
      <Button
        position="absolute"
        top="50%"
        right="4"
        transform="translateY(-50%)"
        onClick={handleNextClick}
      >
        Next
      </Button>
    </Box>
  );
};

export default Carousel;
