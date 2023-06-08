import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "global"
declare module "/Users/raysong/Code/CodeBase/ByteBridge/web/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}