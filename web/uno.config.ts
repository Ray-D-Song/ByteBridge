// uno.config.ts
import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx"
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({}),
    presetWind({
      darkMode: 'class'
    })
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})