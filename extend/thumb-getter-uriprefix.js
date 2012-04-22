// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://www.thumbshots.com/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.webapi.PrefixUriThumbnailGetter');

goog.require('orga.thumb.ImageElementThumbnailGetter');



/**
 * {@link http://www.thumbshots.com/}
 * @constructor
 * @extends {orga.thumb.ImageElementThumbnailGetter}
 */
orga.thumb.webapi.PrefixUriThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.webapi.PrefixUriThumbnailGetter,
    orga.thumb.ImageElementThumbnailGetter);


/** @const */
orga.thumb.webapi.PrefixUriThumbnailGetter.prototype.PREFIX_URI = null;


/** @override */
orga.thumb.webapi.PrefixUriThumbnailGetter.prototype.disposeInternal =
    function() {
  goog.base(this, 'disposeInternal');
  delete this.PREFIX_URI;
};


/** @override */
orga.thumb.webapi.PrefixUriThumbnailGetter.prototype.getImageSrc =
    function(uri) {
  if (!this.PREFIX_URI) throw 'PREFIX_URI is not exists';
  return this.PREFIX_URI + uri;
};
