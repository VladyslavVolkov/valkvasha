import { default as configureReact } from '@bn-digital/vite'

export default configureReact(
  {},
  {
    fonts: {
      google: {
        families: [{ name: 'Roboto', styles: 'wght@400;500;600;700;900' }],
      },
    },
  },
)
