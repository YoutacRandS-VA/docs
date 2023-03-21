<SidebarLayout closed={false} height="calc(100vh - 4em)">
  <div class="sidebar">
    <ul>
      {#each exNav as { slug, title }}
        <li class="example_link"><a href='/examples/{slug}'>{title}</a></li>
      {/each}
    </ul>
  </div>

  <div class="main">
    {#if components[$router.slug] !== undefined}
      <svelte:component this={components[$router.slug]}/>
    {:else}
      <h2>Choose an example from the left to explore atreyu</h2>
    {/if}
  </div>
</SidebarLayout>

<script>
  import { getContext } from 'svelte'
  import exNav from './examplesNav'
  import SidebarLayout from '/_ayu/src/components/sidebar-layout/components/sidebar-layout.svelte'

  const { router } = getContext('ayu')
  const components = {}

	exNav.forEach(example => {
		const slug = example.slug
		import(
			/* webpackChunkName: "example" */
			/* webpackMode: "eager"  */ // or "lazy-once"
			/* webpackPreload: true */
			'./' + slug
		).then(component =>
			components[slug] = component.default
		)
	})
</script>

<!-- <style>
  :root {
    --nav-h:       6rem;
    --top-offset:  6rem;
    --sidebar-w:  30rem;
    --sidebar-mid-w: 36rem;
    --sidebar-large-w: 48rem;
    --main-width: 80rem;
    --side-nav:  3.2rem;
    --side-page:   var(--side-nav);

    /* easings */
    --out-back:    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media screen and (min-width: 768px) {
    :root {
      --side-page:  14vw;
      --top-offset: 10rem;
      --side-nav: 4.8rem;
    }
  }

  /*	theme vars */
  /* .theme-default {
    --back:       	#ffffff;
    --back-light: 	#f6fafd;
    --back-api: 		#eff8ff;
    --prime:      	#ff3e00;
    --second:     	#676778;
    --flash:      	#40b3ff;
    --heading:	var(--second);
    --text:      		#444;
    --sidebar-text: rgba(255, 255, 255, .75);
    --border-w:  		.3rem;
    --border-r:  		.4rem;
  } */

  /*	typo vars */
  /* .typo-default {
    --code-fs: 1.3rem;
    --h6:      1.4rem;
    --h5:      1.6rem;
    --h4:      1.8rem;
    --h3:      2.6rem;
    --h2:        3rem;
    --h1:      3.2rem;
    --linemax:   42em;
    --lh:  		 	  1.5;
  } */

  /* body {
    --font: 'Overpass', sans-serif;
    --font-mono: 'Fira Mono', monospace;
  } */

	aside {
		position: fixed;
		background-color: white;
		left: 0.8rem;
		bottom: 0.8rem;
		width: 2em;
		height: 2em;
		overflow: hidden;
		border: 1px solid #eee;
		box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
		transition: width 0.2s, height 0.2s;
	}
	/* aside button {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3.4rem;
		height: 3.4rem;
	} */
	/* aside.open {
		width: calc(100vw - 3rem);
		height: calc(100vh - var(--nav-h));
	}
	aside.open::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 2rem);
		height: 2em;
		background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%);
		pointer-events: none;
		z-index: 2;
	} */
	aside::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 1.9em;
		width: calc(100% - 2rem);
		height: 2em;
		background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,1) 100%);
		pointer-events: none;
	}
	.sidebar {
		position: absolute;
		font-family: var(--font);
		overflow-y: auto;
		width: 100%;
		height: 100%;
		padding: 4em 1.6rem 2em 3.2rem;
		bottom: 2em;
	}
	/* .content {
		width: 100%;
		margin: 0;
		padding: var(--top-offset) var(--side-nav);
		tab-size: 2;
		-moz-tab-size: 2;
	} */
	@media (min-width: 832px) { /* can't use vars in @media :( */
		aside {
			display: block;
			width: var(--sidebar-w);
			height: 100vh;
			top: 0;
			left: 0;
			overflow: hidden;
			box-shadow: none;
			border: none;
			overflow: hidden;
			color: white;
		}
		/* aside.open::before {
			display: none;
		} */
		aside::after {
			content: '';
			bottom: 0;
			height: var(--top-offset);
			background: linear-gradient(to bottom, rgba(103,103,120,0) 0%, rgba(103,103,120,0.7) 50%, rgba(103,103,120,1) 100%);
		}
	/* .section {
		display: block;
		padding: 0 0 .8rem 0;
		font-size: var(--h6);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
	} */
	.subsection {
		display: block;
		font-size: 1.6rem;
		font-family: var(--font);
		padding: 0 0 0.6em 0;
	}

</style> -->
