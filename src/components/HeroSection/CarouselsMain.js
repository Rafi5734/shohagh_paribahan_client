"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import heroSlideImage from "../../public/images/heroImg.PNG";
import banner_2 from "../../public/images/banner-2.svg";
import styles from "./heroSliders.module.css";
export default function CarouselsMain() {
  return (
    <div className={styles.mainCarousel}>
      <Carousel>
        <Carousel.Item>
          <Image
            className={styles.banner_img_2}
            src={heroSlideImage}
            alt="Picture of the banners"
          />
          <Carousel.Caption>
            <span className={styles.imageHeading}>
              Book your ticket from the country best bus operator
            </span>
            <br />
            <span className={styles.imagePara}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className={styles.banner_img_2}
            src={banner_2}
            alt="Picture of the banners"
          />
          <Carousel.Caption>
            <span className={styles.imageHeading}>Second slide label</span>
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
