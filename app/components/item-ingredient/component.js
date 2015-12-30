import Ember from 'ember';

export default Ember.Component.extend({
  selectedIngredientService: Ember.inject.service('selection-ingredient'),

  ingredient: null, // passed from above, mandatory

  classNames: ['item-ingredient'],
  classNameBindings: ['isSelected:selected'],

  isSelected: Ember.computed('selectedIngredientService.revisionId', function () {
    return this.get('selectedIngredientService').isSelected(this.get('ingredient.id'));
  }),

  actions: {
    toggleSelect: function () {
      var selectedService = this.get('selectedIngredientService');
      var id = this.get('ingredient.id');
      var name = this.get('ingredient.name');
      var category = this.get('ingredient.category');

      if (selectedService.isSelected(this.get('ingredient.id'))) {
        selectedService.removeSelectedItem(id);
      } else {
        selectedService.addSelectedItem(id, name, category);
      }
    }
  }
});
