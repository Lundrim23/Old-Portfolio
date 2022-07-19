import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/projectImg.png";
import UnSplashed from "../images/img1-UnSplashed.PNG";
import MovieLand from "../images/img2-MovieLand.PNG";
import PictureInPicture from "../images/img3-Picture-In-Picture.PNG";
import QuoteGenerator from "../images/img4-QuoteGenerator.PNG";

const projects = [
  {
    id: uuidv4(),
    name: "Infinite scroll",
    desc: "A web design technique where, as the user scrolls down a page, more content automatically and continuously loads at the bottom, eliminating the user's need to click to the next page",
    img: UnSplashed,
    link: "https://github.com/Lundrim23/InfiniteScroll-UnsplashAPI",
  },
  {
    id: uuidv4(),
    name: "Movie Land",
    desc: "An application that brings movie information made with React and consuming a TMDB movie ... Creating a UI for Streaming using React.js, Styled Components.",
    img: MovieLand,
    link: "https://github.com/Lundrim23/MovieLand",
  },
  {
    id: uuidv4(),
    name: "Picture In Picture",
    desc: "Picture-in-Picture allows you to watch videos in a floating window so you can keep an eye on what you’re watching while interacting with other sites, or applications",
    img: PictureInPicture,
    link: "https://github.com/Lundrim23/Picture-in-Picture",
  },
  {
    id: uuidv4(),
    name: "Quote Generator",
    desc: "You can generate quote's that famus people tweeted and you can retweet those tweets",
    img: QuoteGenerator,
    link: "https://github.com/Lundrim23/Quote-generator",
  },
  {
    id: uuidv4(),
    name: "Tracking Soft (Not Finished)",
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: ProjectImg,
  },
];

export default projects;
