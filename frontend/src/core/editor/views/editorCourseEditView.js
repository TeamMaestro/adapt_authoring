define(function(require) {

  var Backbone = require('backbone');
  var Origin = require('coreJS/app/origin');
  var OriginView = require('coreJS/app/views/originView');

  var EditorCourseEditView = OriginView.extend({
    
    tagName: "div",

    className: "project",

    events: {
      'click .save-button'   : 'saveData',
      'click .cancel-button' : 'cancel'
    },

    preRender: function() {
      this.listenTo(Origin, 'editorSidebar:removeEditView', this.remove);
    },

    cancel: function(event) {
      event.preventDefault();
      Origin.trigger('editorSidebar:removeEditView', this.model);
    },

    saveData: function(event) {
      event.preventDefault();

      var model = this.model;

      model.save({
        title: this.$('.course-title').val(),
        body: this.$('.course-body').val(),
        submit: this.$('.course-submit').val(),
        reset: this.$('.course-reset').val(), 
        showCorrectAnswer: this.$('.course-show-correct').val(),
        hideCorrectAnswer: this.$('.course-hide-correct').val()
      },
      {
        error: function() {
          alert('An error occurred doing the save');
        },
        success: function() {
          Origin.trigger('editor:fetchData');
        }
      });
    }
  
  },
  {
    template: 'editorCourseEdit'
  });

  return EditorCourseEditView;

});