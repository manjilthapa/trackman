const KEYS = {
  facilities: "facilities",
};
export function getAllFacilities() {
  if (localStorage.getItem(KEYS.facilities) == null)
    localStorage.setItem(KEYS.facilities, JSON.stringify([]));
  return myPromise.then((value) => value);
}

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(localStorage.getItem(KEYS.facilities));
  }, 1000);
});
