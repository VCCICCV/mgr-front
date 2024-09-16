/*
 * @Author: cci
 * @Date: 2024-08-29 23:04:54
 * @LastEditors: cci
 * @LastEditTime: 2024-09-12 03:14:51
 * @Description: 这里用于声明提供了哪些组件，相当于interface 的实现
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */
import CustomHome from "./home/CustomHome";
import CustomButton from "./common/CustomButton";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import CustomFilter from "./common/CustomFilter";
import SearchBar from "./mall/SearchBar";
import SearchProduct from "./mall/SearchProduct";
import ProductDetail from "./mall/ProductDetail";
import ProductCard from "./mall/ProductCard";
import CarDetail from "./home/CarDetail";
import Scene from "./three/Scene";
export {
    // common
    Navbar,
    Footer,
    CustomButton,
    CustomFilter,
    // home
    CustomHome,
    CarDetail,
    // mall
    ProductDetail,
    ProductCard,
    SearchProduct,
    SearchBar,
    // three
    Scene,
}