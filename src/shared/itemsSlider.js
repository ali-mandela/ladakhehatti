export const SliderItems = [
    {
        id: 1,
        label: "New Launch",
        title: "Spicier Than Ever from the Roots of Ladakh",
        src: "https://img.freepik.com/free-psd/white-metallic-bottle_176382-1360.jpg?t=st=1726" +
                "058583~exp=1726062183~hmac=b89e0f6024e7916f514e391c79a4e1cf898cc4f8269b5b43bee7f" +
                "2faa6d482b2&w=740",
        desc: "Discover the authentic spices of Ladakh, crafted to bring out the natural flavor" +
                "s in your meals. Perfect for spicing up your dishes.",
        path: "/"
    }, {
        id: 2,
        label: "Organic Special",
        title: "Pure Himalayan Honey",
        src: "https://img.freepik.com/free-psd/cosmetic-elements-white-background-mock-up-desi" +
                "gn_1135-79.jpg?t=st=1726058477~exp=1726062077~hmac=c927df2b69ef0ef95c79f6a5b6785" +
                "c9d7bcce81218c5dacd8a54a2bd7fd2c521&w=826",
        desc: "Sourced from the pristine valleys of the Himalayas, our honey is 100% pure, orga" +
                "nic, and full of natural goodness.",
        path: "/"
    }, {
        id: 3,
        label: "Traditional Recipe",
        title: "Himalayan Tsampa Barley Flour",
        src: "https://img.freepik.com/free-psd/coffee-realistic-take-away-isolated_23-21504012" +
                "48.jpg?t=st=1725881865~exp=1725885465~hmac=b7f87e455e048b3042bc2459876b607b5f683" +
                "bd3b952c35a8f013f5144328913&w=740",
        desc: "A staple in Himalayan cuisine, Tsampa is made from roasted barley flour. It's nu" +
                "tritious, versatile, and perfect for soups and porridge.",
        path: "/"
    }, {
        id: 4,
        label: "Limited Edition",
        title: "Himalayan Salt Crystals",
        src: "https://img.freepik.com/free-psd/realistic-shopping-bag-isolated_23-2151568663.j" +
                "pg?t=st=1725881883~exp=1725885483~hmac=0eaf142495158d099f5a2cf7ca2a0460f2057c2ec" +
                "4467133372767d294cb58a5&w=740",
        desc: "Harvested from ancient sea beds in the Himalayas, our salt crystals are unrefine" +
                "d and packed with essential minerals.",
        path: "/"
    }, {
        id: 5,
        label: "Healthy Choice",
        title: "Organic Himalayan Buckwheat",
        src: "https://img.freepik.com/free-psd/mobile-phone-mock-up-design_1297-8.jpg?t=st=172" +
                "5881908~exp=1725885508~hmac=7626a13ce5849387d385d13ea893ca12bd42348bfce998829a94" +
                "4f75bfc4cfae&w=740",
        desc: "Packed with protein and fiber, our organic buckwheat is sourced directly from th" +
                "e Himalayan farms. A great addition to any healthy diet.",
        path: "/"
    }
];


export const ProductItems = [
        {
          id: 1,
          name: "Organic Ladakhi Apricots",
          description: "Sun-dried apricots from the lush orchards of Nubra Valley. These golden fruits are packed with natural sweetness and essential nutrients.",
          price: 299,
          discountPrice: 250,
          weight: "500",
          unit: "g",
          category: "Dried Fruits",
          brand: "Nubra Organics",
          images: {
            primary: "/images/ladakh-apricots-primary.jpg",
            secondary: "/images/ladakh-apricots-secondary.jpg",
          },
          inStock: true,
          stockQuantity: 100,
          ratings: {
            average: 4.7,
            count: 28
          },
          tags: ["organic", "apricots", "dried fruits", "Nubra Valley", "healthy snacks"]
        },
        {
          id: 2,
          name: "Ladakhi Barley Flour  ",
          description: "Traditional stone-ground barley flour, a staple in Ladakhi cuisine. Perfect for making tsampa and other local delicacies.",
          price: 180,
          discountPrice: null,
          weight: "1",
          unit: "kg",
          category: "Flours",
          brand: "Leh Mills",
          images: {
            primary: "/images/barley-flour-primary.jpg",
            secondary: "/images/barley-flour-secondary.jpg",
          },
          inStock: true,
          stockQuantity: 50,
          ratings: {
            average: 4.9,
            count: 42
          },
          tags: ["barley", "flour", "tsampa", "traditional", "gluten-free"]
        },
        {
          id: 3,
          name: "Ladakhi Wild Buckthorn Juice",
          description: "100% pure sea buckthorn juice, known locally as 'Leh Berry'. Rich in vitamins and antioxidants, this tart juice is a Ladakhi superfood.",
          price: 450,
          discountPrice: 399,
          weight: "750",
          unit: "ml",
          category: "Beverages",
          brand: "Ladakh Berries",
          images: {
            primary: "/images/sea-buckthorn-juice-primary.jpg",
            secondary: "/images/sea-buckthorn-juice-secondary.jpg",
          },
          inStock: true,
          stockQuantity: 30,
          ratings: {
            average: 4.6,
            count: 15
          },
          tags: ["sea buckthorn", "juice", "superfood", "antioxidants", "Leh Berry"]
        },
        {
          id: 4,
          name: "Ladakhi Pashmina Shawl",
          description: "Exquisitely soft and warm pashmina shawl, handwoven by skilled artisans in Ladakh using traditional techniques.",
          price: 8000,
          discountPrice: 7500,
          weight: "200",
          unit: "g",
          category: "Textiles",
          brand: "Changthang Crafts",
          images: {
            primary: "/images/pashmina-shawl-primary.jpg",
            secondary: "/images/pashmina-shawl-secondary.jpg",
          },
          inStock: true,
          stockQuantity: 10,
          ratings: {
            average: 5.0,
            count: 7
          },
          tags: ["pashmina", "shawl", "handwoven", "luxury", "traditional craft"]
        }
      ];