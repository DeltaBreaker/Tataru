export default function MemoryPreview(props) {
  return (
    <div class="memory-preview shadow" data-id={props.id}>
      <h3
        class="memory-preview-header"
        id={"memory-preview-header-" + props.id}
      >
        {props.event}
      </h3>
      <h4
        class="memory-preview-subheader"
        id={"memory-preview-subheader-" + props.id}
      >
        {props.description}
      </h4>
      <h4
        class="memory-preview-uploader"
        id={"memory-preview-uploader-" + props.id}
      >
        {"Uploaded by: " + props.uploader.memberName}
      </h4>
      <a href={window.origin + "/memory/" + props._id}>
        <div class="tint">
          <img
            src={
              props.uploads[Math.floor(Math.random() * props.uploads.length)]
            }
            class="memory-preview-image"
          ></img>
        </div>
      </a>
    </div>
  );
}
