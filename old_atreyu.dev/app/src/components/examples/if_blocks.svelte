<style>
  button{
    border: 1px rgba(0, 0, 0, 0.2) solid;
    padding: 1rem .2rem;
    border-radius: 2px;
  }

  .local-btn{
    background-color: rgba(255,255,0,.2)
  }

  .atreyu-btn{
    background-color: rgba(0,255,255,.2)
  }
</style>

<div>
  {#if user.loggedIn}
  	<button on:click={toggle} class="local-btn">
  		Log out
  	</button>
  {/if}
  {#if !user.loggedIn}
  	<button on:click={toggle} class="local-btn">
  		Log in
  	</button>
  {/if}

  <hr>

  {#if !isNaN($data.userId$) }
  	<button on:click={() => logIn(undefined)} class="atreyu-btn">
  		Log out
  	</button>
  {/if}

  {#if isNaN($data.userId$) }
  	<button on:click={() => logIn(42)} class="atreyu-btn">
  		Log in
  	</button>
  {/if}

  <p>userId: {$data.userId$}</p>
</div>

<script>
  import { data } from '../../stores'
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
  }

  function logIn (id){
    $data.userId = id
  }

</script>
