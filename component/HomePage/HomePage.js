import React from "react";
import Head from "next/head";
import ContainerBlock from "../ContainerBlock/ContainerBlock";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

function HomePage() {
  /* Можем управлять контентом на сайте */
  const [post, setPost] = React.useState({
    title: "UT ALIQUIP EX EA COMMODO CONSEQUAT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: `Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.${(
      <br></br>
    )} Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    img: "./img/block/block1.png",
    img_2: "./img/block/block2.png",
  });
  const [postSecond, setPostSecond] = React.useState({
    title: "UT ALIQUIP EX EA COMMODO CONSEQUAT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    img: "./img/block/block3.png",
    img_2: "./img/block/block4.png",
  });

  return (
    <div>
      <Head>
        <title>CIRCEYA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ContainerBlock data={post} position />
      <div>
        <Slider />
      </div>
      <ContainerBlock data={postSecond} />
      <Footer />
    </div>
  );
}

export default HomePage;
