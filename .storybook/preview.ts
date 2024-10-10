import '../apps/www/styles/globals.css';  
import type { Preview } from "@storybook/react"
const preview: Preview = {
  parameters: {
    darkMode: {
      classTarget: 'html',  
      stylePreview: true,  
    }, 
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
}

export default preview
