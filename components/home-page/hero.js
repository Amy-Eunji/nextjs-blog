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
      <h1>💙 사랑둥이 코코 에오 💙</h1>
      <p>🐥 이 코코(2세)/귀염둥이 🐥</p>
    </section>
  );
}

export default Hero;
