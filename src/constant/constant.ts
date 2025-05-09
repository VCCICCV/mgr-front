// 模拟配置数据
type Option = {
  id: string;
  name: string;
  price: number;
  color: string;
  type: string;
  displayName?: string;
};

// 定义每个分类的选项数组类型
type CategoryOptions = Option[];

// 定义 configData 的类型
type ConfigData = {
  车身: CategoryOptions;
  车轮: CategoryOptions;
  内饰: CategoryOptions;
  选装: CategoryOptions;
};

// 模拟的 configData
export const configData: ConfigData = {
  车身: [
    {
      id: "color-1",
      name: "blue", // 对应纹理目录名
      displayName: "宝石蓝",
      price: 0,
      color: "#0000FF",
      type: "color",
    },
    {
      id: "color-2",
      name: "white",
      displayName: "珍珠白",
      price: 500,
      color: "#FFFFFF",
      type: "color",
    },
    {
      id: "color-3",
      name: "red",
      displayName: "朱砂红",
      price: 800,
      color: "#FF0000",
      type: "color",
    },
    {
      id: "color-4",
      name: "silver",
      displayName: "矿石银",
      price: 600,
      color: "#C0C0C0",
      type: "color",
    },
  ],
  车轮: [
    {
      id: "wheel-1",
      name: "运动轮毂",
      price: 0,
      color: "#000000",
      type: "wheel",
    },
    {
      id: "wheel-2",
      name: "豪华轮毂",
      price: 2000,
      color: "#FFFFFF",
      type: "wheel",
    },
  ],
  内饰: [
    {
      id: "interior-1",
      name: "真皮座椅",
      price: 0,
      color: "#FFD700",
      type: "inner",
    },
    {
      id: "interior-2",
      name: "人造皮革",
      price: -500,
      color: "#A0A0A0",
      type: "inner",
    },
    {
      id: "interior-3",
      name: "织物座椅",
      price: -1000,
      color: "#808080",
      type: "inner",
    },
  ],
  选装: [
    {
      id: "option-1",
      name: "基础L2",
      price: 0,
      color: "#00FF00",
      type: "option",
    },
    {
      id: "option-2",
      name: "全自动驾驶",
      price: 15000,
      color: "#00FFFF",
      type: "option",
    },
    {
      id: "option-3",
      name: "基础音响",
      price: 0,
      color: "#FFFF00",
      type: "option",
    },
    {
      id: "option-4",
      name: "高级音响",
      price: 3000,
      color: "#FF00FF",
      type: "option",
    },
  ],
};
export const ProductName = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
  { title: "2024", value: "2024" },
  { title: "2025", value: "2025" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "加入我们",
    links: [
      { title: "投递简历", url: "/" },
      { title: "合作", url: "/" },
      { title: "伙伴关系", url: "/" },
      { title: "商业关系", url: "/" },
    ],
  },
  {
    title: "企业信息",
    links: [
      { title: "事件", url: "/" },
      { title: "日报", url: "/" },
      { title: "产品", url: "/" },
      { title: "信用代码", url: "/" },
    ],
  },
  {
    title: "联系方式",
    links: [
      { title: "GitHub", url: "/" },
      { title: "微信公众号", url: "/" },
      { title: "抖音", url: "/" },
    ],
  },
];

