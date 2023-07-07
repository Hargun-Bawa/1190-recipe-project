tagsList = [
  ['Italian', 'Fast Food', 'Cheese', 'Tomato', 'Savory', 'Crust', 'Oven-baked', 'Popular'],
  ['Japanese', 'Seafood', 'Raw', 'Rice', 'Healthy', 'Soy Sauce', 'Wasabi', 'Artistic'],
  ['Asian', 'Healthy', 'Vegetables', 'Sauce', 'Wok', 'Quick', 'Colorful', 'Aromatic'],
  ['American', 'Fast Food', 'Beef', 'Bun', 'Juicy', 'Grilled', 'Onions', 'All-American'],
  ['Italian', 'Comfort Food', 'Pasta', 'Sauce', 'Creamy', 'Garlic', 'Parmesan', 'Hearty'],
  ['Mexican', 'Street Food', 'Spicy', 'Corn Tortilla', 'Tangy', 'Cilantro', 'Lime', 'Mexican Cuisine'],
  ['Japanese', 'Mexican', 'Fusion', 'Wrap', 'Fresh', 'Avocado', 'Crunchy', 'Inventive'],
  ['Thai', 'Street Food', 'Noodles', 'Peanuts', 'Sweet', 'Sour', 'Cilantro', 'Authentic'],
  ['Middle Eastern', 'Street Food', 'Chicken', 'Flatbread', 'Marinated', 'Tahini', 'Garlic Sauce', 'Tender'],
  ['Japanese', 'Healthy', 'Bowl', 'Rice', 'Colorful', 'Crispy', 'Seaweed', 'Satisfying'],
  ['Italian', 'Comfort Food', 'Chicken', 'Cheese', 'Breaded', 'Baked', 'Savory', 'Delicious'],
  ['Vietnamese', 'Soup', 'Noodles', 'Beef', 'Aromatic', 'Broth', 'Lime', 'Satisfying'],
  ['Middle Eastern', 'Vegetarian', 'Chickpeas', 'Fried', 'Crispy', 'Tahini Sauce', 'Fresh', 'Herbs'],
  ['Mexican', 'Healthy', 'Bowl', 'Rice', 'Protein', 'Beans', 'Salsa', 'Customizable'],
  ['Japanese', 'Appetizer', 'Dumplings', 'Meat', 'Pan-fried', 'Dipping Sauce', 'Crispy', 'Umami']
]

newList = []
for sublist in tagsList:
    for tag in sublist:
        if tag not in newList:
            newList.append(tag)

print(newList)
