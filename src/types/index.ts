export type City = {
  id: number;
  department_code: string;
  insee_code: string;
  zip_code: string;
  name: string;
  slug: string;
  gps_lat: number;
  gps_lng: number;
};
export type Department = {
  id: number;
  code: string;
  region_code: string;
  name: string;
  slug: string;
};
export type Region = {
  id: number;
  code: string;
  name: string;
  slug: string;
};
