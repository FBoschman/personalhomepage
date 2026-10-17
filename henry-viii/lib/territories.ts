import type { RealmId, TerritoryState } from "./types";

export function getTerritoryState(id: RealmId, year: number): TerritoryState {
  switch (id) {
    case "england":
      return {
        id,
        name: "England",
        status: "The Tudor heartland",
        note: "The crown of England, governed from Westminster and increasingly centralised under the royal supremacy.",
        held: true,
        tone: "crown",
      };
    case "wales":
      return year < 1536
        ? {
            id,
            name: "Wales",
            status: "Principality & Marcher lordships",
            note: "Under the English crown, but governed through the Principality and a patchwork of semi-independent Marcher lords.",
            held: true,
            tone: "autonomy",
          }
        : {
            id,
            name: "Wales",
            status: "United with England",
            note: "The Laws in Wales Act (1536) shired Wales, extended English law and gave it representation at Westminster.",
            held: true,
            tone: "crown",
          };
    case "ireland":
      return year < 1541
        ? {
            id,
            name: "Ireland",
            status: "Lordship · the Pale",
            note: "Royal authority is strongest in the Pale around Dublin; much of the island is held by Gaelic and Anglo-Irish lords.",
            held: true,
            tone: "autonomy",
          }
        : {
            id,
            name: "Ireland",
            status: "Kingdom · claimed 1541",
            note: "The Crown of Ireland Act makes Henry king of the whole island, but effective royal control still rarely reaches beyond the Pale.",
            held: true,
            tone: "claim",
          };
    case "scotland":
      return {
        id,
        name: "Scotland",
        status: "Independent kingdom",
        note: "The Stewart monarchy, bound to France by the Auld Alliance and a persistent rival across the northern border.",
        held: false,
        tone: "foreign",
      };
    case "calais":
      return {
        id,
        name: "Calais",
        status: "English Pale since 1347",
        note: "England's staple wool port on the continent and its last enduring foothold in France until 1558.",
        held: true,
        tone: "crown",
      };
    case "tournai":
      return year >= 1513 && year < 1519
        ? {
            id,
            name: "Tournai",
            status: "English occupation, 1513–19",
            note: "Taken in Henry's first French campaign and restored to France by treaty six years later.",
            held: true,
            tone: "crown",
          }
        : {
            id,
            name: "Tournai",
            status: "Not held",
            note: "A wealthy cloth city in the Low Countries, held briefly by Henry and then returned to France.",
            held: false,
            tone: "foreign",
          };
    case "boulogne":
      return year >= 1544
        ? {
            id,
            name: "Boulogne",
            status: "English occupation, 1544–50",
            note: "Captured in Henry's last French war and held until Edward VI returned it under the Treaty of Boulogne.",
            held: true,
            tone: "crown",
          }
        : {
            id,
            name: "Boulogne",
            status: "Not held",
            note: "A Channel port in Picardy, in the hands of Valois France until Henry's siege of 1544.",
            held: false,
            tone: "foreign",
          };
    case "france":
      return {
        id,
        name: "France",
        status: "Valois France",
        note: "Henry claims the French throne and styles himself King of France, though his actual foothold is the Calais Pale.",
        held: false,
        tone: "foreign",
      };
  }
}

export const REALM_IDS: RealmId[] = [
  "england",
  "wales",
  "scotland",
  "ireland",
  "france",
  "calais",
  "boulogne",
  "tournai",
];
