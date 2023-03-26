<script>
  import setAyuContext from '/_ayu/src/store/context.js'

  import Header from '../components/Header.svelte'
  import Landing from '../components/Landing.svelte'
  import Examples from '../components/examples/index.svelte'

  const { data, router } = setAyuContext()
</script>

<Header/>

{#if $router.page === 'examples'}
  <Examples/>
{:else}
  <Landing/>
{/if}