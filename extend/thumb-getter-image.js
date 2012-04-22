// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.ImageElementThumbnailGetter');

goog.require('goog.Disposable');
goog.require('goog.asserts');
goog.require('orga.thumb');



/**
 * @constructor
 * @extends {orga.thumb.ThumbnailGetter}
 */
orga.thumb.ImageElementThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.ImageElementThumbnailGetter,
    orga.thumb.ThumbnailGetter);


/**
 * @param {goog.Uri|string} uri A target URI.
 * @return {string} The thumbnail image URI (contains Data scheme URI).
 */
orga.thumb.ImageElementThumbnailGetter.prototype.getImageSrc =
    goog.abstractMethod;


/** @override */
orga.thumb.ImageElementThumbnailGetter.prototype.getElement = function(uri) {
  var elem = goog.dom.createElement('img');
  elem.src = this.getImageSrc(uri);
  goog.events.listenOnce(
      /* src         */ elem,
      /* type        */ goog.events.EventType.ERROR,
      /* listener    */ this.handleError,
      /* opt_capture */ false,
      /* opt_scope   */ this);
  return elem;
};


/**
 * @param {goog.events.Event} e An error event fired from HTMLImageElement.
 */
orga.thumb.ImageElementThumbnailGetter.prototype.handleError = function(e) {
  e.target.src = this.DEFAULT_SRC;
  e.preventDefault();
};
