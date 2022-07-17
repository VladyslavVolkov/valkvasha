import { default as configureReact } from '@bn-digital/vite'

export default configureReact(
  {},
  {
    sourceMaps: true,
    fonts: {
      google: {
        preconnect: true,
        display: 'auto',
        families: [
          { name: 'Open+Sans', styles: 'wght@400;500;600;700;900' },
          { name: 'Nunito+Sans', styles: 'wght@400;500;600;700;900' },
        ],
      },
    },
  },
)
