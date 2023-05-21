export function getZoneAndTitle(zone) {
  if (zone === "ru") {
    return { searchingZone: "ru", searchingZoneTitle: "Санкции РФ" };
  }
  if (zone === "eu") {
    return { searchingZone: "eu", searchingZoneTitle: "Санкции ЕС" };
  }
  if (zone === "usa") {
    return { searchingZone: "usa", searchingZoneTitle: "Санкции США" };
  }
  return { searchingZone: "ru", searchingZoneTitle: "Санкции РФ" };
}
