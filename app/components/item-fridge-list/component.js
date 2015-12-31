import Ember from 'ember';

export default Ember.Component.extend({
  selectedIngredientService: Ember.inject.service('selection-ingredient'),
  ingredient: null, // this gets passed in from above, mandatory

  classNames: ['item-fridge-list'],

  actions: {
    removeIngredient: function () {
      var id = this.get('ingredient').id;
      this.get('selectedIngredientService').removeSelectedItem(id);
    }
  }
});
