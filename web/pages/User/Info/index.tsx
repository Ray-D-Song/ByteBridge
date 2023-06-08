export default defineComponent({
  setup() {
    const username = ref('Ray')

    return () => (
      <div>
        { username.value }
      </div>
    )
  }
})