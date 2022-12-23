export default function CarouselImage(props) {
  return (
    <div
      class={"carousel shadow carousel-state-" + props.state}
      data-state={props.state}
      data-id={props.state}
    >
      <h3 class="carousel-header" id={"carousel-header-" + props.state}>
        {props.event}
      </h3>
      <h4 class="carousel-subheader" id={"carousel-subheader-" + props.state}>
        {props.description}
      </h4>
      <h4 class="carousel-uploader" id={"carousel-uploader-" + props.state}>
        {"Uploaded by: " + props.uploader.memberName}
      </h4>
      <div class="tint">
        <img
          src={props.uploads[Math.floor(Math.random() * props.uploads.length)]}
          class="carousel-image"
          id={"carousel-image-" + props.state}
        ></img>
      </div>
    </div>
  );
}
