/// a big list of potential foods and recipes

const foodItems = [

  {
    name: 'Sushi',
    image: 'sushi.jpg',
    description: ' \n Assorted sushi rolls with fresh ingredients',
    culture: 'Japanese',
    recipe: ['prepare sushi rice', 'slice fish and vegetables', 'roll ingredients in seaweed and rice', 'slice into bite-sized pieces', 'serve with soy sauce and wasabi'],
    tags: ['Japanese', 'Seafood'],
    active: true,
    ingredients: [
      { ingredient: 'Sushi rice', quantity: '2 cups' },
      { ingredient: 'Fresh fish (e.g., tuna, salmon)', quantity: 'As desired' },
      { ingredient: 'Vegetables (e.g., cucumber, avocado)', quantity: 'As desired' },
      { ingredient: 'Seaweed sheets', quantity: 'As needed' },
      { ingredient: 'Soy sauce', quantity: 'For dipping' },
      { ingredient: 'Wasabi', quantity: 'For dipping' }
    ],
    index: 0,
    set : function() {
      foodItems[0].active = !foodItems[0].active;
      console.log(foodItems[0].active)
    },
  },

  {
    name: 'Stir Fry',
    image: 'stir-fry.jpg',
    description: 'Quick and flavorful stir-fried dish with vegetables and protein',
    culture: 'Various',
    recipe: ['prep and marinate protein', 'chop vegetables', 'heat oil in a wok or skillet', 'stir-fry protein and vegetables', 'season with sauce and spices', 'serve over rice or noodles'],
    tags: ['Asian', 'Quick and Easy'],
    active: true,
    ingredients: [
      { ingredient: 'Protein (e.g., chicken, beef, tofu)', quantity: 'As desired' },
      { ingredient: 'Assorted vegetables (e.g., bell peppers, broccoli, carrots)', quantity: 'As desired' },
      { ingredient: 'Cooking oil', quantity: '2 tablespoons' },
      { ingredient: 'Sauce (e.g., soy sauce, oyster sauce)', quantity: 'As desired' },
      { ingredient: 'Spices and seasonings', quantity: 'To taste' },
      { ingredient: 'Rice or noodles', quantity: 'As desired' }
    ],
    index: 1   , set : function() {
      foodItems[1].active = !foodItems[1].active;
      console.log(foodItems[0].active)
   
    },
  },

  {
    name: 'Burger',
    image: 'burger.jpg',
    description: 'Classic burger with juicy patty and toppings',
    culture: 'American',
    recipe: ['form ground meat into patties', 'season with salt and pepper', 'cook patties on a grill or stovetop', 'assemble burger with buns and toppings', 'serve with fries'],
    tags: ['American', 'Fast Food'],
    active: true,
    ingredients: [
      { ingredient: 'Ground meat (beef, chicken, or turkey)', quantity: 'As desired' },
      { ingredient: 'Burger buns', quantity: 'As needed' },
      { ingredient: 'Cheese', quantity: 'As desired' },
      { ingredient: 'Toppings (e.g., lettuce, tomato, onion, pickles)', quantity: 'As desired' },
      { ingredient: 'Condiments (e.g., ketchup, mayo, mustard)', quantity: 'As desired' },
      { ingredient: 'Fries', quantity: 'For serving' }
    ],
    index: 2,

    set:function() {
      foodItems[2].active = !foodItems[2].active;
      console.log(foodItems[2].active)
  },
  },
  {
    name: 'Pasta',
    image: 'pasta.jpg',
    description: 'Hearty pasta dish with a variety of sauces and toppings',
    culture: 'Italian',
    recipe: ['boil pasta until al dente', 'prepare sauce (e.g., tomato, cream-based)', 'toss pasta with sauce', 'add desired toppings and seasonings', 'serve with grated cheese and herbs'],
    tags: ['Italian', 'Comfort Food'],
    active: true,
    ingredients: [
      { ingredient: 'Pasta (e.g., spaghetti, penne)', quantity: 'As desired' },
      { ingredient: 'Sauce (e.g., marinara, Alfredo)', quantity: 'As desired' },
      { ingredient: 'Toppings (e.g., grilled chicken, sautéed vegetables)', quantity: 'As desired' },
      { ingredient: 'Cheese (e.g., Parmesan, mozzarella)', quantity: 'As desired' },
      { ingredient: 'Herbs and seasonings', quantity: 'To taste' }
    ],
    index: 3 ,
    set : function() {
      foodItems[3].active = !foodItems[3].active;
      console.log(foodItems[3].active)
    },

  },

  {
    name: 'Taco',
    image: 'taco.jpg',
    description: 'Flavorful tacos with a variety of fillings and toppings',
    culture: 'Mexican',
    recipe: ['prepare taco shells or tortillas', 'cook protein (e.g., beef, chicken, fish)', 'chop toppings (e.g., lettuce, tomato, onion, cilantro)', 'assemble tacos with fillings and toppings', 'serve with salsa and guacamole'],
    tags: ['Mexican', 'Street Food'],
    active: true,
    ingredients: [
      { ingredient: 'Taco shells or tortillas', quantity: 'As needed' },
      { ingredient: 'Protein (e.g., beef, chicken, fish)', quantity: 'As desired' },
      { ingredient: 'Toppings (e.g., lettuce, tomato, onion, cilantro)', quantity: 'As desired' },
      { ingredient: 'Salsa', quantity: 'For serving' },
      { ingredient: 'Guacamole', quantity: 'For serving' },
      { ingredient: 'Seasonings and spices', quantity: 'To taste' }
    ],
    index: 4,   set : function() {
      foodItems[4].active = !foodItems[4].active;
      console.log(foodItems[4].active)
    },
  },

  // Generate objects for the remaining food items
  {
    name: 'Sushi Burrito',
    image: 'sushi-burrito.jpg',
    description: 'Fusion of sushi and burrito in a delicious wrap',
    culture: 'Fusion',
    recipe: ['prepare sushi rice', 'slice fish and vegetables', 'roll ingredients in seaweed and rice', 'slice into bite-sized pieces', 'serve with soy sauce and wasabi', 'wrap the ingredients in a large tortilla'],
    tags: ['Japanese', 'Mexican', 'Fusion'],
    active: false,
    ingredients: [
      { ingredient: 'Sushi rice', quantity: '2 cups' },
      { ingredient: 'Fresh fish (e.g., tuna, salmon)', quantity: 'As desired' },
      { ingredient: 'Vegetables (e.g., cucumber, avocado)', quantity: 'As desired' },
      { ingredient: 'Seaweed sheets', quantity: 'As needed' },
      { ingredient: 'Soy sauce', quantity: 'For dipping' },
      { ingredient: 'Wasabi', quantity: 'For dipping' },
      { ingredient: 'Large tortilla', quantity: '1' }
    ],
index: 5,
set : function() {
  foodItems[5].active = !foodItems[5].active;
  console.log(foodItems[5].active)
},
  },

  {
    name: 'Pad Thai',
    image: 'pad-thai.jpg',
    description: 'Traditional Thai stir-fried noodles with peanuts and lime',
    culture: 'Thai',
    recipe: ['soak rice noodles in warm water until softened', 'heat oil in a wok or skillet', 'add garlic and protein, cook until done', 'push the ingredients to one side, crack eggs into the empty space and scramble', 'add noodles to the wok, along with fish sauce, sugar, and tamarind paste', 'stir-fry everything together until well combined', 'add bean sprouts, green onions, and peanuts', 'toss everything together and cook for a few more minutes', 'serve hot with lime wedges'],
    tags: ['Thai', 'Street Food'],
    active: false,
    ingredients: [
      { ingredient: 'Rice noodles', quantity: '8 oz' },
      { ingredient: 'Protein (e.g., shrimp, chicken, tofu)', quantity: 'As desired' },
      { ingredient: 'Eggs', quantity: '2' },
      { ingredient: 'Garlic', quantity: '3 cloves' },
      { ingredient: 'Bean sprouts', quantity: '1 cup' },
      { ingredient: 'Green onions', quantity: '1/4 cup' },
      { ingredient: 'Peanuts', quantity: '1/4 cup' },
      { ingredient: 'Lime wedges', quantity: 'For serving' },
      { ingredient: 'Fish sauce', quantity: '2 tablespoons' },
      { ingredient: 'Sugar', quantity: '1 tablespoon' },
      { ingredient: 'Tamarind paste', quantity: '1 tablespoon' },
      { ingredient: 'Cooking oil', quantity: '2 tablespoons' }
    ],
    index: 6, 
    set : function() {
      foodItems[6].active = !foodItems[6].active;
      console.log(foodItems[6].active)
    },
  },

  {
    name: 'Chicken Shawarma',
    image: 'chickenshawarma.jpg',
    description: 'Flavorful Middle Eastern grilled chicken wrapped in flatbread',
    culture: 'Middle Eastern',
    recipe: ['marinate chicken with yogurt, lemon juice, garlic, and spices for at least 1 hour', 'grill or pan-fry the chicken until cooked through', 'slice the chicken into thin strips', 'warm the flatbread or pita bread', 'spread a layer of tahini sauce on the bread', 'add chicken strips, lettuce, tomatoes, cucumbers, and onions', 'wrap the bread tightly around the fillings'],
    tags: ['Middle Eastern', 'Street Food'],
    active: false,
    ingredients: [
      { ingredient: 'Boneless chicken thighs', quantity: '1 lb' },
      { ingredient: 'Yogurt', quantity: '1/2 cup' },
      { ingredient: 'Lemon juice', quantity: '2 tablespoons' },
      { ingredient: 'Garlic', quantity: '3 cloves' },
      { ingredient: 'Cumin', quantity: '1 teaspoon' },
      { ingredient: 'Paprika', quantity: '1 teaspoon' },
      { ingredient: 'Turmeric', quantity: '1/2 teaspoon' },
      { ingredient: 'Cayenne pepper', quantity: '1/2 teaspoon' },
      { ingredient: 'Salt', quantity: '1/2 teaspoon' },
      { ingredient: 'Black pepper', quantity: '1/4 teaspoon' },
      { ingredient: 'Flatbread or pita bread', quantity: '4 pieces' },
      { ingredient: 'Tahini sauce', quantity: 'For serving' },
      { ingredient: 'Lettuce', quantity: 'For serving' },
      { ingredient: 'Tomatoes', quantity: 'For serving' },
      { ingredient: 'Cucumbers', quantity: 'For serving' },
      { ingredient: 'Onions', quantity: 'For serving' }
    ],
    index: 7, 
    set : function() {
      foodItems[7].active = !foodItems[7].active;
      console.log(foodItems[7].active)
    },},

  {
    name: 'Sushi Bowl',
    image: 'sushi-bowl.jpg',
    description: 'Deconstructed sushi in a bowl with fresh ingredients',
    culture: 'Japanese',
    recipe: ['prepare sushi rice', 'slice fish and vegetables', 'arrange sushi rice in a bowl', 'top with sliced fish, vegetables, and seaweed salad', 'serve with pickled ginger, soy sauce, and wasabi'],
    tags: ['Japanese', 'Healthy', 'Bowl'],
    active: false,
    ingredients: [
      { ingredient: 'Sushi rice', quantity: '2 cups' },
      { ingredient: 'Fresh fish (e.g., tuna, salmon)', quantity: 'As desired' },
      { ingredient: 'Assorted vegetables (e.g., cucumber, avocado, carrots)', quantity: 'As desired' },
      { ingredient: 'Seaweed salad', quantity: '1 cup' },
      { ingredient: 'Pickled ginger', quantity: 'For serving' },
      { ingredient: 'Soy sauce', quantity: 'For serving' },
      { ingredient: 'Wasabi', quantity: 'For serving' }
    ],
    index: 8, 
    set : function() {
      foodItems[8].active = !foodItems[8].active;
      console.log(foodItems[8].active)
    },
  },

  {
    name: 'Chicken Parmesan',
    image: 'chicken-parmesan.jpg',
    description: 'Breaded chicken cutlets topped with tomato sauce and cheese',
    culture: 'Italian',
    recipe: ['preheat the oven to 375°F (190°C)', 'pound the chicken cutlets to an even thickness', 'dip each cutlet into beaten eggs', 'coat the cutlets in a mixture of breadcrumbs, Parmesan cheese, and Italian seasoning', 'heat oil in a large skillet over medium heat', 'cook the breaded cutlets until golden brown on both sides', 'transfer the cooked cutlets to a baking dish', 'top each cutlet with tomato sauce and shredded mozzarella cheese', 'bake for 15-20 minutes, or until the cheese is melted and bubbly', 'serve hot with cooked pasta or as a sandwich filling'],
    tags: ['Italian', 'Comfort Food'],
    active: false,
    ingredients: [
      { ingredient: 'Chicken cutlets', quantity: '4 pieces' },
      { ingredient: 'Breadcrumbs', quantity: '1 cup' },
      { ingredient: 'Parmesan cheese', quantity: '1/2 cup' },
      { ingredient: 'Italian seasoning', quantity: '1 tablespoon' },
      { ingredient: 'Eggs', quantity: '2' },
      { ingredient: 'Cooking oil', quantity: '2 tablespoons' },
      { ingredient: 'Tomato sauce', quantity: '2 cups' },
      { ingredient: 'Mozzarella cheese', quantity: '1 cup' },
      { ingredient: 'Cooked pasta or bread', quantity: 'For serving' }
    ],
    index: 9,
    set : function() {
      foodItems[9].active = !foodItems[9].active;
      console.log(foodItems[9].active)
    },},

  {
    name: 'Pho',
    image: 'pho.jpg',
    description: 'Traditional Vietnamese soup with noodles, herbs, and meat',
    culture: 'Vietnamese',
    recipe: ['simmer beef or chicken bones with aromatics to make the broth', 'cook rice noodles according to package instructions', 'slice raw beef or chicken into thin strips', 'arrange cooked noodles and raw meat in a bowl', 'pour hot broth over the noodles and meat', 'top with bean sprouts, herbs, and lime wedges', 'serve with hoisin sauce and sriracha on the side'],
    tags: ['Vietnamese', 'Soup'],
    active: false,
    ingredients: [
      { ingredient: 'Beef or chicken bones', quantity: '2-3 lbs' },
      { ingredient: 'Aromatics (onion, ginger, star anise, cinnamon)', quantity: 'As desired' },


      { ingredient: 'Rice noodles', quantity: '8 oz' },
      { ingredient: 'Raw beef or chicken', quantity: 'As desired' },
      { ingredient: 'Bean sprouts', quantity: '1 cup' },
      { ingredient: 'Herbs (e.g., Thai basil, cilantro, mint)', quantity: 'As desired' },
      { ingredient: 'Lime wedges', quantity: 'For serving' },
      { ingredient: 'Hoisin sauce', quantity: 'For serving' },
      { ingredient: 'Sriracha', quantity: 'For serving' }
    ],
    index: 10,   set : function() {
      foodItems[10].active = !foodItems[10].active;
      console.log(foodItems[10].active)
    },
  },

  {
    name: 'Falafel',
    image: 'falafel.jpg',
    description: 'Deep-fried chickpea patties served in pita bread',
    culture: 'Middle Eastern',
    recipe: ['soak dried chickpeas overnight', 'drain and blend chickpeas with herbs, spices, and onion', 'form the mixture into small patties', 'deep-fry the patties until golden brown and crispy', 'serve the falafel in pita bread with tahini sauce and toppings'],
    tags: ['Middle Eastern', 'Street Food'],
    active: false,
    ingredients: [
      { ingredient: 'Dried chickpeas', quantity: '1 cup' },
      { ingredient: 'Onion', quantity: '1/2' },
      { ingredient: 'Garlic cloves', quantity: '2' },
      { ingredient: 'Fresh parsley', quantity: '1/2 cup' },
      { ingredient: 'Fresh cilantro', quantity: '1/2 cup' },
      { ingredient: 'Ground cumin', quantity: '1 teaspoon' },
      { ingredient: 'Ground coriander', quantity: '1 teaspoon' },
      { ingredient: 'Baking powder', quantity: '1/2 teaspoon' },
      { ingredient: 'Salt', quantity: '1/2 teaspoon' },
      { ingredient: 'Black pepper', quantity: '1/4 teaspoon' },
      { ingredient: 'Vegetable oil', quantity: 'For frying' },
      { ingredient: 'Pita bread', quantity: 'For serving' },
      { ingredient: 'Tahini sauce', quantity: 'For serving' },
      { ingredient: 'Toppings (e.g., lettuce, tomatoes, cucumbers)', quantity: 'As desired' }
    ],
    index: 11,   set : function() {
      foodItems[11].active = !foodItems[11].active;
      console.log(foodItems[11].active)
    },
    
  },

  {
    name: 'Burrito Bowl',
    image: 'burrito-bowl.jpg',
    description: 'A deconstructed burrito served in a bowl with rice, beans, and toppings',
    culture: 'Mexican',
    recipe: ['cook rice and beans according to package instructions', 'season cooked rice with lime juice and cilantro', 'assemble the bowl with rice, beans, and toppings', 'top with salsa, guacamole, and sour cream', 'serve with tortilla chips on the side'],
    tags: ['Mexican', 'Bowl'],
    active: false,
    ingredients: [
      { ingredient: 'Cooked rice', quantity: 'As desired' },
      { ingredient: 'Cooked beans (e.g., black beans, pinto beans)', quantity: 'As desired' },
      { ingredient: 'Lime juice', quantity: 'To taste' },
      { ingredient: 'Fresh cilantro', quantity: 'To taste' },
      { ingredient: 'Toppings (e.g., grilled chicken, roasted vegetables)', quantity: 'As desired' },
      { ingredient: 'Salsa', quantity: 'For serving' },
      { ingredient: 'Guacamole', quantity: 'For serving' },
      { ingredient: 'Sour cream', quantity: 'For serving' },
      { ingredient: 'Tortilla chips', quantity: 'For serving' }
    ],
    index: 12,    set : function() {
      foodItems[12].active = !foodItems[12].active;
      console.log(foodItems[12].active)
    },
  },

  {
    name: 'Gyoza',
    image: 'gyoza.jpg',
    description: 'Japanese dumplings filled with ground meat and vegetables',
    culture: 'Japanese',
    recipe: ['prepare the dumpling filling with ground meat, vegetables, and seasonings', 'place a small amount of filling in the center of a dumpling wrapper', 'fold the wrapper in half and pleat the edges to seal the dumpling', 'pan-fry the dumplings until the bottom is golden brown', 'add water to the pan and cover to steam the dumplings', 'cook until the water has evaporated and the dumplings are cooked through', 'serve hot with dipping sauce'],
    tags: ['Japanese', 'Appetizer'],
    active: false,
    ingredients: [
      { ingredient: 'Ground meat (e.g., pork, chicken)', quantity: '1/2 lb' },
      { ingredient: 'Cabbage', quantity: '1 cup, finely chopped' },
      { ingredient: 'Green onions', quantity: '1/4 cup, finely chopped' },
      { ingredient: 'Garlic cloves', quantity: '2, minced' },
      { ingredient: 'Ginger', quantity: '1 teaspoon, grated' },
      { ingredient: 'Soy sauce', quantity: '1 tablespoon' },
      { ingredient: 'Sesame oil', quantity: '1 teaspoon' },
      { ingredient: 'Salt', quantity: '1/2 teaspoon' },
      { ingredient: 'Black pepper', quantity: '1/4 teaspoon' },
      { ingredient: 'Dumpling wrappers', quantity: '20-30' },
      { ingredient: 'Water', quantity: 'For cooking' },
      { ingredient: 'Dipping sauce (e.g., soy sauce, vinegar)', quantity: 'For serving' }
    ],
    index: 13 ,   set : function() {
      foodItems[13].active = !foodItems[ 13].active;
      console.log(foodItems[13].active)
    },
  },

  {
    name: 'Pizza',
    image: 'pizza.jpg',
    description: 'Delicious pizza with various toppings',
    culture: 'Italian',
    recipe: ['make dough', 'make sauce', 'spread sauce and toppings', 'bake', 'enjoy'],
    tags: ['Italian', 'Fast Food'],
    active: false,
    ingredients: [
      { ingredient: 'Pizza dough', quantity: '2 cups' },
      { ingredient: 'Tomato sauce', quantity: '1 cup' },
      { ingredient: 'Mozzarella cheese', quantity: '2 cups' },
      { ingredient: 'Toppings', quantity: 'As desired' },
      { ingredient: 'Olive oil', quantity: '1 tablespoon' },
      { ingredient: 'Salt', quantity: '1/2 teaspoon' },
      { ingredient: 'Italian herbs (e.g., oregano, basil)', quantity: '1 teaspoon' }
    ],
    index: 14,   set : function() {
      foodItems[14].active = !foodItems[14].active;
      console.log(foodItems[14].active)
    },
  },
]

export default foodItems; 
