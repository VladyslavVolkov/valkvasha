import { default as configureReact } from '@bn-digital/vite'

export default configureReact(
  {},
  {
    fonts: {
      google: {
        families: [
          { name: 'Merriweather', styles: 'wght@400;500;600;700;900' },
          { name: 'Jost', styles: 'wght@400;500;600;700;900' },
        ],
      },
    },
  },
)
