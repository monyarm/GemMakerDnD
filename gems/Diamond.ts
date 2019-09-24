import Gem from "../Gem";
var permutations = require("../utils/permutations.js");

export const Diamond = new Gem("Diamond", 5000, "GP", [...permutations.product(["","Pale ","Pale ","Pale ","Pale ","Deep "],[
"Blue",
"Bluish-Gray","Bluish-White","Bluish-Black","Bluish-Brown","Bluish-Green",
"Grayish-Blue","Grayish-Green","Grayish-Olive","Grayish-Yellow","Grayish-Brown","Grayish-Pink","Dark Gray",
"Purple",
"Purplish-Gray","Purplish-Brown","Purplish-Pink","Purplish-Red",
"Pink",
"Pinkish-Gray","Pinkish-Purple","Pinkish-Red","Pinkish-Orange","Pinkish-Green","Pinkish-Brown",
"Red",
"Redish-Orange","Redish-Pink","Redish-Purple","Redish-Brown",
"Orange",
"Orangish-Pink","Orangish-Red","Orangish-Brown","Orangish-Green","Orangish-Yellow",
"Brown",
"Brownish-Orange","Brownish-Red","Brownish-Pink","Brownish-Purple","Brownish-Gray","Brownish-Blue","Brownish-Green","Brownish-Olive","Brownish-Yellow",
"Yellow",
"Yellowish-Orange","Yellowish-Olive","Yellowish-Green","Yellowish-Gray",
"Olive", "Brown Olive","Black Olive","Green Olive",
"Green",
"Greenish-Orange","Greenish-Brown","Greenish-Yellow","Greenish-Blue","Greenish-Pink"
]).map((x: string[]) => {return (String(x[0]) + String(x[1])).replace("  ", " ").trim();}), "Dark Blue","Dark Green","Dark Olive","Dark Brown","Dark Red","Dark Purple",
"Light Blue", "Light Yellow", "Light Brown",
"White",
"Gray",
"Black",
"Cyan","Teal","Turquoise","Lavender","Maroone","Chocolate","Champaigne","Aqua","Sanguine","Pink Panther","Rust","Pearl","Alabaster","Snow","Ivory","Cream","Cotton","Lace","Bone",
"Frost","Porcelain","Sepia","Hazelnut","Canary","Gold","Lemon","Honey","Tangerine","Marigold","Fire","Cherry","Rose","Wine","Scarlet","Sangria","Mahogany","Coral","Rouge",
"Mauve","Violet","Boysenberry","Lilac","Magenta","Lilac","Perwinkle","Orchid","Navy","Indigo","Cerulean","Azure","Arctic","Lime","Seafoam","Shamrock","Moss","Mint","Mocha","Caramel",
"Graphite","Silver","Smoke","Ash","Charcoal","Ebony","Midnight","Jet","Clear"
], ["Rough","Princess Cut", "Cushion Cut","Heart Cut","Pear Cut","Marquise Cut","Radiant Cut","Asscher Cut","Emerald Cut","Oval Cut","Round Brilliant","Round Brilliant","Round Brilliant",
"Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant","Round Brilliant",
"Passion Cut","Passion Cut","Passion Cut", "Trillion Cut","Carré Cut","Barion Cut","Oval Brilliant","Pear Brilliant","Step Cut","High Cabochon","Cabochon","Lentil-Shaped",
"Mogul Cut","Rose Cut"
]);