// productData 格式
export const productData = [
  {
    id: 1,
    name: "小米SU7",
    carConfiguration: {
      range: "200 - 300km",
      topSpeed: "180km/h",
      acceleration: "3s",
    },
    info: "小米SU7是一款高性能纯电动轿车，搭载先进三电技术与智能驾驶系统，兼具科技感与豪华体验。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 5",
  },
  {
    id: 2,
    name: "小米SU7 Pro",
    carConfiguration: {
      range: "350 - 450km",
      topSpeed: "200km/h",
      acceleration: "8s",
    },
    info: "小米SU7 Pro为性能升级版，配备更大容量电池与双电机四驱系统，提供极致驾驶性能。",
    image: "/image/5.png",
    model: "/public/model/mazda - 3",
  },
  {
    id: 3,
    name: "小米SU7 Max",
    carConfiguration: {
      range: "250 - 350km",
      topSpeed: "190km/h",
      acceleration: "7s",
    },
    info: "小米SU7 Max为旗舰版本，搭载最新一代智能驾驶硬件与空气悬架系统，定义智能电动车新标准。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 30",
  },
  {
    id: 4,
    name: "小米SU7 Ultra",
    carConfiguration: {
      range: "400 - 500km",
      topSpeed: "170km/h",
      acceleration: "9s",
    },
    info: "小米SU7 Ultra为顶级性能版，采用固态电池技术与碳纤维车身，专为追求极致性能的用户打造。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 8",
  },
  {
    id: 4,
    name: "小米SU7 GT",
    carConfiguration: {
      range: "400 - 500km",
      topSpeed: "170km/h",
      acceleration: "9s",
    },
    info: "小米SU7 GT为赛道强化版，配备运动化调校底盘与高性能刹车系统，提供赛道级驾驶体验。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 8",
  },
  {
    id: 5,
    name: "小米SU7 Eco",
    carConfiguration: {
      range: "400 - 500km",
      topSpeed: "170km/h",
      acceleration: "9s",
    },
    info: "小米SU7 Eco为长续航版本，优化能耗表现，适合日常通勤与长途出行，性价比出众。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 8",
  },
  {
    id: 6,
    name: "小米YU7",
    carConfiguration: {
      range: "400 - 500km",
      topSpeed: "170km/h",
      acceleration: "9s",
    },
    info: "小米YU7为旅行打造，优化能耗表现，适合日常通勤与长途出行，性价比出众。",
    image: "/image/5.png",
    model: "/public/model/mazda - cx - 8",
  },
];

