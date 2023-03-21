<style>
	@keyframes fadein {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.container {
		position: fixed;
		width: 100%;
		top: 0;
		height: 3em;
		background-color: #333;
		color: #eee;
		border-bottom: 2px solid rgb(20,87,138);
		font-family: Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		z-index: 5;
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
	}

	nav {
		position: fixed;
		width: 14em;
		height: calc(100vh - 3em);
		top: 3em;
		font-family: Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		background-color: white;
		transform: translate(-100%,0);
		transition: transform 0.2s cubic-bezier(.17,.67,.24,.99);
		border-right: 1px solid #eee;
		z-index: 5;
		padding: 1em;
		user-select: none;
	}

	.menu-link {
		display: inline;
		position: absolute;
		top: 0;
		left: 1rem;
		font-size: 1em;
		line-height: 3.1em;
		color: #ccc;
		cursor: pointer;
		font-weight: 500;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -45%);
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		line-height: 1;
		text-transform: lowercase;
		color: white;
		font-size: 1.4rem;
	}

	ul {
		display: block;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.primary {
		margin: 0 0 2em 0;
	}

	.primary li {
		position: relative;
		display: block;
	}

	.primary .active {
		color: #333;
		font-weight: 700;
	}

	/**/

	.primary li a {
		display: block;
		color: #727272;
		font-size: 1.3em;
		font-weight: 500;
		padding: 0.75em 0;
		line-height: 1;
	}

	@media (min-width: 768px) {
		.mousecatcher, .menu-link {
			display: none;
		}

		.container {
			height: 4em;
		}

		nav {
			width: 100%;
			height: 4em;
			padding: 0 1.5em 0 0;
			transform: none;
			transition: none;
			height: 0;
		}

		.primary {
			position: fixed;
			top: 0;
			right: 1em;
			margin: 0;
		}

		.primary li {
			display: inline-block;
		}

		.primary li a {
			padding: 1.5em 0.5em;
			color: #ccc;
			font-size: 1rem;
		}

		.primary li a.active {
			color: white;
			font-weight: 500;
		}

		.primary li::after {
			position: absolute;
			top: 1.5rem;
			right: -0.3em;
			content: '/';
			font-size: 0.8em;
			color: #999;
		}

		.primary li:last-child::after {
			content: '';
		}

		.secondary {
			display: none;
		}

		.logo {
			position: absolute;
			top: 1rem;
			left: 1rem;
			font-size: 2em;
			font-weight: 300;
			transform: none;
		}
	}
</style>


<div class="closed mousecatcher"></div>

<div class='container'>
	<span class="menu-link" >Menu</span>
	<a href='/' class='logo'>Atreyu</a>
</div>

<nav class="closed">
	<ul class='primary'>
		<li><a class:active={$router.page === 'guide'} href='/guide'>Guide</a></li>
		<li><a class="{$router.page === 'examples' ? 'active' : ''}" href='/examples/{lastExample || ''}'>Examples</a></li>
		<li><a href='https://github.com/cloudles-hq/atreyu'>GitHub</a></li>
	</ul>

	<div class='secondary'>
		<!-- <GuideContents/> -->
	</div>
</nav>

<script>
  import { getContext } from 'svelte'
  const { router } = getContext('ayu')
	let lastExample
	$: lastExample = $router.slug ? $router.slug : lastExample
</script>
