// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://mozshot.nemui.org/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.webapi.MozshotThumbnailGetter');

goog.require('orga.thumb.ImageElementThumbnailGetter');



/**
 * {@link http://img.simpleapi.net/}
 * @constructor
 * @extends {orga.thumb.ImageElementThumbnailGetter}
 */
orga.thumb.webapi.MozshotThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.webapi.MozshotThumbnailGetter,
    orga.thumb.ImageElementThumbnailGetter);


/**
 * Available size is:
 * <ul>
 * <li>SMALL 64 ×64 px
 * <li>MEDIUM 256 ×256 px
 * <li>LARGE 800 ×600 px
 * </ul>
 * @enum {string}
 */
orga.thumb.webapi.MozshotThumbnailGetter.SizePreset = {
  /** @const */
  SMALL: 'shot',
  /** @const */
  MEDIUM: 'shot/small',
  /** @const */
  LARGE: 'shot/large'
};


/** @const */
orga.thumb.webapi.MozshotThumbnailGetter.SIZE =
    orga.thumb.webapi.MozshotThumbnailGetter.SizePreset.MEDIUM;


/** @const */
orga.thumb.webapi.MozshotThumbnailGetter.prototype.SIZE =
    orga.thumb.webapi.MozshotThumbnailGetter.SIZE;


/** @const */
orga.thumb.webapi.MozshotThumbnailGetter.PREFIX_URI =
    'http://mozshot.nemui.org/';


/** @const */
orga.thumb.webapi.MozshotThumbnailGetter.prototype.PREFIX_URI =
    orga.thumb.webapi.MozshotThumbnailGetter.PREFIX_URI;


/** @override */
orga.thumb.webapi.MozshotThumbnailGetter.prototype.getImageSrc =
    function(uri) {
  var newUri = this.PREFIX_URI + this.SIZE;
  return newUri + '?' + uri;
};
