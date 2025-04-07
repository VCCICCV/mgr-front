/*
 * @Author: cci
 * @Date: 2024-08-30 01:37:42
 * @LastEditors: cci
 * @LastEditTime: 2024-09-12 02:29:45
 * @Description: 声明Ts类型，减少重复代码
 *
 * Copyright (c) 2024 by TGM All Rights Reserved.
 */
import type { JSX, MouseEventHandler } from "react";
// import { CarProps } from './index';
// export interface CarProps {
//   city_mpg: number;
//   class: string;
//   combination_mpg: number;
//   cylinders: number;
//   displacement: number;
//   drive: string;
//   fuel_type: string;
//   highway_mpg: number;
//   make: string;
//   model: string;
//   transmission: string;
//   year: number;
// }
export interface CarProps {
  name: string;
  carConfiguration: {
    range: string;
    topSpeed: string;
    acceleration: string;
  };
  info: string;
  image: string;
  model: string;
}
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
// 按钮类型声明
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
// 车类型
export type Car = {
  name: string;
  imageSrc: string;
  brandLogoSrc: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  modelTsx: (props: any) => JSX.Element;
  moreInformation?: MoreInformation;
  colors?: CarColor[];
  annotations?: AnnotationData[];
};
// 信息
export type MoreInformation = {
  manufacturer: string;
  production: string;
  assembly: string;
  topSpeed: string;
  drag: string;
  class: string;
  bodyStyle: string;
  layout: string;
  engine: string;
  powerOutput: string;
  transmission: string;
  wheelbase: string;
  length: string;
  width: string;
  height: string;
  kerbWeight: string;
  predecessor: string;
  successor: string;
};
// 颜色
export type CarColor = {
  name: string;
  hexCode: string;
};
// 动画数据类型
export type AnnotationData = {
  index: number;
  label: string;
  description: string;
  position: { x: number; y: number; z: number };
  cameraPosition: { x: number; y: number; z: number };
};
