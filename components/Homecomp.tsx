import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const Homecomp = () => {
  return (
    <div className={styles.Homecomp}>
      <section className={styles.carousel}>
        <div className={styles.carouselCon}>
          <div className={styles.carouselItem}>
            <div className={styles.carouselContent}>
              <h2 className={styles.carousel__item__content__title}>
                Lorem ipsum dolor sit amet
              </h2>
              <p className={styles.carousel__item__content__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nunc tincidunt nisl,
                vitae aliquam nisl nisl sit amet lorem. Sed euismod, nisl nec
                ultricies lacinia, nisl nunc tincidunt nisl, vitae aliquam nisl
                nisl sit amet lorem.
              </p>
              <a href="#" className={styles.carousel__item__content__button}>
                Read more
              </a>
              <div className={styles.carousel__item__content__image}>
                <Image
                  src="https://images.unsplash.com/photo-1617675460003-8b8b0b0b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homecomp;
