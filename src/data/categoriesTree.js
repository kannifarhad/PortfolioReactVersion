const categoriesList = [
        {
        "id":10,
        "title": "Featured Works",
        "slug":"portfolio",
        "description": "Rich experience that I got, using the various technique of programming and designing enable to make high quality and interesting products. I specialize in creating all types of digital graphic designs, web designs and websites. There is a little piece of my works which I did for last year.",
        "children": [
            {   "id":1,
                "title": "Web Design",
                "slug": "webdesign",
                "parent": "portfolio"
            },
            {   "id":2,
                "title": "Graphic Design",
                "slug": "graphicdesign",
                "parent": "portfolio"
            },
            {   "id":3,
                "title": "Programming",
                "slug": "programming",
                "parent": "portfolio"
            }
        ]
        },
];
export default categoriesList;