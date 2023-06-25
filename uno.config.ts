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
            @apply max-h-18 justify-self-start;
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
          @apply p-0 m-0 mt-4;
        }

        p {
          font-size: 0.8em;
          @apply mb-2;
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
        }

        .bg-secondary {
          h1, h2, h3, p {
            @apply text-snow;
          }
        }

        .bg-snow {
          h1, h3, {
            @apply text-primary;
          }
          h2 {
            @apply text-secondary;
          }
        }

        .bg-primary.content-page {
          h1, h2, h3, p {
            @apply text-snow;
          }
          svg {
            @apply fill-snow;
          }
        }

        .bg-secondary.content-page {
          h1, h2, h3, p {
            @apply text-snow;
          }
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