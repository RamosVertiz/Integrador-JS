const productData = [
        {
        id: 1,
        name: "Alemania",
        category: "selecciones",
        promotionPrice: '$ 15000',
        discount: '33% OFF 🔥',
        price:  10000,
        img: "./assests/img/selecciones/alemania.jpg",
        },
        {
        id: 2,
        name: "Argentina",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/argentina.jpg",
        },
        {
        id: 3,
        name: "Brasil",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/brasil.jpg",
        },
        {
        id: 4,
        name: "Camerun",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/camerun.jpg",
        },
        {
        id: 5,
        name: "Croacia",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/croacia.jpg",
        }, 
        {
        id: 6,
        name: "España",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/españa.jpg",
        },
        {
        id: 7,
        name: "Francia",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/francia.jpg",
        },
        {
        id: 8,
        name: "Inglaterra",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/inglaterra.jpg",
        },
        {
        id: 9,
        name: "Italia",
        category: "selecciones",
        promotionPrice: '$ 15000',
        discount: '33% OFF 🔥',
        price:  10000,
        img: "./assests/img/selecciones/italia.jpg",
        },
        {
        id: 10,
        name: "Mexico",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/mexico.jpg",
        },
        {
        id: 11,
        name: "Portugal",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/portugal.jpg",
        },
        {
        id: 12,
        name: "Uruguay",
        category: "selecciones",
        promotionPrice: [],
        discount: '',
        price:  15000,
        img: "./assests/img/selecciones/uruguay.jpg",
        },
        {
        id: 13,
        name: "Boca jrs",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/boca.jpg",
        },
        {
        id: 14,
        name: "Estudiantes",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/estudiantes.jpg",
        },
        {
        id: 15,
        name: "Huracan",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/huracan.jpg",
        },
        {
        id: 16,
        name: "Independiente",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/independiente.jpg",
        },
        {
        id: 17,
        name: "Racing",
        category: "argentina",
        promotionPrice: '$ 14000',
        discount: '35% OFF 🔥',
        price: 9000,
        img: "./assests/img/argentina/racing.jpg",
        },
        {
        id: 18,
        name: "River",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/river.jpg",
        },
        {
        id: 19,
        name: "San Lorenzos",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/sanlorenzo.jpg",
        },
        {
        id: 20,
        name: "Velez Sarfield",
        category: "argentina",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/argentina/velez.jpg",
        },
        {
        id: 21,
        name: "Atlético de Madrid",
        category: "españa",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/españa/atletico.jpg",
        },
        {
        id: 22,
        name: "Barcelona",
        category: "españa",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/españa/barcelona.jpg",
        },
        {
        id: 23,
        name: "Betis",
        category: "españa",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/españa/betis.jpg",
        },
        {
        id: 24,
        name: "Real Madrid",
        category: "españa",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/españa/real.jpg",
        },       
        {
        id: 25,
        name: "Sevilla",
        category: "españa",
        promotionPrice: '$ 14000',
        discount: '35% OFF 🔥',
        price: 9000,
        img: "./assests/img/españa/sevilla.jpg",
        },
        {
        id: 26,
        name: "Valencia",
        category: "españa",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/españa/valencia.jpg",
        },
        {
        id: 27,
        name: "Fiorentina",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/fiore.jpg",
        },
        {
        id: 28,
        name: "inter",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/inter.jpg",
        },
        {
        id: 29,
        name: "juventus",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/juve.jpg",
        },
        {
        id: 30,
        name: "Lazio",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/lazio.jpg",
        },
        {
        id: 31,
        name: "Milan",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/milan.jpg",
        },
        {
        id: 32,
        name: "Napoli",
        category: "italia",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/italia/napoli.jpg",
        },
        {
        id: 33,
        name: "Roma",
        category: "italia",
        promotionPrice: '$ 14000',
        discount: '35% OFF 🔥',
        price: 9000,
        img: "./assests/img/italia/roma.jpg",
        },
        {
        id: 34,
        name: "Arsenal",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/arsenal.jpg",
        },
        {
        id: 35,
        name: "Chelsea",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/chelsea.jpg",
        },
        {
        id: 36,
        name: "Manchester City",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/city.jpg",
        },
        {
        id: 37,
        name: "Liverpool",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/liverpool.jpg",
        },
        {
        id: 38,
        name: "Tottenham",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/tottenham.jpg",
        },
        {
        id: 39,
        name: "Manchester United",
        category: "inglaterra",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/premier/united.jpg",
        },
        {
        id: 40,
        name: "Ajax",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/ajax.jpg",
        },
        {
        id: 41,
        name: "Bayern Munich",
        category: "resto",
        promotionPrice: '$ 14000',
        discount: '35% OFF 🔥',
        price: 9000,
        img: "./assests/img/resto/bayern.jpg",
        },  
        {
        id: 42,
        name: "Benfica",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/benfica.jpg",
        },  
        {
        id: 43,
        name: "Borussia Dortmund",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/borussia.jpg",
        },  
        {
        id: 44,
        name: "Flamengo",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/flamengo.jpg",
        }, 
        {
        id: 45,
        name: "LA Galaxy",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/galaxy.jpg",
        }, 
        {id: 46,
        name: "Gremio",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/gremio.jpg",
        }, 
        {id: 47,
        name: "Palmeiras",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/palmeiras.jpg",
        }, 
        {id: 48,
        name: "Paris Saint Germain",
        category: "resto",
        promotionPrice: [],
        discount: '',
        price: 14000,
        img: "./assests/img/resto/psg.jpg",
        }, 
];

const mostPopularProducts = () => {
    const popularProducts = [];
    for (let i = 0; i < 48; i++) {
      if (i % 8 == 0) {
        popularProducts.push(productData[i]);
      }
    }
    return popularProducts;
  };


