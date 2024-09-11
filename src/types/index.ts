/*
 * @Author: cci
 * @Date: 2024-08-30 01:37:42
 * @LastEditors: cci
 * @LastEditTime: 2024-09-12 02:29:45
 * @Description: 声明Ts类型，减少重复代码
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */
import type { MouseEventHandler } from "react";

export interface ProductProps {
  name: string;
  image: string;
  info: string;
  model: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ProductProductdProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchProductProps {
  ProductName: string;
  setProductName: (ProductName: string) => void;
}