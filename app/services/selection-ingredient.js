import Ember from 'ember';

// hash of selected ingredients
var selectedIngredients = {};
var selectedIds = [];

export default Ember.Service.extend({
  revisionId: 0,

  getCount: Ember.computed('revisionId', function () {
    return selectedIds.length;
  }),

  getSelectedIngredientIds: Ember.computed('revisionId', function () {
    return selectedIds;
  }),

  getSelectedIngredients: Ember.computed('revisionId', function () {
    return selectedIngredients;
  }),

  addSelectedItem: function (id, name, category) {
    if (!id) {
      throw new Error("Selection Ingredient Service: Ingredient ID not given!");
    }

    if (selectedIngredients[id]) {
      throw new Error("Selection Ingredient Service: Ingredient was already selected!");
    }

    selectedIngredients[id] = { name: name, category: category };
    selectedIds.push(id);
    this._incrementRevisionId();
  },

  removeSelectedItem: function (id) {
    if (!id) {
      throw new Error("Selection Ingredient Service: Ingredient ID not given!");
    }

    if (!selectedIngredients[id]) {
      throw new Error("Selection Ingredient Service: Ingredient was not selected yet!");
    }

    delete selectedIngredients[id];
    selectedIds.removeObject(id);
    this._incrementRevisionId();
  },

  clearSelection: function () {
    selectedIngredients = {};
    selectedIds = [];
    this._incrementRevisionId();
  },

  _incrementRevisionId: function () {
    this.set('revisionId', this.get('revisionId') + 1);
  },

  isSelected: function (id) {
    return !!(selectedIngredients[id]);
  }
});
