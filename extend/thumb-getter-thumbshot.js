// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://www.thumbshots.com/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.webapi.ThumbShotThumbnailGetter');

goog.require('orga.thumb.webapi.PrefixUriThumbnailGetter');



/**
 * {@link http://www.thumbshots.com/}
 * @constructor
 * @extends {goog.Disposable}
 */
orga.thumb.webapi.ThumbShotThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.webapi.ThumbShotThumbnailGetter,
    orga.thumb.webapi.PrefixUriThumbnailGetter);


/** @const */
orga.thumb.webapi.ThumbShotThumbnailGetter.IMAGE_WIDTH = 120;


/** @const */
orga.thumb.webapi.ThumbShotThumbnailGetter.IMAGE_HEIGHT = 90;


/** @const */
orga.thumb.webapi.ThumbShotThumbnailGetter.PREFIX_URI =
    'http://open.thumbshots.org/image.aspx?url=';


/** @const */
orga.thumb.webapi.ThumbShotThumbnailGetter.prototype.PREFIX_URI =
    orga.thumb.webapi.ThumbShotThumbnailGetter.PREFIX_URI;
