import Ember from 'ember';

export default Ember.Component.extend({
  // categories: {1: Grain, 2: Veg & Fruit, 3: Dairy, 4: Meats & Alternatives, 5: Spice, 6: Misc}
  ingredientList: [
    { id: 1, name: "Eggs", category: 4 },
    { id: 2, name: "Milk", category: 3 },
    { id: 3, name: "Broccoli", category: 2 },
    { id: 4, name: "Rice", category: 1 },
    { id: 5, name: "Spaghetti", category: 1 },
    { id: 6, name: "Basil", category: 5 },
    { id: 7, name: "Kale", category: 2 },
    { id: 8, name: "Mozzarella", category: 3 },
    { id: 9, name: "Apples", category: 2 },
    { id: 10, name: "Chicken Breast", category: 4 },
    { id: 11, name: "Salmon", category: 4 },
    { id: 12, name: "Zucchini", category: 2 }
  ],

  getIngredientList: Ember.computed('ingredientList', function () {
    return this.get('ingredientList');
  })
});
