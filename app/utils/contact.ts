export interface ContactData {
  id: number;
  ayelectrolin: ContactInfo;
  zere_construction: ContactInfo;
  coordinates: Coordinates;
  socials: Social[];
}

export interface ContactInfo {
  logo: string;
  name: string;
  number: string;
  email: string;
  address: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Social {
  id: number;
  platform: string;
  link: string;
  icon: string;
}
