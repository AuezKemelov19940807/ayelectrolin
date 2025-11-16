export interface PolicyLink {
  text: string;
  link: string;
}

export interface FooterData {
  id: number;
  copy: string;
  privacy_policy: PolicyLink;
  cookie_policy: PolicyLink;
}
