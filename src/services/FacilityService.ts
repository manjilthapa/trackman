import { Facility } from "../types/Facility";

const KEYS = {
  facilities: "facilities",
};
export const getAllFacilities = async (): Promise<Facility[]> => {
  const facilities: Facility[] = JSON.parse(
    localStorage.getItem(KEYS.facilities) || "[]"
  );
  const response = (await responseApiPromise(facilities)) as Promise<
    Facility[]
  >;
  return response || [];
};

export const addFacility = async (data: Facility) => {
  const facilites = await getAllFacilities(); //localStorage.getItem(KEYS.facilities);
  facilites.push(data);
  localStorage.setItem(KEYS.facilities, JSON.stringify(facilites));
};

const responseApiPromise = (data: Facility[]) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
