import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['nav-fridge'],
  classNameBindings: ['isCollapsed:collapsed'],

  isCollapsed: true,

  actions: {
    toggleContentList: function () {
      this.set('isCollapsed', !this.get('isCollapsed'));
    }
  }
});
