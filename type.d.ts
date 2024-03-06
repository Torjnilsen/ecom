export interface ProductProps{
  id: number;
title: string;
tags: string;
description: string;
imageUrl: string;
price: number;
discountedPrice: number;

}

export interface StoreProduct{
  id: number;
title: string;
tags: string;
description: string;
imageUrl: string;
price: number;
discountedPrice: number;
quantity: number
}

export interface StateProps {
prodictData: [];
favoriteData: [];
userInfo: null | string,
next: any;
}