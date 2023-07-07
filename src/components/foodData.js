



  const foodItems = [

        {
          name: 'Pizza',
          image: 'pizza.jpg',
          description: 'Delicious pizza with various toppings',
          culture: 'Italian',
          recipe: ['make dough', 'make sauce', 'spread sauce and toppings', 'bake', 'enjoy'],
          tags: ['Italian', 'Fast Food'],
          active: false,
          ingredients : [
            { ingredient: 'Pizza dough', quantity: '2 cups' },
            { ingredient: 'Tomato sauce', quantity: '1 cup' },
            { ingredient: 'Mozzarella cheese', quantity: '2 cups' },
            { ingredient: 'Toppings', quantity: 'As desired' },
            { ingredient: 'Olive oil', quantity: '1 tablespoon' },
            { ingredient: 'Salt', quantity: '1/2 teaspoon' },
            { ingredient: 'Italian herbs (e.g., oregano, basil)', quantity: '1 teaspoon' }
          ]
          
        },
        {
          name: 'Sushi',
          image: 'sushi.jpg',

          description: 'Fresh and flavorful sushi rolls',
          culture: 'Japanese',
          recipe: ['Make vinegar rice', 'prepare fish', 'roll', 'cut'],
          tags: ['Japanese', 'Seafood'],
          active: false
        },
        {
          name: 'stir fry',
          image: 'stir-fry.jpg',
          description: 'Tasty stir-fried vegetables and meat',
          culture: 'Asian',
          recipe: ['make rice or noodles', 'wash and cut vegetables', 'cut meat','one by one add ingredients to hot cooking surface', 'add sauces' ],
          tags: ['Asian', 'Healthy'],
          active:false 
        },
        // Add more food objects here
        {
          name: 'Burger',
          image: 'sushi.jpg',
          description: 'Classic burger with juicy patty and toppings',
          culture: 'American',
          recipe: 'Recipe for Burger',
          tags: ['American', 'Fast Food'],
          active: false
        },
        {
          name: 'Pasta',
          image: 'sushi.jpg',
          description: 'Rich and flavorful pasta dish',
          culture: 'Italian',
          recipe: [], 
          tags: ['Italian', 'Comfort Food'],
          active:false 
        },
        {
          name: 'Taco',
          image: 'sushi.jpg',
          description: 'Authentic Mexican taco with various fillings',
          culture: 'Mexican',
          recipe: 'Recipe for Taco',
          tags: ['Mexican', 'Street Food'],
          active: false
        },
        {
          name: 'Sushi Burrito',
          image: 'sushi.jpg',
          description: 'Fusion of sushi and burrito in a delicious wrap',
          culture: 'Fusion',
          recipe: [],
          tags: ['Japanese', 'Mexican', 'Fusion'],
          active:false 
        },
        {
          name: 'Pad Thai',
          image: 'sushi.jpg',
          description: 'Traditional Thai stir-fried noodles with peanuts and lime',
          culture: 'Thai',
          recipe: [],
          tags: ['Thai', 'Street Food'],
          active:false 
        },
        {
          name: 'Chicken Shawarma',
          image: 'sushi.jpg',
          description: 'Flavorful Middle Eastern grilled chicken wrapped in flatbread',
          culture: 'Middle Eastern',
          recipe: [],
          tags: ['Middle Eastern', 'Street Food'],
          active: false
        },
        {
          name: 'Sushi Bowl',
          image: 'sushi.jpg',
          description: 'Deconstructed sushi in a bowl with fresh ingredients',
          culture: 'Japanese',
          recipe: [],
          tags: ['Japanese', 'Healthy', 'Bowl'],
          active:false 
        },
        {
          name: 'Chicken Parmesan',
          image: 'sushi.jpg',
          description: 'Breaded chicken cutlets topped with tomato sauce and cheese',
          culture: 'Italian',
          recipe: [],
          tags: ['Italian', 'Comfort Food'],
          active: false
        },
        {
          name: 'Pho',
          image: 'sushi.jpg',
          description: 'Vietnamese soup with rice noodles, herbs, and meat',
          culture: 'Vietnamese',
          recipe: [],
          tags: ['Vietnamese', 'Soup'],
          active:false 
        },
        {
          name: 'Falafel',
          image: 'sushi.jpg',
          description: 'Crispy vegetarian patties made from chickpeas or fava beans',
          culture: 'Middle Eastern',
          recipe: [],
          tags: ['Middle Eastern', 'Vegetarian'],
          active:false 
        },
        {
          name: 'Burrito Bowl',
          image: 'sushi.jpg',
          description: 'A bowl filled with flavorful Mexican ingredients',
          culture: 'Mexican',
          recipe: [],
          tags: ['Mexican', 'Healthy', 'Bowl'],
          active: false
        },
        {
          name: 'Gyoza',
          image: 'sushi.jpg',
          description: 'Japanese dumplings filled with ground meat and vegetables',
          culture: 'Japanese',
          recipe:[],
          tags: ['Japanese', 'Appetizer'],
          active:false 
        },
      ];



   export default foodItems; 
