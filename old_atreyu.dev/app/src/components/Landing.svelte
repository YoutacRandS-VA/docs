<style>
	.hero {
		position: relative;
		padding: 2em 1em;
		/*background-color: #333;
		color: #f4f4f4;*/
		background-color: white;
		color: #333;
		clear: fix;
		min-height: calc(100vh - 7em);
		box-sizing: border-box;
	}

	ul {
		max-width: 32em;
		padding: 0;
		margin: 0 0 3em 0;
	}

	li {
		position: relative;
		list-style: none;
		margin: 0 0 1em 0;
		font-family: Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		color: #666;
	}

	li::before {
		position: absolute;
		content: '◆';
		top: 0em;
		left: -1.4em;
		font-size: 0.8em;
		/*color: rgba(255,255,255,0.4);*/
		color: #ddd;
	}

	strong {
		margin: 0 auto;
		color: #333;
	}

	.left {
		padding: 0 0 0 1em;
	}

	h1 {
		display: block;
		color: rgb(20,87,138);
		font-size: 30vw;
		font-weight: 300;
		line-height: 1;
		margin: 0;
		text-transform: lowercase;
		padding: 0.5em 0 0 0;
	}

	.right {
		padding: 0 0 0 1em;
		margin: 0 0 2em 0;
	}

	h2 {
		font-size: 7.2vw;
		font-weight: 300;
		display: block;
		margin: 0 0 4rem 0;
		max-width: 11em;
	}

	.learn-atreyu {
		background-color: rgb(20,87,138);
		color: white;
		padding: 0.5em 2em;
		border-radius: 0.2em;
		line-height: 1;
		font-family: Rajdhani, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-size: 1.2em;
		font-weight: 800;
		text-transform: uppercase;
		width: calc(100% - 1em);
		max-width: 16em;
		display: block;
		text-align: center;
	}

	@media (min-width: 480px) {
		.left, .right {
			max-width: 32em;
			margin: 0 auto;
		}

		h1 {
			font-size: 8em;
		}

		h2 {
			font-size: 2em;
			max-width: none;
		}

		li {
			font-size: 1.2em;
		}
	}

	@media (min-width: 960px) {
		.hero {
			padding: 6em 1em 2em 1em;
			max-width: 64em;
			margin: 0 auto;
		}

		.left {
			position: relative;
			float: left;
			width: 40%;
			box-sizing: border-box;
		}

		.right {
			position: relative;
			float: left;
			width: 60%;
			box-sizing: border-box;
		}

		h1 {
			position: relative;
			right: 3rem;
			margin-top: 1.4rem;
			font-size: 8em;
			text-align: right;
		}

		h2 {
			font-size: 2.8em;
			line-height: 1.2;
			margin: 0 0 2rem 0;
			max-width: 11em;
		}
	}

	div {
		position: relative;
		padding: 3em 0 0 0;
		overflow-x: hidden;
	}

	@media (min-width: 768px) {
		div {
			padding: 4em 0 0 0;
		}
	}
</style>

<div class='hero'>
	<div class='left'>
		<h1>Atreyu</h1>
	</div>

	<div class='right'>
		<h2>Cutting edge web applications</h2>

		<ul>
			<li><strong>Atreyu</strong> combines <a href='https://svelte.dev'>svelte</a> with a unique application of <a href='https://falcorjs.org'>falcor</a> for data and state manangement.</li>
			<li>Atreyu is for powerful web applications and sapper for web pages.</li>
			<li>An alternative to react, redux and graphQL.</li>
		</ul>

		<a class='learn-atreyu' href='guide'>Learn Atreyu</a>
	</div>
</div>

