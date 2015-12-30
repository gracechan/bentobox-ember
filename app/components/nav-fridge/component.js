import Ember from 'ember';

export default Ember.Component.extend({
  selectedIngredientService: Ember.inject.service('selection-ingredient'),

  classNames: ['nav-fridge'],
  classNameBindings: ['isCollapsed:collapsed'],

  isCollapsed: true,

  numIngredients: Ember.computed.alias('selectedIngredientService.getCount'),
  hasIngredients: Ember.computed('numIngredients', function () {
    return this.get('numIngredients') > 0;
  }),

  ingredientList: Ember.computed('selectedIngredientService.revisionId', function () {
    var ingredientData = this.get('selectedIngredientService.getSelectedIngredients');
    var ingredientIds = this.get('selectedIngredientService.getSelectedIngredientIds');

    var lst = ingredientIds.map(function (id) {
      var name = ingredientData[id].name;
      var category = ingredientData[id].category;
      return { id: id, name: name, category: category };
    });

    return lst;
  }),

  actions: {
    toggleContentList: function () {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
