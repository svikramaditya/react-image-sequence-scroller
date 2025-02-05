# React Image Sequence Scroller

A simple React component to create an image sequence scroller with a customizable interval.

## Installation

```bash
npm install react-image-sequence-scroller


📌 Usage

```jsx
import React from "react";
import ImageScroller from "react-image-sequence-scroller";

const App = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    // Add more image URLs here
  ];

  return <ImageScroller images={images} interval={200} />;
};

export default App;


