// Shared territory data for beyond-elyu — the single source of truth for both
// the map (section 3) and the town roll call (section 4).
//
// Coordinates are hand-placed in a 560x800 stylized space (sea west, foothills
// east, north at top), tuned for legibility rather than survey accuracy.
// Histories favour what is genuinely known about each town; the quieter ones
// stay honest and general rather than inventing dates.

export type Town = {
  name: string;
  /** stylized map x (0–560), west→east */
  x: number;
  /** stylized map y (0–800), north→south */
  y: number;
  kind: "coast" | "inland";
  /** a thematic anchor town, accented and labeled by default on the map */
  anchor?: boolean;
  /** short category tag for the index row */
  knownFor: string;
  /** one poetic line, used in the map readout */
  blurb: string;
  /** a short history for the roll call */
  history: string;
};

export const TOWNS: Town[] = [
  // ── The coast, north → south ──
  {
    name: "Bangar",
    x: 250,
    y: 90,
    kind: "coast",
    knownFor: "Inabel weaving",
    blurb: "Inabel cloth, woven on wooden looms",
    history:
      "The province's northern doorway kept its looms when the rest of the coast set them down. Bangar's inabel, cotton pulled into tight geometric bands, still comes off wooden pedal looms in the barangays.",
  },
  {
    name: "Luna",
    x: 222,
    y: 150,
    kind: "coast",
    knownFor: "The pebble beach",
    blurb: "A pebble shore and the old Baluarte watchtower",
    history:
      "Once called Namacpacan, the town was renamed for the Luna family that gave the country a painter and a general. Spanish watchtowers still stand over a shore of smooth grey stones instead of sand.",
  },
  {
    name: "Balaoan",
    x: 240,
    y: 205,
    kind: "coast",
    knownFor: "Riverside quiet",
    blurb: "A quiet river town opening to the sea",
    history:
      "A farming and fishing town set back along its river, Balaoan is the kind of place the highway passes through on the way to somewhere louder. That is most of its appeal.",
  },
  {
    name: "Bacnotan",
    x: 232,
    y: 262,
    kind: "coast",
    knownFor: "Honey Capital of the North",
    blurb: "Sea urchin season and the state university",
    history:
      "Home to DMMMSU and its Sericulture Research and Development Institute (SRDI), Bacnotan moves to the rhythm of campus life and the sea. Its beekeeping tradition has earned it the name Honey Capital of the North.",
  },
  {
    name: "San Juan",
    x: 248,
    y: 322,
    kind: "coast",
    anchor: true,
    knownFor: "Surfing",
    blurb: "The surf town everyone mistakes for the whole",
    history:
      "Carved out of San Fernando and long a quiet fishing barangay, San Juan became the surfing capital of the northern Philippines once the swell at Urbiztondo found an audience. It is the single town most visitors mistake for the entire province.",
  },
  {
    name: "City of San Fernando",
    x: 242,
    y: 388,
    kind: "coast",
    anchor: true,
    knownFor: "The capital",
    blurb: "The capital: Ma-Cho Temple, Pindangan ruins",
    history:
      "Founded in the late 1700s and made capital when La Union was stitched together in 1850, San Fernando carries the province's Chinese-Filipino heart: the seaside Ma-Cho Temple and the Pindangan ruins of an older church.",
  },
  {
    name: "Bauang",
    x: 256,
    y: 448,
    kind: "coast",
    knownFor: "Grapes & beaches",
    blurb: "Grape rows and a long shore of resorts",
    history:
      "Bauang spent decades as the coast's resort strip, its shoreline lined with old beach houses. Inland it is grape country, with roadside vines you can pick from when the season turns.",
  },
  {
    name: "Caba",
    x: 272,
    y: 505,
    kind: "coast",
    knownFor: "Windswept points",
    blurb: "Windswept points and small fishing barangays",
    history:
      "A small coastal town between the resort strip and the river mouths, Caba is mostly farmland meeting the sea. Its points catch the same swell that made its neighbour famous, without the crowd. It is the historical birthplace of prominent Filipino revolutionary hero Diego Silang.",
  },
  {
    name: "Aringay",
    x: 280,
    y: 555,
    kind: "coast",
    knownFor: "River meets sea",
    blurb: "Where the river finally meets the sea",
    history:
      "An old pueblo on the Aringay river, the town was a colonial-era crossing between the coast and the Cordillera trade. The river still defines where it begins and ends.",
  },
  {
    name: "Agoo",
    x: 290,
    y: 612,
    kind: "coast",
    anchor: true,
    knownFor: "The Basilica",
    blurb: "The Basilica of Our Lady of Charity",
    history:
      "One of the oldest towns on the coast, Agoo grew around its church and its devotion. The Basilica of Our Lady of Charity draws pilgrims by the thousands, heaviest through Holy Week.",
  },
  {
    name: "Santo Tomas",
    x: 305,
    y: 665,
    kind: "coast",
    knownFor: "The southern shore",
    blurb: "The southern shoreline, near Pangasinan",
    history:
      "Near the Pangasinan line, Santo Tomas is a quiet stretch of shoreline and rice land. It marks the coast's slow handover to the gulf.",
  },
  {
    name: "Rosario",
    x: 330,
    y: 715,
    kind: "coast",
    knownFor: "The southern gateway",
    blurb: "The gateway in from the south",
    history:
      "The province's front door from the south, Rosario sits where the lowlands begin to climb. Most people pass through it without noticing they have arrived.",
  },
  // ── The foothills, north → south ──
  {
    name: "Sudipen",
    x: 420,
    y: 95,
    kind: "inland",
    knownFor: "The Amburayan river",
    blurb: "Foothills along the Amburayan river",
    history:
      "Tucked into the northeastern foothills along the Amburayan, Sudipen is farm country at the seam of Ilocos Sur and the mountains. It is about as far from the surf as the province gets.",
  },
  {
    name: "Santol",
    x: 462,
    y: 172,
    kind: "inland",
    knownFor: "Cold river pools",
    blurb: "A mountain town of cold river pools",
    history:
      "A mountain town of terraced farms and clear pools, Santol trades the coast's heat for altitude. The water comes down cold off the Cordillera.",
  },
  {
    name: "San Gabriel",
    x: 410,
    y: 268,
    kind: "inland",
    knownFor: "Tangadan Falls",
    blurb: "The trail to Tangadan Falls",
    history:
      "The jump-off into the highlands, San Gabriel rises into green mountains cut by rivers, forest trails, and a remarkable chain of waterfalls. Tangadan is the best known, but Dupagan and the cascades along the Arosip ecotrail reveal how much more water runs through this rugged town.",
  },
  {
    name: "Naguilian",
    x: 400,
    y: 358,
    kind: "inland",
    knownFor: "Basi sugarcane wine",
    blurb: "The basi capital: sugarcane wine in clay",
    history:
      "Naguilian is the basi capital, where sugarcane is pressed and fermented into the amber wine the Ilocos once revolted to keep. Clay jars of it still age in the town.",
  },
  {
    name: "Bagulin",
    x: 492,
    y: 420,
    kind: "inland",
    knownFor: "Highland trails",
    blurb: "Highland trails above the valley",
    history:
      'One of the least-travelled towns in La Union, Bagulin is upland forest and footpaths, home to Indigenous highland communities. Known as the "soft broom capital" of the province, it sustains a strong local craft tradition built around tiger grass and skilled broom-making. The roads thin out and the quiet takes over.',
  },
  {
    name: "Burgos",
    x: 458,
    y: 498,
    kind: "inland",
    knownFor: "Cool uplands",
    blurb: "Cool uplands, far from the surf",
    history:
      'Named for the martyred priest, Burgos is a small upland town of cool air and long views. Known as La Union\'s "Soft Broom Capital," it supports a cottage industry where artisans turn locally grown tiger grass into colorful brooms. That craft takes center stage each year at the Boyboy Festival.',
  },
  {
    name: "Tubao",
    x: 425,
    y: 602,
    kind: "inland",
    knownFor: "Inland farms",
    blurb: "Inland farms and slow afternoons",
    history:
      'A lowland-to-foothill farming town in the south, Tubao is fields, fruit, and the unhurried pace of a place off the tourist line. Historically called the "Home of the Native Tobacco," it earned a reputation for fine tobacco leaves and locally made cigars.',
  },
  {
    name: "Pugo",
    x: 475,
    y: 658,
    kind: "inland",
    knownFor: "Eco-adventure parks",
    blurb: "Eco-adventure parks in the hills",
    history:
      "Pugo has made its green mountain setting La Union's hub for eco-adventure. Hillside destinations such as Pugo Adventure, better known as PUGAD, and Kultura Splashwave draw visitors for zip lines, outdoor activities, and water attractions. Beyond the parks, the town remains rural and green.",
  },
];

export const COAST_TOWNS = TOWNS.filter((t) => t.kind === "coast").sort((a, b) =>
  a.name.localeCompare(b.name),
);
export const INLAND_TOWNS = TOWNS.filter((t) => t.kind === "inland").sort(
  (a, b) => a.name.localeCompare(b.name),
);

// Stylized geography shared by the map and the roll-call locator.
export const COASTLINE =
  "M 205 55 C 175 150, 225 215, 200 300 C 178 380, 235 450, 232 520 C 230 590, 285 650, 300 720 L 312 770";
export const SEA = `${COASTLINE} L 0 770 L 0 55 Z`;
export const FOOTHILLS =
  "M 520 60 C 545 180, 515 300, 535 420 C 550 540, 520 660, 540 760";
