
export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    avatar: string;
  };
}

export interface IFormInputs {
id: string;
name: 'title' | 'description' | 'imageURL' | 'price';
label: string;
type: string;

}
export interface ICategory {
  id : number ,
  name :string,
  avatar :string
}

