export interface Hospital {
  id: string;
  slug: string;
  name: string;
  name_zh: string;
  tier: string;
  category: string;
  category_label: string;
  city: string;
  specialties: string[];
  languages: string[];
  has_24h_emergency: boolean;
  phone_foreign: string;
  address: string;
  registration_difficulty: string;
  registration_fee_range: string;
  registration_channel: string;
  description: string;
  direct_billing_insurers: string[];
  image_cover: string;
  last_verified: string;
  common_tests: {
    name: string;
    price_range: string;
  }[];
  international_services: {
    languages: string[];
    has_international_coordinators: boolean;
    has_translation_service: boolean;
    has_dedicated_international_floor: boolean;
    appointment_languages: string;
  };
  transportation: {
    nearest_subway: string;
    bus_routes: string[];
    taxi_guide: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  category_label: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface City {
  id: string;
  name: string;
  name_zh: string;
  description: string;
  hospital_count: number;
  top_specialties: string[];
  image_cover: string;
}

export interface PatientStory {
  id: number;
  name: string;
  nationality: string;
  condition: string;
  quote: string;
  initials: string;
  hospital: string;
}

export interface GuideStepItem {
  title: string;
  description: string;
}

export interface GuideStep {
  step: number;
  title: string;
  icon: string;
  items: GuideStepItem[];
}
