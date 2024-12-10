import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CarouselSection from "../components/CarouselSection";
import CategoriesSection from "../components/CategoriesSection";

function HomePage() {

  return (
    <Container>
      <CarouselSection />
      <CategoriesSection />
    </Container>
  );
}

export default HomePage;
