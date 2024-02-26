import React from "react";
import Navbar from "./components/Navbar";
import MainNews from "./components/MainNews";
import WhatsNew from "./components/WhatsNew";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="cursor-pointer">
      <Navbar />
      <div className="flex">
        <MainNews />
        <WhatsNew />
      </div>
      <div className="flex my-6 justify-center gap-4">
        <ProductCard
          ProductNumber="01 "
          ProductName="Reviving Retro PCs"
          Productdetails="What happens when old PCs are given modern upgrades?"
        />
        <ProductCard
          ProductNumber="02 "
          ProductName="Top 10 Laptops of 2022"
          Productdetails="Our best picks for various needs and budgets."
        />
        <ProductCard
          ProductNumber="03 "
          ProductName="The Growth of Gaming"
          Productdetails=" How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
};

export default App;
