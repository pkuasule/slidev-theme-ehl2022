// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
      primary: '#0048BD',
      secondary: '#827345',
      tertiary: '#5B9BD5',
      dark: '#001436',
      shade: '#FAFAFA',
      snow: '#FFFFFF',
    },
    styleRules: [
      {
        selector: 'h1',
        content: {
          fontSize: '24px',
          fontWeight: 'bold'
        }
      }
    ]
  },
  presets: [
    // presetUno(),
    // presetAttributify(),
    // presetIcons(),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        .slidev-layout {
          @apply px-12 py-8;
        }

        .content-page {
          svg {
            @apply max-h-18 place-self-start;
          }
        }

        h1 {
          font-size: 3em;
          font-weight: 700;
          @apply p-0 m-0 uppercase;
        }

        h2 {
          font-size: 1.2em;
          @apply p-0 m-0 capitalize;

        }

        h3 {
          font-size: 1em;
          font-weight: 700;
          @apply p-0 m-0 mt-4 mb-2;
        }

        p {
          font-size: 0.8em;
          @apply mb-2 font-extralight;
        }

        ul {
          list-style: disc;
        }
      
        li {
          font-size: 0.8em;
          @apply ml-1.1em pl-0.2em font-extralight;
        }
      
        blockquote {
          @apply text-sm p-4 mt-2;
        }
      
        blockquote > * {
          @apply my-0;
        }
      
        table {
          @apply w-full text-sm table-auto;
        }
      
        thead {
          @apply border-b-0.1em font-bold bg-blue-800 text-white;
        }
      
        tr {
          @apply border-b border-gray/20 font-extralight;
        }
      
        th {
          @apply text-left;
        }
      
        td, th {
          @apply p-2 py-3;
        }
      
        a {
          @apply border-current border-b border-dashed hover:(text-$slidev-theme-primary border-solid);
        }
      
        b, strong {
          @apply font-900 py-0.5 px-2 mx-3 rounded;
        }
      
        kbd {
          @apply border border-gray-400 border-b-2 border-opacity-20 rounded;
          @apply bg-gray-400 bg-opacity-5 py-0.5 px-1 text-sm font-mono;
        }

        .Cover {
          @apply bg-primary;

          h1, h3, p {
            @apply text-snow;
          }
          h2 {
            @apply text-tertiary;
          }
          svg {
            @apply max-h-80;
          }
        }

        .bg-primary {
          h1, h2, h3, p {
            @apply text-snow;
          }
          li::marker {
            color: ${theme.colors.snow};
          }
          li {
            @apply text-snow;
          }
          b, strong {
            @apply bg-snow text-primary;
          }
          blockquote {
            @apply bg-snow bg-opacity-10 border-l-4 border-snow;
          }
        }

        .bg-secondary {
          h1, h2, h3, p {
            @apply text-snow;
          }
          li::marker {
            color: ${theme.colors.snow};
          }
          li {
            @apply text-snow;
          }
          b, strong {
            @apply bg-snow text-secondary;
          }
          blockquote {
            @apply bg-snow bg-opacity-10 border-l-4 border-snow;
          }
        }

        .bg-snow {
          h1, h3, {
            @apply text-primary;
          }
          h2 {
            @apply text-secondary;
          }
          li::marker {
            color: ${theme.colors.secondary};
          }
          b, strong {
            @apply bg-primary text-snow;
          }
          blockquote {
            @apply bg-gray bg-opacity-10 border-l-4 border-primary;
          }
        }

        .bg-primary.content-page {
          svg {
            @apply fill-snow;
          }
        }

        .bg-secondary.content-page {
          svg {
            @apply fill-snow;
          }
        }

        .bg-snow.content-page {
          h1, h3, {
            @apply text-primary;
          }
          h2 {
            @apply text-secondary;
          }
          svg {
            @apply fill-secondary;
          }
        }

        hr {
          @apply mb-5;
        }

        .End-Page-Primary{
          svg {
            @apply max-h-80;
          }
        }
      `
    }
  ],
})