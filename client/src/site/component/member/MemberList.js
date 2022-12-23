import { useEffect, useState } from "react";
import MemberCard from "./MemberCard.js";

export default function MemberList() {
  const [data, setData] = useState({ FreeCompanyMembers: [] });

  useEffect(() => {
    async function loadMembers() {
      let response = await fetch(window.origin + "/api/member");
      if (response.ok) {
        let x = await response.json();
        console.log(x);
        setData(x);
      }
    }
    loadMembers();
  }, []);

  return (
    <ul>
      {data.FreeCompanyMembers.map((e, index) => {
        return <MemberCard side={"member-card-side-" + (index % 2)} {...e} />;
      })}
    </ul>
  );
}
