// tailwind.config.js
const plugin = require('tailwindcss/plugin');
const stylesoraTheme = require('stylesora/theme');
const colors = require('tailwindcss/colors');

module.exports = {
  prefix: 'tw-',
  important: true,
  purge: {
      enabled: false
  },
  theme: {
      extend: {
        fontFamily: stylesoraTheme.fontFamily,
        fontSize: stylesoraTheme.fontSize, 
        colors: {
            drumeo: stylesoraTheme.colors.drumeo,
            pianote: stylesoraTheme.colors.pianote,
            guitareo: stylesoraTheme.colors.guitareo,
            singeo: stylesoraTheme.colors.singeo,
            recordeo: stylesoraTheme.colors.recordeo,
            content: stylesoraTheme.colors.content,
            ui:stylesoraTheme.colors.ui,
            dm:stylesoraTheme.colors.dm,
            'ui-gray':stylesoraTheme.colors['ui-gray'],
            "true-gray": colors.trueGray
        },
        spacing: stylesoraTheme.spacing,
        zIndex: stylesoraTheme.zIndex,
        inset: stylesoraTheme.inset
      },
  },
  variants: {
    extend: {
        backgroundColor: ['active', 'visited'],
        textColor: ['visited', 'active'],
    }
  },
  plugins: [
    require('stylesora/components/')(),
    require('stylesora/utilities/')(),
  ],
}
