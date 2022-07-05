import React, { useState, useReducer } from "react";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cartContext";

const reducer = (state, action) => {
  const { payload } = action;
  const meal = payload?.meal;
  const newCartData = { ...state };
  switch (action.type) {
    case "addItem":
      if (newCartData.items.find((item) => item.id === meal.id)) {
        //如果存在商品
        meal.amount += 1;
      } else {
        //如果不存在商品
        meal.amount = 1;
        newCartData.items.push(meal);
      }
      newCartData.totalAmount += 1;
      newCartData.totalPrice += meal.price;
      return newCartData;
    case "removeItem":
      if (meal.amount === 1) {
        //如果存在商品
        //要从购物车删除这条
        newCartData.items.forEach((item, index) => {
          if (item.id === meal.id) {
            newCartData.items.splice(index, 1);
          }
        });
        meal.amount = 0;
      } else {
        //如果不存在商品
        meal.amount -= 1;
      }
      newCartData.totalAmount -= 1;
      newCartData.totalPrice -= meal.price;
      return newCartData;
    case "clearCart":
      newCartData.items.forEach((item) => delete item.amount);
      newCartData.totalAmount = 0;
      newCartData.totalPrice = 0;
      newCartData.items = [];
      return newCartData;
    default:
      return state;
  }
};

// 模拟一组食物数据
const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包",
    desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
    price: 12,
    amount: 0,
    img: "/img/meals/1.png",
  },
  {
    id: "2",
    title: "双层吉士汉堡",
    amount: 0,
    desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
    price: 20,
    img: "/img/meals/2.png",
  },
  {
    id: "3",
    title: "巨无霸",
    amount: 0,
    desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
    price: 24,
    img: "/img/meals/3.png",
  },
  {
    id: "4",
    title: "麦辣鸡腿汉堡",
    amount: 0,
    desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
    price: 21,
    img: "/img/meals/4.png",
  },
  {
    id: "5",
    title: "板烧鸡腿堡",
    amount: 0,
    desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
    price: 22,
    img: "/img/meals/5.png",
  },
  {
    id: "6",
    title: "麦香鸡",
    amount: 0,
    desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
    price: 14,
    img: "/img/meals/6.png",
  },
  {
    id: "7",
    title: "吉士汉堡包",
    amount: 0,
    desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
    price: 12,
    img: "/img/meals/7.png",
  },
];

const App = () => {
  const [mealData, setMealData] = useState(MEALS_DATA);

  //* 存储购物车的数据：
  //? 1.商品[]
  //? 总数量.totalAmount
  //? 总价格.totalPrice

  const [cartData, dispatch] = useReducer(reducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  //搜索过滤功能
  const filterMeals = (keyword) => {
    const newData = MEALS_DATA.filter((item) => item.title.includes(keyword));
    setMealData(newData);
  };

  return (
    <CartContext.Provider value={{ ...cartData, dispatch }}>
      <FilterMeals filterMeals={filterMeals} />
      <Meals mealData={mealData} />
      <Cart />
    </CartContext.Provider>
  );
};

export default App;
