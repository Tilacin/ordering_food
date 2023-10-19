export type MenuType = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img: string;
  
  }[];

  export type ProductType = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    category: string;
  };
  