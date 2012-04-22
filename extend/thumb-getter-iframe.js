// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting page thumbnail using
 *    {@link http://img.simpleapi.net/}.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.thumb.IFrameThumbnailGetter');

goog.require('goog.cssom');
goog.require('goog.dom');
goog.require('orga.thumb.ThumbnailGetter');



/**
 * {@link http://img.simpleapi.net/}
 * @constructor
 * @extends {goog.Disposable}
 */
orga.thumb.IFrameThumbnailGetter = function() {
  goog.base(this);
};
goog.inherits(orga.thumb.IFrameThumbnailGetter,
    orga.thumb.ThumbnailGetter);


/** @const */
orga.thumb.IFrameThumbnailGetter.IMAGE_WIDTH = 200;


/** @const */
orga.thumb.IFrameThumbnailGetter.IMAGE_HEIGHT = 150;


/** @const */
orga.thumb.IFrameThumbnailGetter.prototype.IMAGE_WIDTH =
    orga.thumb.IFrameThumbnailGetter.IMAGE_WIDTH;


/** @const */
orga.thumb.IFrameThumbnailGetter.prototype.IMAGE_HEIGHT =
    orga.thumb.IFrameThumbnailGetter.IMAGE_HEIGHT;


/** @override */
orga.thumb.ThumbnailGetter.prototype.getElement = function(uri) {
  var wrapper = goog.dom.createDom('div', 'orga-thumb-iframe-wrapper' +
                                   ' orga-thumb-iframe-size');
  var iframe = goog.dom.createDom('iframe', 'orga-thumb-iframe-content');
  iframe.scrolling = 'no';
  iframe.frameBorder = 0;
  iframe.src = uri;

  var shield = goog.dom.createDom('div', 'orga-thumb-iframe-shield' +
                                  ' orga-thumb-iframe-size');
  wrapper.appendChild(iframe);
  wrapper.appendChild(shield);
  return wrapper;
};
