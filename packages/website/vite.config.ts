import { default as configureReact } from '@bn-digital/vite'

export default configureReact(
  {server: {host: '0.0.0.0'}},
  {
    fonts: {
      google: {
        families: [
          { name: 'Open+Sans', styles: 'wght@400;500;600;700;900' },
          { name: 'Nunito+Sans', styles: 'wght@400;500;600;700;900' },
        ],
      },
    },
  },
)
