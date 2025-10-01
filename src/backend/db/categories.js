import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "farmer Salvo : Animal products",
    description:"a natural or chemical substance that is put on land or soil to make plants grow better",
    imgSrc:"https://www.shutterstock.com/shutterstock/photos/1334455448/display_1500/stock-photo-foods-high-in-animal-protein-on-grey-background-1334455448.jpg",
  },
  {
    _id: uuid(),
    categoryName: "farmer Med : Arable crops and plant based products",
    description:
      "a chemical substance that is used for killing bugs especially insects, that eat food crops",
      imgSrc:"https://agriculture.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-11/news-forecasts-eu-feed-protein-prod-trade_600x400.jpg?itok=5BBBLtWf"
    },
  {
    _id: uuid(),
    categoryName: "farmer Totti : Fruit, vegetables and olive oil",
    description:
      "Agricultural tools are instruments that are used in the fields to aid in the agricultural process.",
      imgSrc:"https://ichef.bbci.co.uk/images/ic/976xn/p0bfxggm.jpg",
  },
  {
    _id: uuid(),
    categoryName: "farmer Angelotti : Non‐edible Seeds",
    description:
      "Vegetables & Fruits Seeds",
      imgSrc:"https://5.imimg.com/data5/BE/MO/MY-4053415/cassia-tora-seeds-250x250.jpg",
  },
  {
    _id: uuid(),
    categoryName: "farmer crespo : Wine, beverages and food preparations",
    description: "Safety Wearables such as shoes, gloves etc",
     imgSrc:"https://qtportdouglas.com.au/wp-content/uploads/2024/11/1086x672_antipasti-wine.jpg",
  },
  {
    _id: uuid(),
    categoryName: "farmer Gilardino : Coffee, tea, cocoa and spices",
    description:"Sensors, testers, torch & gadgets for farming",
     imgSrc:"https://www.foodbusinessmea.com/wp-content/uploads/2024/10/Dairy-and-Beverage3.webp",
  },
];
