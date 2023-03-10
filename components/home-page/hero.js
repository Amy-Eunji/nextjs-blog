import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/coco.jpeg"
          alt="coco image"
          width={300}
          height={300}
        />
      </div>
      <h1>π μ¬λλ₯μ΄ μ½μ½ μμ€ π</h1>
      <p>π₯ μ΄ μ½μ½(2μΈ)/κ·μΌλ₯μ΄ π₯</p>
    </section>
  );
}

export default Hero;
