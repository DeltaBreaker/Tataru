import { useEffect, useState } from "react";
import MemoryPreview from "./MemoryPreview";

export default function Memories() {
  const paramList = {
    amt: 8,
    page: 0,
  };
  const params = window.location.search.replace("?", "").split("&");
  for (const param of params) {
    const args = param.split("=");
    if (args.length > 1) {
      paramList[args[0]] = args[1];
    }
  }

  const [count, setCount] = useState(0);
  const [memoryData, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      setCount(await getMemoryCount());
      setData(await getMemories(paramList.amt, paramList.page));

      const script = document.createElement("script");
      script.src = "./scripts/memories.js";
      script.async = true;
      document.body.append(script);
    }
    loadData();
  }, []);

  async function getMemoryCount() {
    let response = await fetch(window.origin + "/api/memory/count");
    if (response.ok) {
      return (await response.json()).count;
    }
  }

  async function getMemories(amt, page) {
    let response = await fetch(buildURL(amt, page, true));
    if (response.ok) {
      return await response.json();
    }
  }

  function buildURL(amt, page, api) {
    return (
      window.origin +
      (api ? "/api" : "") +
      "/memory?amt=" +
      amt +
      "&page=" +
      page
    );
  }

  return (
    <div>
      <div class="d-flex justify-content-around flex-wrap flex-grow-0 memory-container">
        {memoryData.map((e, i) => {
          return <MemoryPreview id={i} {...e} />;
        })}
      </div>
      <div class="d-flex justify-content-center">
        {paramList.page > 0 ? (
          <a href={buildURL(paramList.amt, Number(paramList.page) - 1, false)}>
            <h3 class="memory-page-link">Prev</h3>
          </a>
        ) : (
          <></>
        )}
        {(Number(paramList.page) + 1) * paramList.amt < count ? (
          <a href={buildURL(paramList.amt, Number(paramList.page) + 1, false)}>
            <h3 class="memory-page-link">Next</h3>
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
