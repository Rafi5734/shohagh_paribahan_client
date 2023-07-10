"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import heroSlideImage from "../../public/images/heroImg.PNG";
import styles from "./heroSliders.module.css";
export default function CarouselsMain() {
  return (
    <div className="mt-5 pt-5">
      <Carousel>
        <Carousel.Item>
          <Image
            className={styles.bannerImages}
            src={heroSlideImage}
            alt="Picture of the banners"
          />
          <Carousel.Caption>
            <span className={styles.imageHeading}>First slide label</span>
            <br />
            <span className={styles.imagePara}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
