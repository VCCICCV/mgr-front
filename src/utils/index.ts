/*
 * @Author: cci
 * @Date: 2024-08-31 19:38:16
 * @LastEditors: cci
 * @LastEditTime: 2024-09-12 04:43:00
 * @Description: 定义fetch函数
 *
 * Copyright (c) 2024 by TGM All Rights Reserved.
 */


export async function fetchProduct() {
  const headers = {
    "Accept":"application/json",
    "Content-Type":"application/json",
    "x-rapidapi-key": "d33bfb7a3bmshce7adf5f4808b66p1ad437jsn9fc250caec70",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch("", {
    headers: headers,
  });
  const result = await response.json();
  return result;
}
