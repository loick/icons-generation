// http://www.multiasking.com/blog/xml2js-sax-js-non-whitespace-before-first-tag/

var webfontsGenerator = require('webfonts-generator')

var path = require('path');
var glob = require('glob');

glob(path.resolve(__dirname, './icons/**/*.svg'), function(err, icons) {
    webfontsGenerator({
      files: icons,
      fontName: 'dm-icons',
      types: ['woff'],
      dest: 'dest/',
      html: true,
      htmlTemplate: 'icons.tpl.hbs',
      cssTemplate: 'icon.css.hbs'
    }, function(error) {
      if (error) console.log('Fail!', error)
      else console.log('Done!')
    })
});
