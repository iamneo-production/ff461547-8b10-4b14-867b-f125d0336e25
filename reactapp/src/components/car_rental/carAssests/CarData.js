
import img01 from "../carAssets/imgs/carList_imgs/tesla.jpg";
import img02 from "../carAssets/imgs/carList_imgs/toyota.jpg";
import img03 from "../carAssets/imgs/carList_imgs/bmw.jpg";
import img04 from "../carAssets/imgs/carList_imgs/nissan.jpg";
import img05 from "../carAssets/imgs/carList_imgs/ferrari.jpg";
import img06 from "../carAssets/imgs/carList_imgs/benz.jpg";
import img07 from "../carAssets/imgs/carList_imgs/audi.jpg";
import img08 from "../carAssets/imgs/carList_imgs/rolls.jpg";
import img09 from "../carAssets/imgs/carList_imgs/indica.jpg";
import img011 from "../carAssets/imgs/carList_imgs/kiacarnival.jpg";
import img012 from "../carAssets/imgs/carList_imgs/marutisuzuki.jpg";
import img013 from "../carAssets/imgs/carList_imgs/innova.jpg";
import img014 from "../carAssets/imgs/carList_imgs/mahindra.jpg";
import img015 from "../carAssets/imgs/carList_imgs/volkswagen.jpg";
import img016 from "../carAssets/imgs/carList_imgs/hyundai.jpg";
import img017 from "../carAssets/imgs/carList_imgs/landrover.jpg";
import img018 from "../carAssets/imgs/carList_imgs/nissanvan.jpg";
import img019 from "../carAssets/imgs/carList_imgs/tempotraveller.jpg";

const carData = [
  {
    id: 1,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari F8 Tributo",
    imgUrl: img05,
    model: "Model-2019",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 2",
    automatic: "Automatic",
    description:"A luxurious and powerful sports car known for its speed and elegance"},

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota",
    imgUrl: img02,
    model: "Model-2022",
    price: 4500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 4",
    automatic: "Automatic",
    description:
      "A high-performance vehicle from Toyota, combining style, comfort, and cutting-edge technology."},

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 3999,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats -5",
    automatic: "Automatic",
    description:"A compact SUV with a perfect balance of sportiness and practicality, offering a premium driving experience."},

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Altima",
    imgUrl: img04,
    model: "Model-2021",
    price: 4000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 5",
    automatic: "Automatic",
    description:
      "A stylish and sleek coupe that embodies Nissan's commitment to performance and design" },

  {
    id: 5,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Model S",
    imgUrl: img01,
    model: "Model-2019",
    price: 6050,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 5",
    automatic: "Automatic",
    description:"An electric sedan by Tesla, known for its impressive range, innovative features, and sustainable driving"},

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes-Benz GLC",
    imgUrl: img06,
    model: "Model-2015",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 5",
    automatic: "Automatic",
    description:" A luxurious SUV offering exceptional comfort, advanced safety features, and a refined driving experience" },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi e-tron GT",
    imgUrl: img07,
    model: "Model 2021",
    price: 6500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 5",
    automatic: "Automatic",
    description:"A compact car that blends Audi's signature elegance with dynamic performance and advanced technology."
       },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Ghost",
    imgUrl: img08,
    model: "Model 2020",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 5",
    automatic: "Automatic",
    description:" An opulent and prestigious luxury vehicle, representing the pinnacle of automotive craftsmanship" },
  {
    id: 9,
    brand: "Indica",
    rating: 100,
    carName: "Indica Vista",
    imgUrl: img09,
    model: "Model 2021",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "A reliable and fuel-efficient hatchback by Tata Motors, offering practicality and affordability." },
  {
    id: 10,
    brand: "Kia Carniva",
    rating: 94,
    carName: "Kia Carniva",
    imgUrl: img011,
    model: "Model-2020",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats -5",
    automatic: "Automatic",
    description:
      " A spacious and versatile minivan, perfect for family adventures and long journeys."},

  {
    id: 11,
    brand: "Maruti",
    rating: 102,
    carName: "Maruti Suzuki",
    imgUrl: img012,
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 8",
    automatic: "Automatic",
    description:
      "A popular and trusted brand known for its range of reliable and fuel-efficient cars."},

  {
    id: 12,
    brand: "Toyota",
    rating: 132,
    carName: "Toyota innova crysta",
    imgUrl: img013,
    model: "Model-2022",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 8",
    automatic: "Automatic",
    description:
      "A premium MPV with comfortable seating, advanced features, and Toyota's renowned reliability."},

  {
    id: 13,
    brand: "Mahindra",
    rating: 102,
    carName: "Mahindra TUV3009",
    imgUrl: img014,
    model: "Model-2022",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 11",
    automatic: "Automatic",
    description:
      "A rugged and compact SUV designed for off-road capabilities and urban adventures."},

  {
    id: 14,
    brand: "Volkswagen",
    rating: 112,
    carName: "Volkswagen",
    imgUrl: img015,
    model: "Model 3",
    price: 8999,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 11",
    automatic: "Automatic",
    description:
      "A renowned automotive brand known for its stylish designs, quality craftsmanship, and enjoyable driving experience"},

  {
    id: 15,
    brand: "Hyundai",
    rating: 119,
    carName: "Hyundai H1",
    imgUrl: img016,
    model: "Model-2022",
    price: 10000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats -12",
    automatic: "Automatic",
    description:
      " An iconic and capable SUV with exceptional off-road process and rugged elegance."},

  {
    id: 16,
    brand: "Rover",
    rating: 82,
    carName: "Land rover defender",
    imgUrl: img017,
    model: "Model-2020",
    price: 10250,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 12",
    automatic: "Automatic",
    description:
      "A spacious and versatile van suitable for both personal and commercial use."},

  {
    id: 17,
    brand: "Nissan",
    rating: 52,
    carName: "Nissan Minivan",
    imgUrl: img018,
    model: "Model 2020",
    price: 10580,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 20",
    automatic: "Automatic",
    description:
      "A practical and comfortable minivan offering ample space and convenience for passengers."},
  {
    id: 18,
    brand: "Van",
    rating: 100,
    carName: "Tempo-Traveler",
    imgUrl: img019,
    model: "Model-2019",
    price: 11000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats - 15",
    automatic: "Automatic",
    description:
      "A reliable and popular choice for group travel, known for its spaciousness and comfortable seating arrangement"},
];

export default carData;
