module.exports = { contents: "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.loadFontGroup = exports.loadFont = undefined;\n\nrequire('promis');\n\nvar _fontfaceobserver = require('fontfaceobserver');\n\nvar _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);\n\nvar _dom = require('./dom');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar htmlEl = document.documentElement;\nvar TIMEOUT = 5000;\n\nfunction addFont(family) {\n\tvar name = family.toLowerCase().replace(/ /g, '-');\n\tvar className = 'loaded-' + name;\n\t(0, _dom.addClass)(htmlEl, className);\n}\n\nfunction handleError(err) {\n\tconsole.error(err);\n}\n\nfunction loadFont(font) {\n\tvar family = font.family,\n\t    weight = font.weight,\n\t    _font$style = font.style,\n\t    style = _font$style === undefined ? 'normal' : _font$style;\n\n\tvar fontObserver = new _fontfaceobserver2.default(family, { weight: weight });\n\tfontObserver.load(null, TIMEOUT).then(function () {\n\t\treturn addFont(font);\n\t}).catch(handleError);\n}\n\nfunction loadFontGroup(group) {\n\tvar promises = group.map(function (font) {\n\t\treturn new Promise(function (resolve, reject) {\n\t\t\tvar family = font.family,\n\t\t\t    weight = font.weight,\n\t\t\t    _font$style2 = font.style,\n\t\t\t    style = _font$style2 === undefined ? 'normal' : _font$style2;\n\n\n\t\t\tvar fontObserver = new _fontfaceobserver2.default(family, { weight: weight, style: style });\n\t\t\treturn fontObserver.load(null, TIMEOUT).then(function () {\n\t\t\t\treturn resolve(family);\n\t\t\t}).catch(function (err) {\n\t\t\t\treturn reject(err);\n\t\t\t});\n\t\t});\n\t});\n\n\tPromise.all(promises).then(function (result) {\n\t\treturn addFont(result[0]);\n\t}).catch(handleError);\n}\n\nexports.loadFont = loadFont;\nexports.loadFontGroup = loadFontGroup;",
dependencies: ["promis","fontfaceobserver","./dom"],
sourceMap: {},
headerContent: undefined,
mtime: 1489076388000
};