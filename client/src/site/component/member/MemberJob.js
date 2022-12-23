export default function MemberJob(props) {
  return (
    <div class="member-job-container">
      <img
        class="member-job-icon"
        src={
          "https://xivapi.com/cj/1/" +
          props.UnlockedState.Name.toLowerCase()
            .replace(/ +/g, "")
            .replace(/\([^)]*\)/, "") +
          ".png"
        }
      ></img>
      <h5
        class={
          "member-job-level " +
          (props.Level == 90 ? "member-job-level-max" : "")
        }
      >
        {props.Level}
      </h5>
    </div>
  );
}
