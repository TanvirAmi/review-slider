// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jon smith",
    job: "web developer",
    img:
      "http://www.tanvir.pro/wp-content/uploads/2021/10/person1-min.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Hike johnson",
    job: "web designer",
    img:
      "http://www.tanvir.pro/wp-content/uploads/2021/10/person2-min.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Tonny jones",
    job: "intern",
    img:
      "http://www.tanvir.pro/wp-content/uploads/2021/10/person3-min.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];


// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextvBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
