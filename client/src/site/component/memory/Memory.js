import { useEffect, useState } from "react";

export default function Memory() {
  const args = window.location.pathname.split("/");
  const id = args[2];

  const [data, setData] = useState({ uploads: [], uploader: {} });

  useEffect(() => {
    async function load() {
      setData(await loadData(id));
      console.log(data);
    }
    load();
  }, []);

  async function loadData(id) {
    let response = await fetch(window.origin + "/api/memory/" + id);
    if (response.ok) {
      return await response.json();
    }
  }

  return (
    <div>
      <div class="memory-header-container shadow rounded">
        <h2 class="memory-header">{data.event}</h2>
        <h3 class="memory-subheader">{data.description}</h3>
        <h3 class="memory-subheader">
          {"Uploaded by: " + data.uploader.memberName}
        </h3>
      </div>
      <div class="d-flex flex-wrap memory-container justify-content-around flex-grow-0">
        {data.uploads.map((element) => {
          return <img class="memory-image shadow" src={element} />;
        })}
      </div>
    </div>
  );
}
