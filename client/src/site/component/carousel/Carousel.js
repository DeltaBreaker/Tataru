import { useEffect, useState } from "react";
import CarouselImage from "./CarouselImage";

export default function Carousel() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    async function loadComponenets() {
      let components = [
        <CarouselImage state="0" {...await fetchNewImage()} />,
        <CarouselImage state="1" {...await fetchNewImage()} />,
        <CarouselImage state="2" {...await fetchNewImage()} />,
        // <CarouselImage
        //   state="0"
        //   event="From Rags to Riches"
        //   description="example"
        //   uploads={[
        //     "https://cdn.discordapp.com/attachments/942124661632811089/1055542976790667264/2022-05-22_04-18-37-565_Full-timeSenpaiFlorescence.png",
        //   ]}
        // />,
        // <CarouselImage
        //   state="1"
        //   event="From Rags to Riches"
        //   description="example"
        //   uploads={[
        //     "https://cdn.discordapp.com/attachments/942124661632811089/1055542978980094032/2022-05-22_04-00-55-576_Full-timeSenpaiFlorescence.png",
        //   ]}
        // />,
        // <CarouselImage
        //   state="2"
        //   event="From Rags to Riches"
        //   description="example"
        //   uploads={[
        //     "https://cdn.discordapp.com/attachments/942124661632811089/1055542977893769316/2022-05-22_03-44-26-883_Full-TimeSenpaiSplendor.png",
        //   ]}
        // />,
      ];

      setComponents(components);
      setInterval(updateComponents, 10000);

      const script = document.createElement("script");
      script.src = "./scripts/carousel.js";
      script.async = true;
      document.body.append(script);
    }
    loadComponenets();
  }, []);

  async function fetchNewImage() {
    let response = await fetch(window.origin + "/api/memory/random");
    if (response.ok) {
      return await response.json();
    }
  }

  function updateComponents() {
    Array.from(document.getElementsByClassName("carousel")).forEach(
      async (element) => {
        let state = element.getAttribute("data-state");
        element.classList.remove("carousel-state-" + state);
        state = (state + 1) % 3;
        element.setAttribute("data-state", state);
        element.classList.add("carousel-state-" + state);
        if (state == 0) {
          const image = element.lastChild.lastChild;
          const header = element.childNodes[0];
          const subheader = element.childNodes[1];
          const uploader = element.childNodes[2];
          const data = await fetchNewImage();
          image.setAttribute(
            "src",
            data.uploads[Math.floor(Math.random() * data.uploads.length)]
          );
          header.textContent = data.event;
          subheader.textContent = data.description;
          uploader.textContent = "Uploaded by: " + data.uploader.memberName;
        }
      }
    );
  }

  return <div class="carousel-container">{components}</div>;
}
