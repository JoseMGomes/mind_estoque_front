export interface ItemProps {
  id:string;
  name: string;
  image_path: string;
  description: string;
  is_active: boolean;
  is_stock_entry: boolean;
  quant: number;
  value: number;
}
