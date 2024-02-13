export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: {
    id: string;
    name: string;
    image: string;
  };
  images: string[];
}
