import React from "react";
import FormattedPrice from "./FormattedPrice";
import Image from "next/image";
 
interface Props {
  id: number;
  title: string;
  tags: string;
  description: string;
  imageUrl: string;
  price: number;
  discountedPrice: number;
  
}
type Item = {
  item: Props;
};
 
const SearchProducts = ({ item }: Item) => {
  return (
    <div className="flex items-center gap-4">
      
      <div>
        <p className="text-xs -mb-1">
          {item.title}_{item.tags}
        </p>
        <p className="text-lg font-medium">{item.title}</p>
        <p className="text-xs">{item.description}</p>
        <p className="text-sm flex items-center gap-1">
          price:{" "}
          <span className="font-semibold">
            <FormattedPrice amount={item.price} />
          </span>
          <span className="text-gray-600 line-through">
            <FormattedPrice amount={item.price} />
          </span>
        </p>
      </div>
      <div className="flex-1 text-right px-4">
        <p className="text-base font-semibold animate-bounce text-amazon_blue">
          Save <FormattedPrice amount={item.price - item.price} />
        </p>
      </div>
    </div>
  );
};
 
export default SearchProducts;
 