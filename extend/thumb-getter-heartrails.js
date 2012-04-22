// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://capture.heartrails.com/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.webapi.HeartrailsThumbnailGetter');

goog.require('orga.thumb.ImageElementThumbnailGetter');



/**
 * {@link http://capture.heartrails.com/}
 * @constructor
 * @extends {orga.thumb.ImageElementThumbnailGetter}
 */
orga.thumb.webapi.HeartrailsThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.webapi.HeartrailsThumbnailGetter,
    orga.thumb.ImageElementThumbnailGetter);


/**
 * Note: It is available, when SizePreset.CUSTOM is selected.
 * @const
 */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.IMAGE_WIDTH = null;


/**
 * Note: It is available, when SizePreset.CUSTOM is selected.
 * @const
 */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.IMAGE_HEIGHT = null;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.SHADOW = false;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.SHADOW =
    orga.thumb.webapi.HeartrailsThumbnailGetter.SHADOW;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.ROUNDED_CORNER = false;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.ROUNDED_CORNER =
    orga.thumb.webapi.HeartrailsThumbnailGetter.ROUNDED_CORNER;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.BORDER = false;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.BORDER =
    orga.thumb.webapi.HeartrailsThumbnailGetter.BORDER;


/**
 * Available size is:
 * <ul>
 * <li>TINY 60 ×45 px
 * <li>SMALL 120 ×90 px
 * <li>MEDIUM 200 ×150 px
 * <li>LARGE 400 ×300 px
 * <li>HUGE 640 ×480 px
 * </ul>
 * And custom size is available too.
 * Calcurate size by IMAGE_WIDTH and IMAGE_HEIGHT, if custom is selected.
 * @enum {string}
 */
orga.thumb.webapi.HeartrailsThumbnailGetter.SizePreset = {
  /** @const */
  FREE: 'free',
  /** @const */
  TINY: 'tiny',
  /** @const */
  SMALL: 'small',
  /** @const */
  MEDIUM: 'medium',
  /** @const */
  LARGE: 'large',
  /** @const */
  HUGE: 'huge',
  /** @const */
  CUSTOM: null
};


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.SIZE =
    orga.thumb.webapi.HeartrailsThumbnailGetter.SizePreset.MEDIUM;


/**
 * @const
 */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.SIZE =
    orga.thumb.webapi.HeartrailsThumbnailGetter.SIZE;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.BG_COLOR = null;


/**
 * Hex rgb color is available, such as #ffffff or #123456.
 * Background color is White (#ffffff), if it is null.
 * @const
 */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.BG_COLOR =
    orga.thumb.webapi.HeartrailsThumbnailGetter.BG_COLOR;


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.PREFIX_URI =
    'http://capture.heartrails.com';


/** @const */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.PREFIX_URI =
    orga.thumb.webapi.HeartrailsThumbnailGetter.PREFIX_URI;


/** @override */
orga.thumb.webapi.HeartrailsThumbnailGetter.prototype.getImageSrc =
    function(uri) {
  var newUri = this.PREFIX_URI;
  if (this.SHADOW) newUri += '/shadow';
  if (this.ROUNDED_CORNER) newUri += '/round';
  if (this.BORDER) newUri += '/border';
  if (this.BG_COLOR) newUri += this.BG_COLOR;
  if (this.SIZE) {
    newUri += '/' + this.SIZE;
  } else {
    if (!this.IMAGE_WIDTH && !this.IMAGE_HEIGHT)
      throw 'Image width/height is invalied';
    newUri += '/' + this.IMAGE_WIDTH + 'x' + this.IMAGE_HEIGHT;
  }
  return newUri + '?' + uri;
};
