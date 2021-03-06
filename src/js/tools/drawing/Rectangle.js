/**
 * @provide pskl.tools.drawing.Rectangle
 *
 * @require pskl.utils
 */
(function() {
  var ns = $.namespace('pskl.tools.drawing');

  ns.Rectangle = function() {
    ns.ShapeTool.call(this);

    this.toolId = 'tool-rectangle';
    this.helpText = 'Rectangle tool';
    this.shortcut = pskl.service.keyboard.Shortcuts.TOOL.RECTANGLE;
  };

  pskl.utils.inherit(ns.Rectangle, ns.ShapeTool);

  /**
   * @override
   */
  ns.Rectangle.prototype.draw = function (col, row, color, targetFrame, penSize) {
    var rectanglePixels = pskl.PixelUtils.getBoundRectanglePixels(this.startCol, this.startRow, col, row);

    pskl.PixelUtils.resizePixels(rectanglePixels, penSize).forEach(function (point) {
      targetFrame.setPixel(point[0], point[1], color);
    });
  };
})();
