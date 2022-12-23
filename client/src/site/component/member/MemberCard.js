import { useEffect, useState } from "react";
import MemberJob from "./MemberJob";

export default function MemberCard(props) {
  const [memberData, setData] = useState(data);

  useEffect(() => {
    fetch(window.origin + "/api/member/" + props.ID).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setData(json);
        });
      }
    });
  }, []);

  return memberData.Character ? (
    <a
      href={
        "https://na.finalfantasyxiv.com/lodestone/character/" +
        memberData.Character.ID
      }
    >
      <div class={"rounded shadow member-card " + props.side}>
        <div class="member-card-nameplate rounded">
          <img src={props.Avatar} class="member-card-image rounded"></img>
          <h3 class="member-card-header">{props.Name}</h3>
          <h4 class="member-card-rank">
            <img class="member-rank-icon" src={props.RankIcon}></img>
            {props.Rank}
          </h4>
          <img
            class="member-card-current-job-icon rounded"
            src={
              "https://xivapi.com/cj/1/" +
              memberData.Character.ActiveClassJob.UnlockedState.Name.toLowerCase()
                .replace(/ +/g, "")
                .replace(/\([^)]*\)/, "") +
              ".png"
            }
          ></img>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-column">
            <div class="member-card-jobs rounded">
              {memberData.Character.ClassJobs.map((e) => {
                return <MemberJob {...e} />;
              })}
            </div>
            <div class="member-card-jobs rounded">
              <h5 class="member-card-text">
                {"Elemental Level: " +
                  memberData.Character.ClassJobsElemental.Level}
              </h5>
              <h5 class="member-card-text">
                {"Resistance Rank: " +
                  (memberData.Character.ClassJobsBozjan.Level
                    ? memberData.Character.ClassJobsBozjan.Level
                    : 0)}
              </h5>
            </div>
          </div>
          <img
            class="member-card-portrait rounded"
            src={memberData.Character.Portrait}
          ></img>
        </div>
      </div>
    </a>
  ) : (
    <></>
  );
}

