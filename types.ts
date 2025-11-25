export interface ServiceItem {
  name: string;
  description: string;
  duration?: string;
  price?: string;
}

export interface PujaCategory {
  title: string;
  description: string;
  items: PujaItem[];
}

export interface PujaItem {
  name: string;
  whoNeedsIt: string;
  vidhi: string;
  priceStandard?: string;
  pricePremium?: string;
  priceExtra?: string;
}

export interface VastuItem {
  service: string;
  scope: string;
  deliverables: string;
  price: string;
}

export interface NavItem {
  label: string;
  path: string;
}