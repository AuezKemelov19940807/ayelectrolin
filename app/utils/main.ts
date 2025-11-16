export interface MainData {
  id: number;
  banner: MainBanner;
  equipment: MainEquipment;
  priority: MainPriority;
  guarantee: MainGuarantee;
  brand: MainBrand;
  review: MainReview;
  company: MainCompany;
  project: MainProject;
  consultation: MainConsultation;
  seo: MainSeo;
}

export interface MainBanner {
  title: string;
  subtitle?: string;
  image?: string;
  btnText?: string;
}

export interface MainEquipment {
  title: string;
  description: string;
  items: MainEquipmentItem[];
}

export interface MainEquipmentItem {
  id: number;
  title: string;
  image: string;
  largeImage: string;
}

export interface MainPriority {
  id: number;
  title: string;
  btnText: string;
  description: string;
  blocks: MainPriorityBlock[];
}

export interface MainPriorityBlock {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface MainGuarantee {
  title: string;
  blocks: MainGuaranteeBlock[];
  swipers: MainGuaranteeSwiper[];
}

export interface MainGuaranteeBlock {
  id: number;
  title: string;
  description: string;
}

export interface MainGuaranteeSwiper {
  id: number;
  image: string;
}

export interface MainBrand {
  id: number;
  title: string;
  items: MainBrandItem[];
}

export interface MainBrandItem {
  id: number;
  image: string;
}

export interface MainReview {
  id: number;
  title: string;
  items: MainReviewItem[];
}

export interface MainReviewItem {
  id: number;
  description: string;
  fullname: string;
}

export interface MainCompany {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface MainProject {
  id: number;
  title: string;
  subtitle: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
  image_6: string;
  image_7: string;
}

export interface MainConsultation {
  id: number;
  title: string;
  phone_placeholder: string;
  name_placeholder: string;
  message_placeholder: string;
  btn_text: string;
  note_text: string;
  contact_info_text: string;
}

export interface MainSeo {
  title: string;
  og_title: string;
  description: string;
  og_description: string;
  og_image: string;
  twitter_card: string;
}
