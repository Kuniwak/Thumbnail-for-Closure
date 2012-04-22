// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.ThumbnailGetter');

goog.require('goog.Disposable');
goog.require('goog.asserts');
goog.require('orga.thumb');



/**
 * Abstract class for Web site thumbnail getter.
 * @constructor
 * @extends {goog.Disposable}
 */
orga.thumb.ThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.ThumbnailGetter, goog.Disposable);


/**
 * @param {goog.Uri|string} uri A target URI.
 * @return {Element} An element contains thumbnail image.
 */
orga.thumb.ThumbnailGetter.prototype.getElement = goog.abstractMethod;