// infoData 格式
export const infoData = [
  {
    name: "马自达CX - 5",
    carConfiguration: {
      range: "200 - 300km",
      topSpeed: "180km/h",
      acceleration: "3s",
      seats: 5,
      bodyType: "SUV",
      kerbWeight: "1500kg",
      engineType: "自然吸气",
      engineDisplacement: "2.0L",
      power: "114kW",
      torque: "200N·m",
      transmissionType: "手自一体",
      frontSuspension: "麦弗逊式独立悬挂",
      rearSuspension: "多连杆式独立悬挂",
      steeringAssist: "电动助力转向",
      brakingType: "前碟刹后碟刹",
      brakingDistance: "100 - 0 km/h制动距离为42m",
      airbags: 6,
      ESC: "包含ABS、EBD等",
      activeBraking: "是",
      multimediaSystem: "支持蓝牙连接、USB接口、触摸屏",
      navigationSystem: "有",
      automaticAirConditioning: "是",
      seatMaterial: "真皮",
      sunroofType: "全景天窗",
      rimMaterial: "铝合金",
      tireSpecification: "225/65 R17",
    },
    info: "马自达CX - 5是一款高性能、多功能的SUV，以其出色的性能和舒适的乘坐体验而闻名。",
    image: "/image/mazda - cx - 5.jpg",
  },
  {
    name: "马自达3昂克赛拉",
    carConfiguration: {
      range: "350 - 450km",
      topSpeed: "200km/h",
      acceleration: "8s",
      seats: 5,
      bodyType: "轿车",
      kerbWeight: "1300kg",
      engineType: "自然吸气",
      engineDisplacement: "1.5L",
      power: "86kW",
      torque: "148N·m",
      transmissionType: "手自一体",
      frontSuspension: "麦弗逊式独立悬挂",
      rearSuspension: "扭力梁式非独立悬挂",
      steeringAssist: "电动助力转向",
      brakingType: "前碟刹后碟刹",
      brakingDistance: "100 - 0 km/h制动距离为40m",
      airbags: 6,
      ESC: "包含ABS、EBD等",
      activeBraking: "是",
      multimediaSystem: "支持蓝牙连接、USB接口、触摸屏",
      navigationSystem: "有",
      automaticAirConditioning: "是",
      seatMaterial: "织物",
      sunroofType: "普通天窗",
      rimMaterial: "铝合金",
      tireSpecification: "205/60 R16",
    },
    info: "马自达3昂克赛拉是一款时尚动感的紧凑型轿车，操控性能出色。",
    image: "/image/mazda - 3.jpg",
  },
  {
    name: "马自达CX - 30",
    carConfiguration: {
      range: "250 - 350km",
      topSpeed: "190km/h",
      acceleration: "7s",
      seats: 5,
      bodyType: "SUV",
      kerbWeight: "1400kg",
      engineType: "自然吸气",
      engineDisplacement: "2.0L",
      power: "114kW",
      torque: "200N·m",
      transmissionType: "手自一体",
      frontSuspension: "麦弗逊式独立悬挂",
      rearSuspension: "多连杆式独立悬挂",
      steeringAssist: "电动助力转向",
      brakingType: "前碟刹后碟刹",
      brakingDistance: "100 - 0 km/h制动距离为41m",
      airbags: 6,
      ESC: "包含ABS、EBD等",
      activeBraking: "是",
      multimediaSystem: "支持蓝牙连接、USB接口、触摸屏",
      navigationSystem: "有",
      automaticAirConditioning: "是",
      seatMaterial: "仿皮",
      sunroofType: "全景天窗",
      rimMaterial: "铝合金",
      tireSpecification: "215/55 R18",
    },
    info: "马自达CX - 30是一款精致的小型SUV，兼具实用性和驾驶乐趣。",
    image: "/image/mazda - cx - 30.jpg",
  },
  {
    name: "马自达CX - 8",
    carConfiguration: {
      range: "400 - 500km",
      topSpeed: "170km/h",
      acceleration: "9s",
      seats: 7,
      bodyType: "SUV",
      kerbWeight: "1800kg",
      engineType: "自然吸气",
      engineDisplacement: "2.5L",
      power: "141kW",
      torque: "252N·m",
      transmissionType: "手自一体",
      frontSuspension: "麦弗逊式独立悬挂",
      rearSuspension: "多连杆式独立悬挂",
      steeringAssist: "电动助力转向",
      brakingType: "前碟刹后碟刹",
      brakingDistance: "100 - 0 km/h制动距离为43m",
      airbags: 7,
      ESC: "包含ABS、EBD等",
      activeBraking: "是",
      multimediaSystem: "支持蓝牙连接、USB接口、触摸屏",
      navigationSystem: "有",
      automaticAirConditioning: "是",
      seatMaterial: "真皮",
      sunroofType: "全景天窗",
      rimMaterial: "铝合金",
      tireSpecification: "225/55 R19",
    },
    info: "马自达CX - 8是一款中大型SUV，拥有宽敞的内部空间和豪华的配置。",
    image: "/image/mazda - cx - 8.jpg",
  },
];
// export const configData = {
//   车身: [
//     { id: "color1", name: "珍珠白", price: 1000, value: "#F5F5F5" },
//     { id: "color2", name: "宝石蓝", price: 1500, value: "#2E5AAC" },
//   ],
//   车轮: [
//     { id: "wheel1", name: "运动轮毂", price: 5000, value: "#333333" },
//     { id: "wheel2", name: "豪华轮毂", price: 8000, value: "#555555" },
//   ],
//   内饰: [
//     { id: "interior1", name: "真皮座椅", price: 12000, value: "#964B00" },
//     { id: "interior2", name: "Alcantara", price: 15000, value: "#1A1A1A" },
//   ],
//   选装: [
//     { id: "acc1", name: "高级音响", price: 8000, value: "#FFD700" },
//     { id: "acc2", name: "自动驾驶", price: 20000, value: "#00FF00" },
//   ],
// };
// 基本信息
// 整车性能
// 动力系统
// 地盘操控
// 轮毂/轮胎
// 舒适性配置
// 智能驾驶配置
// 外部配置
// 灯光配置
// 安全配置

export const pageSizeOptions = [10, 20, 50];
