import Barba from 'barba.js'

class BarbaHelper
{
    /**
     * Constructor
     */
    constructor( options )
    {

    }

    getLink(className) {
        return document.querySelectorAll(className)
    }

    settings() {
        Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, barbaContainer, newPageRawHTML) {

            if ( Barba.HistoryManager.history.length === 1 ) {  // Première vue
               return; // Aucune mise à jour n'est nécessaire pour le moment
            }

            // J'ai emprunté à jquery-pjax
            var $newPageHead = jQuery( '<head />' ).html(
                jQuery.parseHTML(
                  newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
                  document,
                  true
               )
            );
            // Tag que vous souhaitez modifier (Veuillez modifier en fonction de votre environnement)
            var headTags = [
               "link[rel='canonical']",
               "link[rel='shortlink']",
               "link[rel='alternate']",
               "meta[name='description']",
               "meta[property^='og']",
               "meta[name^='twitter']",
               "meta[name='robots']"
            ].join( ',' );
            jQuery('head').find(headTags).remove(); // Supprimer le tag
            $newPageHead.find(headTags).appendTo('head'); // Ajouter un tag
         });
    }

    fadeTransition() {
        var FadeTransition = Barba.BaseTransition.extend({
            start: function() {
              Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
            },

            fadeOut: function() {

              return jQuery(this.oldContainer).animate({ opacity: 0 }).promise();
            },

            fadeIn: function() {

              var _this = this;
              var $el = jQuery(this.newContainer);

              jQuery(this.oldContainer).hide();

              $el.css({
                visibility : 'visible',
                opacity : 0
              });

              $el.animate({ opacity: 1 }, 400, function() {

                _this.done();
                window.flinked.reinit()
              });
            }
          });

          return FadeTransition
    }

    init() {

    }
}

export default BarbaHelper
