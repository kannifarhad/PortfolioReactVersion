const mainMenu = [  
    {  
       "icon":"icon-home",
       "link":"http://localhost:3000/",
       "name":"Home Page",
       "id":1
    },
    {  
       "icon":"icon-portfolio",
       "link":"http://localhost:3000/#portfolio",
       "name":"Portfolio",
       "id":2
    },
    {  
       "icon":"icon-blog",
       "link":"http://localhost:3000/#blog",
       "name":"Blog",
       "id":3
    },
    {  
       "icon":"",
       "link":"#",
       "name":"Language",
       "id":5,
       "children":[  
          {  
             "icon":"",
             "link":"http://localhost:3000/az",
             "name":"Azerbaijan",
             "id":6
          },
          {  
             "icon":"",
             "link":"http://localhost:3000/ru",
             "name":"Russian",
             "id":7
          }
       ]
    }
 ];

 export default mainMenu;