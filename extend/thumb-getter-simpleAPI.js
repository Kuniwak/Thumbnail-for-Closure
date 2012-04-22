// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://img.simpleapi.net/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.webapi.SimpleApiThumbnailGetter');

goog.require('orga.thumb.webapi.PrefixUriThumbnailGetter');



/**
 * {@link http://img.simpleapi.net/}
 * @constructor
 * @extends {goog.Disposable}
 */
orga.thumb.webapi.SimpleApiThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.webapi.SimpleApiThumbnailGetter,
    orga.thumb.webapi.PrefixUriThumbnailGetter);


/** @const */
orga.thumb.webapi.SimpleApiThumbnailGetter.IMAGE_WIDTH = 128;


/** @const */
orga.thumb.webapi.SimpleApiThumbnailGetter.IMAGE_HEIGHT = 128;


/** @const */
orga.thumb.webapi.SimpleApiThumbnailGetter.PREFIX_URI =
    'http://img.simpleapi.net/small/';


/** @const */
orga.thumb.webapi.SimpleApiThumbnailGetter.prototype.PREFIX_URI =
    orga.thumb.webapi.SimpleApiThumbnailGetter.PREFIX_URI;
