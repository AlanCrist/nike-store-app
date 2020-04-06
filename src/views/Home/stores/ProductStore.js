import {decorate, observable} from "mobx";

import MaxImage1 from "../../../assets/max-blackwhite.png";
import MaxImage2 from "../../../assets/max-bluepink.png";
import MaxImage3 from "../../../assets/max-orange.png";
import MaxImage4 from "../../../assets/max-purple.png";
import MaxImage5 from "../../../assets/max-red.png";
import MaxImage6 from "../../../assets/max-rose.png";
import MaxImage7 from "../../../assets/rib63.png";

import nikeCollection from "../../../assets/nike-collection.jpg";
import adidasCollection from "../../../assets/adidas-collection.jpg";
import converseCollection from "../../../assets/converse-collection.jpg";
import vansCollection from "../../../assets/vans-collection.jpg";

class ProductStore {
  cart = [
    {name: "Nike Air Max St1", key: "0", price: 345, image: MaxImage1},
    {name: "Nike Air Max St2", key: "1", price: 565, image: MaxImage2},
    {name: "Nike Air Max St3", key: "2", price: 860, image: MaxImage3},
    {name: "Nike Air Max St4", key: "3", price: 370, image: MaxImage4},
    {name: "Nike Air Max St5", key: "4", price: 299, image: MaxImage5},
    {name: "Nike Air Max St6", key: "5", price: 907, image: MaxImage6},
    {name: "Nike Air Max St7", key: "6", price: 1000, image: MaxImage7},
  ];

  mark = [
    {
      title: "Nike",
      collection: nikeCollection,
      key: "0",
      products: [
        {name: "Nike Air Max St1", key: "0", price: 345, image: MaxImage1},
        {name: "Nike Air Max St2", key: "1", price: 565, image: MaxImage2},
        {name: "Nike Air Max St3", key: "2", price: 860, image: MaxImage3},
        {name: "Nike Air Max St4", key: "3", price: 370, image: MaxImage4},
        {name: "Nike Air Max St5", key: "4", price: 299, image: MaxImage5},
        {name: "Nike Air Max St6", key: "5", price: 907, image: MaxImage6},
        {name: "Nike Air Max St7", key: "6", price: 1000, image: MaxImage7},
      ],
    },
    {
      title: "Adidas",
      collection: adidasCollection,
      key: "10",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
    {
      title: "Converse",
      collection: converseCollection,
      key: "20",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
    {
      title: "Vans",
      collection: vansCollection,
      key: "30",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
  ];
}

decorate(ProductStore, {
  cart: observable,
  mark: observable,
});

export default new ProductStore();
