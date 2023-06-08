export default defineComponent({
  setup() {
    definePageMeta({
      layout: 'global'
    })
    return () => (
      <div text-4xl>This is a simple test</div>
    )
  }
})