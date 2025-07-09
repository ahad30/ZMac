export type productType = {
    id: string | number,
    thumbnail: string,
    title: string,
    price: number,
    discountPercentage: number,
    description?:string
}

export type TProduct = {
  id: number;
  name: string;
  added_by: string;
  user_id: number;
  category_id: number;
  brand_id: number;
  shop_id: number | null;
  photos: string[];
  thumbnail_img: string;
  warranty: string;
  video_provider: string;
  video_link: string | null;
  tags: string;
  description: string;
  unit_price: number;
  is_unit_discount: number;
  discount_unit_price: number;
  purchase_price: number | null;
  variant_product: number;
  attributes: string;
  choice_options: string;
  colors: string[];
  variations: string | null;
  todays_deal: number;
  best_selling: number;
  published: number;
  approved: number;
  stock_visibility_state: string;
  cash_on_delivery: number;
  featured: number;
  seller_featured: number;
  current_stock: number;
  unit: string;
  min_qty: number;
  low_stock_quantity: number;
  discount: number;
  discount_type: string | null;
  discount_start_date: string | null;
  discount_end_date: string | null;
  tax: number | null;
  tax_type: string | null;
  shipping_type: string | null;
  shipping_cost: number;
  is_shipping_free: number;
  is_quantity_multiplied: number;
  is_individual_sc_applied: number;
  individual_sc_inside: string | null;
  individual_sc_outside: string | null;
  wrapping_enabled: number;
  gift_wrapping_cost: number;
  est_shipping_days: string | null;
  num_of_sale: number;
  meta_title: string;
  meta_description: string;
  meta_img: string;
  pdf: string | null;
  slug: string;
  rating: number;
  barcode: string | null;
  digital: number;
  auction_product: number;
  file_name: string | null;
  file_path: string | null;
  external_link: string | null;
  external_link_btn: string | null;
  wholesale_product: number;
  created_at: string;
  updated_at: string;
  photos_files: string;
  thumbnail_file: string;
  meta_file: string;
};
