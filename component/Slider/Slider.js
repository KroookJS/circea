import React, { useEffect, useRef } from "react";
import BlockTitle from "../BlockContent/BlockTitle";
import { data } from "./mockData";
import styles from "./Slider.module.scss";

function Slider() {
  const refContainer = useRef();
  const ref = useRef();
  useEffect(() => {
    const elementContainer = refContainer.current;
    const element = ref.current;

    // Максимальный скролл
    let maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth - 1;
    console.log(maxScrollLeft);

    if (elementContainer) {
      const onWheel = (e) => {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
        console.log(element.scrollLeft);

        if (element.scrollLeft >= maxScrollLeft) {
          elementContainer.removeEventListener("wheel", onWheel);
        }
      };

      elementContainer.addEventListener("wheel", onWheel);
    }
  }, [refContainer]);
  return (
    <section className={styles.section}>
      <div ref={refContainer} className={styles.wrraper}>
        <div className={styles.titleSlider}>
          <BlockTitle position title="Lorem ipsum dolor sit amet" />
        </div>

        <div ref={ref} className={styles.imgContent}>
          {data.map((photo, el) => {
            return (
              <img
                className={styles.img}
                src={photo.img}
                key={photo.id}
                alt="slider"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Slider;
