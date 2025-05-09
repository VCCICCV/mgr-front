export interface ProductSKU {
  id: string;
  category_id: number;
  brand_id: number;
  product_id: number;
  base_price: number;
  stock: number;
  lock_stock: number;
  pic: string;
  default_attribute: Record<string, string>;
  version: number;
  create_time: string;
  is_deleted: 0 | 1;
}

export const initialSKUs: ProductSKU[] = [
  {
    id: "1",
    category_id: 3,
    brand_id: 1,
    product_id: 1,
    base_price: 29999,
    stock: 1000,
    lock_stock: 0,
    pic: "https://example.com/xiaomi-su7.jpg",
    default_attribute: {
      车身颜色: "宝石蓝",
      轮毂样式: "运动轮毂",
      座椅材质: "真皮座椅",
      自动驾驶: "基础L2",
      音响系统: "基础音响",
    },
    version: 0,
    create_time: "2024-10-01 00:00:00",
    is_deleted: 0,
  },
  {
    id: "2",
    category_id: 3,
    brand_id: 1,
    product_id: 2,
    base_price: 32999,
    stock: 1000,
    lock_stock: 0,
    pic: "https://example.com/xiaomi-su7-pro.jpg",
    default_attribute: {
      车身颜色: "宝石蓝",
      轮毂样式: "运动轮毂",
      座椅材质: "真皮座椅",
      自动驾驶: "基础L2",
      音响系统: "基础音响",
    },
    version: 0,
    create_time: "2024-10-01 00:00:00",
    is_deleted: 0,
  },
  {
    id: "3",
    category_id: 3,
    brand_id: 1,
    product_id: 3,
    base_price: 35999,
    stock: 1000,
    lock_stock: 0,
    pic: "https://example.com/xiaomi-su7-max.jpg",
    default_attribute: {
      车身颜色: "宝石蓝",
      轮毂样式: "运动轮毂",
      座椅材质: "真皮座椅",
      自动驾驶: "基础L2",
      音响系统: "基础音响",
    },
    version: 0,
    create_time: "2024-10-01 00:00:00",
    is_deleted: 0,
  },
  {
    id: "4",
    category_id: 3,
    brand_id: 1,
    product_id: 4,
    base_price: 39999,
    stock: 800,
    lock_stock: 0,
    pic: "https://example.com/xiaomi-su7-ultra.jpg",
    default_attribute: {
      车身颜色: "珍珠白",
      轮毂样式: "豪华轮毂",
      座椅材质: "真皮座椅",
      自动驾驶: "全自动驾驶",
      音响系统: "高级音响",
    },
    version: 0,
    create_time: "2024-10-01 00:00:00",
    is_deleted: 0,
  },
  {
    id: "5",
    category_id: 3,
    brand_id: 1,
    product_id: 5,
    base_price: 25999,
    stock: 1200,
    lock_stock: 0,
    pic: "https://example.com/xiaomi-yu7.jpg",
    default_attribute: {
      车身颜色: "矿石银",
      轮毂样式: "运动轮毂",
      座椅材质: "织物座椅",
      自动驾驶: "基础L2",
      音响系统: "基础音响",
    },
    version: 0,
    create_time: "2024-10-01 00:00:00",
    is_deleted: 0,
  },
];
