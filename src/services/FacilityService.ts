const KEYS = {
  facilities: "facilities",
};
export const getAllFacilities = async () => {
  const facilities = JSON.parse(localStorage.getItem(KEYS.facilities) || "[]");
  await responseApiPromise(facilities);
  if (!facilities) {
    return [];
  }
  return facilities;
};

export const addFacility = async (data: any) => {
  let facilites = await getAllFacilities(); //localStorage.getItem(KEYS.facilities);
  if (facilites) {
    facilites.push(data);
    localStorage.setItem(KEYS.facilities, JSON.stringify(facilites));
  }
};

const responseApiPromise = (data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
