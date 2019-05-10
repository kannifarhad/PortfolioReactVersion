const menusList = {
   
   "main-menu" : [
         {  
            "icon":"icon-home",
            "link":"",
            "name":"Home Page",
            "id":1
         },
         {  
            "icon":"icon-portfolio",
            "link":"#portfolio",
            "name":"Portfolio",
            "id":2
         },
         {  
            "icon":"icon-blog",
            "link":"#blog",
            "name":"Blog",
            "id":3
         }
         // ,
         // {  
         //    "icon":"",
         //    "link":"#",
         //    "name":"Language",
         //    "id":5,
         //    "children":[  
         //       {  
         //          "icon":"",
         //          "link":"az",
         //          "name":"Azerbaijan",
         //          "id":6
         //       },
         //       {  
         //          "icon":"",
         //          "link":"ru",
         //          "name":"Russian",
         //          "id":7
         //       }
         //    ]
         // }
   ],
   
   "inner-menu" : [
      {  
         "icon":"icon-home",
         "link":"",
         "name":"Inner Home Page",
         "id":1
      },
      {  
         "icon":"icon-portfolio",
         "link":"#portfolio",
         "name":"Portfolio",
         "id":2
      },
      {  
         "icon":"icon-blog",
         "link":"#blog",
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
               "link":"az",
               "name":"Azerbaijan",
               "id":6
            },
            {  
               "icon":"",
               "link":"ru",
               "name":"Russian",
               "id":7
            }
         ]
      }
   ]
 
};

 export default menusList;