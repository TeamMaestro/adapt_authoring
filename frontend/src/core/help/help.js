define(function(require) {
  var Origin = require('coreJS/app/origin');

  Origin.on('navigation:help', function() {
    openWikiLink(getLink());
  });

  function getLink() {
    switch (Origin.location.module) {
      case 'dashboard':
        var isShared = Origin.location.route1 === 'shared';
        return '' + (isShared) ? 'shared-courses' : 'the-dashboard';
      case 'project':
        return 'Creating-a-Course#course-details';
      case 'editor':
        return getEditorLink();
      case 'pluginManagement':
        return 'Plugin-Manager';
      case 'assetManagement':
        return 'Asset-Manager';
    }
  }

  function getEditorLink() {
    var link;
    switch (Origin.location.route2) {
      case 'menu':
        link = 'editing-course-details';
        break;
      case 'block':
        link = 'adding-content-to-the-course';
        break;
      case 'edit':
        link = 'sectionpage-settings';
        break;
      case 'page':
        link = 'adding-content-to-the-course';
        break;
      case 'config':
        link = 'course-settings';
        break;
      case 'theme':
        link = 'course-settings';
        break;
      case 'extensions':
        link = 'course-settings';
        break;
      default:
        link = '';
    }
    return 'Creating-a-Course' + (link) ? '#' + link : '';
  }

  function openWikiLink(page) {
    var WIKI_URL = 'https://github.com/adaptlearning/adapt_authoring/wiki/';
    window.open(WIKI_URL + page || '');
  }
});