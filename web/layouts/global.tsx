const Header = defineComponent({
  setup() {
    return () => (
      <div>
        Foo
      </div>
    )
  }
})

export default defineComponent({
  setup() {
    return () => (
      <div >
        <Header />
        <slot />
      </div>
    )
  }
})