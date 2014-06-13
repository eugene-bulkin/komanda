define([
  "jquery",
  "limp"
], function($, _, hbs) {
  
  var Helpers = {
    limp: {
      box: function(template, data, args) {
        var self = this;

        if (args && args.hasOwnProperty('width')) {
          if (args.width) {
            Helpers.limp.options.style.width = args.width;
          };
        };

        var options = $.extend({}, Helpers.limp.options, args);
        options.template = template;
        options.templateData = data;

        var box = $.limp(options);

        return box;
      },

      options: {
        cache: false,
        adjustmentSize: 0,
        loading: true,
        alwaysCenter: true,
        animation: "",
        shadow: "0 0px 20px rgba(0,0,0,0.5)",
        round: 3,
        distance: 10,
        overlayClick: true,
        enableEscapeButton: true,
        dataType: 'html',
        centerOnResize: true,
        closeButton: true,
        style: {
          '-webkit-outline': 0,
          color: '#000',
          position: 'fixed',
          border: 'none',
          outline: 0,
          zIndex: 1000001,
          opacity: 0,
          // overflow: 'auto',
          background: 'transparent'
        },
        inside: {
          background: 'transparent',
          padding: '0',
          display: 'block',
          border: '1px solid #000',
          overflow: 'visible'
        },
        overlay: {
          background: '#151a1f',
          opacity: 0.9
        },
        onOpen: function() {
        },
        afterOpen: function() {
          // $('.add-chosen').chosen();
          // $(".add-chosen").trigger("liszt:updated");
          // ...
        },
        afterDestroy: function() {
        },
        onTemplate: function(template, data, limp) {

          try {
            var $html = template(data);
            console.log($html);
            if ($html.length > 0) { return $html; }
            return false;
          } catch(e) {
            console.error(e)
            return false;
          }

        }
      } // limp options
    }
  };

  return Helpers;
});
