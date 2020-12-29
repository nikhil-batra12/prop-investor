import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import _ from "lodash";

const getCarouselItem = (element) => {
  return (
    <Carousel.Item style={{ height: "500px" }}>
      <Image
        className="d-block w-100 rounded mx-auto"
        src={element.src}
        alt={element.alt || "loading"}
        style={{ height: "500px" }}
      />
      <Carousel.Caption>
        <h3>{element.label || "Default Label"}</h3>
        <p>{element.content || "Default Content"}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

const ImageCarousel = (props) => {
  const { config } = props;

  const items = _.map(config, (element) => getCarouselItem(element));
  return <Carousel>{items}</Carousel>;
};

export default ImageCarousel;
