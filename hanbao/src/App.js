import React, { useState } from "react";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cartContext";

const App = () => {
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
  const [mealData, setMealData] = useState(MEALS_DATA);

  //* 存储购物车的数据：
  //? 1.商品[]
  //? 总数量.totalAmount
  //? 总价格.totalPrice

  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  //添加商品
  const addItem = (meal) => {
    const newCartData = { ...cartData };

    if (newCartData.items.find((item) => item.id === meal.id)) {
      // TODO:这块使用了对象地址引用。通过把对象通过参数传递过来，改变原始对象
      //如果存在商品
      meal.amount += 1;
    } else {
      //如果不存在商品
      newCartData.items.push(meal);
      meal.amount = 1;
    }
    newCartData.totalAmount += 1;
    newCartData.totalPrice += meal.price;

    setCartData(newCartData);
  };

  //减少商品
  const removeItem = (meal) => {
    const newCartData = { ...cartData };

    if (newCartData.items.find((item) => item.id === meal.id)) {
      //如果存在商品
      meal.amount -= 1;
      newCartData.items.splice(
        1,
        newCartData.items.findIndex((item) => item.id === meal.id)
      );
    } else {
      //如果不存在商品
      meal.amount = 0;
    }
    newCartData.totalAmount -= 1;
    newCartData.totalPrice -= meal.price;

    setCartData(newCartData);
  };

  return (
    <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
      <FilterMeals />
      <Meals mealData={mealData} />
    </CartContext.Provider>
  );
};

export default App;
