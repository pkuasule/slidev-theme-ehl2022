import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
  },
  theme: {
    extend: {
      colors: {
        primary: '#0048BD',
        secondary: '#827345',
        tertiary: '#5B9BD5',
        dark: '#001436',
        shade: '#FAFAFA',
        snow: '#FFFFFF',
      },
    },
  },
}))
