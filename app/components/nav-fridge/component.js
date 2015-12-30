import Ember from 'ember';

export default Ember.Component.extend({
  selectedIngredientService: Ember.inject.service('selection-ingredient'),

  classNames: ['nav-fridge'],
  classNameBindings: ['isCollapsed:collapsed'],

  isCollapsed: true,

  numIngredients: Ember.computed.alias('selectedIngredientService.getCount'),
  ingredientList: Ember.computed.alias('selectedIngredientService.getSelectedIngredients'),

  showNumIcon: Ember.computed('numIngredients', function () {
    return this.get('numIngredients') > 0;
  }),

  actions: {
    toggleContentList: function () {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
