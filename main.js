const TGU_IMG = "https://cdn.discordapp.com/attachments/698247028261519401/1014440556878901258/TGU_Galaxy_8.31.2022.jpg";
const REFERENCE_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/236084main_MilkyWay-full-annotated.jpg/1024px-236084main_MilkyWay-full-annotated.jpg";

let map = L.map("map", {
	crs: L.CRS.Simple
});

let referenceBounds = [[.002,.001], [.099,.099]];
let reference = L.imageOverlay(REFERENCE_IMG, referenceBounds, {opacity:.7}).addTo(map);

let tguBounds = [[0,0], [.1,.1]];
let tgu = L.imageOverlay(TGU_IMG, tguBounds, {opacity:1}).addTo(map);


map.fitBounds(tguBounds);

let layerControl = L.control.layers({}, {TGU: tgu, Reference: reference}).addTo(map);

let rulerOptions = {
  lengthUnit: {
    factor: 15000/1.1918,
    display: "light years",
  }
};
L.control.ruler(rulerOptions).addTo(map);