const data = {
  Achievements: null,
  AchievementsPublic: null,
  Character: {
    ActiveClassJob: {
      ClassID: 12,
      ExpLevel: 0,
      ExpLevelMax: 0,
      ExpLevelTogo: 0,
      IsSpecialised: true,
      JobID: 12,
      Level: 90,
      Name: "leatherworker / leatherworker",
      UnlockedState: {
        ID: 12,
        Name: "Leatherworker",
      },
    },
    Avatar:
      "https://img2.finalfantasyxiv.com/f/dac718c3ca088a06400093a0f091b6c5_4d9be17b5e1edc617052b4dbf4007875fc0_96x96.jpg?1671548758",
    Bio: "ffxivcollect:a640ad19e6c2b2994f896e33f57e57ae94073e6183b7a299c8d4637cd58b8501",
    ClassJobsBozjan: {
      Level: 17,
      Mettle: 2031158,
      Name: "Resistance Rank",
    },
    ClassJobsElemental: {
      ExpLevel: 0,
      ExpLevelMax: 0,
      ExpLevelTogo: 0,
      Level: 60,
      Name: "Elemental Level",
    },
    ClassJobs: [
      {
        ClassID: 1,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 19,
        Level: 90,
        Name: "gladiator / paladin",
        UnlockedState: {
          ID: 19,
          Name: "Paladin",
        },
      },
      {
        ClassID: 3,
        ExpLevel: 4161455,
        ExpLevelMax: 5992000,
        ExpLevelTogo: 1830545,
        IsSpecialised: false,
        JobID: 21,
        Level: 80,
        Name: "marauder / warrior",
        UnlockedState: {
          ID: 21,
          Name: "Warrior",
        },
      },
      {
        ClassID: 32,
        ExpLevel: 339414,
        ExpLevelMax: 421000,
        ExpLevelTogo: 81586,
        IsSpecialised: false,
        JobID: 32,
        Level: 50,
        Name: "dark knight / dark knight",
        UnlockedState: {
          ID: 32,
          Name: "Dark Knight",
        },
      },
      {
        ClassID: 37,
        ExpLevel: 1405134,
        ExpLevelMax: 1621000,
        ExpLevelTogo: 215866,
        IsSpecialised: false,
        JobID: 37,
        Level: 63,
        Name: "gunbreaker / gunbreaker",
        UnlockedState: {
          ID: 37,
          Name: "Gunbreaker",
        },
      },
      {
        ClassID: 6,
        ExpLevel: 1474178,
        ExpLevelMax: 1968000,
        ExpLevelTogo: 493822,
        IsSpecialised: false,
        JobID: 24,
        Level: 66,
        Name: "conjurer / white mage",
        UnlockedState: {
          ID: 24,
          Name: "White Mage",
        },
      },
      {
        ClassID: 26,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 28,
        Level: 90,
        Name: "arcanist / scholar",
        UnlockedState: {
          ID: 28,
          Name: "Scholar",
        },
      },
      {
        ClassID: 33,
        ExpLevel: 11657,
        ExpLevelMax: 82700,
        ExpLevelTogo: 71043,
        IsSpecialised: false,
        JobID: 33,
        Level: 32,
        Name: "astrologian / astrologian",
        UnlockedState: {
          ID: 33,
          Name: "Astrologian",
        },
      },
      {
        ClassID: 40,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 40,
        Level: 90,
        Name: "sage / sage",
        UnlockedState: {
          ID: 40,
          Name: "Sage",
        },
      },
      {
        ClassID: 2,
        ExpLevel: 0,
        ExpLevelMax: 37300,
        ExpLevelTogo: 37300,
        IsSpecialised: false,
        JobID: 20,
        Level: 24,
        Name: "pugilist / monk",
        UnlockedState: {
          ID: 2,
          Name: "Pugilist",
        },
      },
      {
        ClassID: 4,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 22,
        Level: 0,
        Name: "lancer / dragoon",
        UnlockedState: {
          ID: 4,
          Name: "Lancer",
        },
      },
      {
        ClassID: 29,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 30,
        Level: 0,
        Name: "rogue / ninja",
        UnlockedState: {
          ID: 29,
          Name: "Rogue",
        },
      },
      {
        ClassID: 34,
        ExpLevel: 1624675,
        ExpLevelMax: 2923000,
        ExpLevelTogo: 1298325,
        IsSpecialised: false,
        JobID: 34,
        Level: 70,
        Name: "samurai / samurai",
        UnlockedState: {
          ID: 34,
          Name: "Samurai",
        },
      },
      {
        ClassID: 39,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 39,
        Level: 90,
        Name: "reaper / reaper",
        UnlockedState: {
          ID: 39,
          Name: "Reaper",
        },
      },
      {
        ClassID: 5,
        ExpLevel: 3806784,
        ExpLevelMax: 5992000,
        ExpLevelTogo: 2185216,
        IsSpecialised: false,
        JobID: 23,
        Level: 80,
        Name: "archer / bard",
        UnlockedState: {
          ID: 23,
          Name: "Bard",
        },
      },
      {
        ClassID: 31,
        ExpLevel: 117147,
        ExpLevelMax: 155000,
        ExpLevelTogo: 37853,
        IsSpecialised: false,
        JobID: 31,
        Level: 40,
        Name: "machinist / machinist",
        UnlockedState: {
          ID: 31,
          Name: "Machinist",
        },
      },
      {
        ClassID: 38,
        ExpLevel: 245471,
        ExpLevelMax: 1387000,
        ExpLevelTogo: 1141529,
        IsSpecialised: false,
        JobID: 38,
        Level: 60,
        Name: "dancer / dancer",
        UnlockedState: {
          ID: 38,
          Name: "Dancer",
        },
      },
      {
        ClassID: 7,
        ExpLevel: 189,
        ExpLevelMax: 3920,
        ExpLevelTogo: 3731,
        IsSpecialised: false,
        JobID: 25,
        Level: 8,
        Name: "thaumaturge / black mage",
        UnlockedState: {
          ID: 7,
          Name: "Thaumaturge",
        },
      },
      {
        ClassID: 26,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 27,
        Level: 90,
        Name: "arcanist / summoner",
        UnlockedState: {
          ID: 27,
          Name: "Summoner",
        },
      },
      {
        ClassID: 35,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 35,
        Level: 90,
        Name: "red mage / red mage",
        UnlockedState: {
          ID: 35,
          Name: "Red Mage",
        },
      },
      {
        ClassID: 36,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 36,
        Level: 70,
        Name: "blue mage / blue mage",
        UnlockedState: {
          ID: null,
          Name: "Blue Mage (Limited Job)",
        },
      },
      {
        ClassID: 8,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 8,
        Level: 90,
        Name: "carpenter / carpenter",
        UnlockedState: {
          ID: 8,
          Name: "Carpenter",
        },
      },
      {
        ClassID: 9,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: true,
        JobID: 9,
        Level: 90,
        Name: "blacksmith / blacksmith",
        UnlockedState: {
          ID: 9,
          Name: "Blacksmith",
        },
      },
      {
        ClassID: 10,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 10,
        Level: 90,
        Name: "armorer / armorer",
        UnlockedState: {
          ID: 10,
          Name: "Armorer",
        },
      },
      {
        ClassID: 11,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 11,
        Level: 90,
        Name: "goldsmith / goldsmith",
        UnlockedState: {
          ID: 11,
          Name: "Goldsmith",
        },
      },
      {
        ClassID: 12,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: true,
        JobID: 12,
        Level: 90,
        Name: "leatherworker / leatherworker",
        UnlockedState: {
          ID: 12,
          Name: "Leatherworker",
        },
      },
      {
        ClassID: 13,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 13,
        Level: 90,
        Name: "weaver / weaver",
        UnlockedState: {
          ID: 13,
          Name: "Weaver",
        },
      },
      {
        ClassID: 14,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 14,
        Level: 90,
        Name: "alchemist / alchemist",
        UnlockedState: {
          ID: 14,
          Name: "Alchemist",
        },
      },
      {
        ClassID: 15,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 15,
        Level: 90,
        Name: "culinarian / culinarian",
        UnlockedState: {
          ID: 15,
          Name: "Culinarian",
        },
      },
      {
        ClassID: 16,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 16,
        Level: 90,
        Name: "miner / miner",
        UnlockedState: {
          ID: 16,
          Name: "Miner",
        },
      },
      {
        ClassID: 17,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 17,
        Level: 90,
        Name: "botanist / botanist",
        UnlockedState: {
          ID: 17,
          Name: "Botanist",
        },
      },
      {
        ClassID: 18,
        ExpLevel: 0,
        ExpLevelMax: 0,
        ExpLevelTogo: 0,
        IsSpecialised: false,
        JobID: 18,
        Level: 90,
        Name: "fisher / fisher",
        UnlockedState: {
          ID: 18,
          Name: "Fisher",
        },
      },
    ],
    DC: "Primal",
    FreeCompanyId: "9231112598714449394",
    FreeCompanyName: "Endwalkers",
    GearSet: {
      Attributes: {
        1: 354,
        2: 351,
        3: 411,
        4: 390,
        5: 349,
        7: 3510,
        11: 572,
        20: 354,
        21: 1442,
        22: 400,
        24: 2874,
        27: 400,
        44: 390,
        45: 400,
        70: 3848,
        71: 3330,
      },
      ClassID: 12,
      Gear: {
        Body: {
          Creator: null,
          Dye: 30122,
          ID: 36709,
          Materia: [33938, 33938, 33938],
          Mirage: 27192,
        },
        Bracelets: {
          Creator: null,
          Dye: null,
          ID: 35462,
          Materia: [33940, 33939],
          Mirage: null,
        },
        Earrings: {
          Creator: null,
          Dye: null,
          ID: 35460,
          Materia: [33940, 33939],
          Mirage: null,
        },
        Feet: {
          Creator: null,
          Dye: 30123,
          ID: 36712,
          Materia: [33940, 33940, 33939],
          Mirage: 28589,
        },
        Hands: {
          Creator: null,
          Dye: null,
          ID: 36710,
          Materia: [33938, 33938],
          Mirage: 10034,
        },
        Head: {
          Creator: null,
          Dye: 5734,
          ID: 36708,
          Materia: [33938, 33938, 26735],
          Mirage: 13567,
        },
        Legs: {
          Creator: null,
          Dye: 5734,
          ID: 36711,
          Materia: [33940, 33940, 33939],
          Mirage: 23002,
        },
        MainHand: {
          Creator: null,
          Dye: null,
          ID: 36691,
          Materia: [33938, 25195],
          Mirage: null,
        },
        Necklace: {
          Creator: null,
          Dye: null,
          ID: 35461,
          Materia: [33940, 33939],
          Mirage: null,
        },
        OffHand: {
          Creator: null,
          Dye: null,
          ID: 36702,
          Materia: [33938],
          Mirage: null,
        },
        Ring1: {
          Creator: null,
          Dye: null,
          ID: 35463,
          Materia: [33938, 33938, 25195],
          Mirage: null,
        },
        Ring2: {
          Creator: null,
          Dye: null,
          ID: 35463,
          Materia: [33938, 33938, 25195],
          Mirage: null,
        },
        SoulCrystal: {
          Creator: null,
          Dye: null,
          ID: 10341,
          Materia: [],
          Mirage: null,
        },
      },
      GearKey: "12_12",
      JobID: 12,
      Level: 90,
    },
    Gender: 2,
    GrandCompany: {
      NameID: 3,
      RankID: 9,
    },
    GuardianDeity: 12,
    ID: 36437734,
    Lang: null,
    Name: "Axia Rain",
    Nameday: "13th Sun of the 6th Umbral Moon",
    ParseDate: 1671549555,
    Portrait:
      "https://img2.finalfantasyxiv.com/f/dac718c3ca088a06400093a0f091b6c5_4d9be17b5e1edc617052b4dbf4007875fl0_640x873.jpg?1671548758",
    PvPTeamId: null,
    Race: 6,
    Server: "Lamia",
    Title: 595,
    TitleTop: true,
    Town: 2,
    Tribe: 12,
  },
  FreeCompany: null,
  FreeCompanyMembers: null,
  Friends: null,
  FriendsPublic: null,
  Minions: null,
  Mounts: null,
  PvPTeam: null,
};
