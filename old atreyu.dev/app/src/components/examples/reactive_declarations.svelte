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
  <button on:click={handleClick} class='local-btn'>
  	Count: {count}
  </button>

  <p>{count} * 2 = {doubled}</p>
  <p>{doubled} * 2 = {quadrupled}</p>

  <hr/>

  <button on:click={incrementStore} class='atreyu-btn'>
  	Count: {$data.counter$}
  </button>
  <p>{$data.counter$} * 2 = {doubledCounter}</p>
  <p>{doubledCounter} * 2 = {quadrupledCounter}</p>
</div>

<script>
  import { data } from '../../stores'
	let count = 1;

	$: doubled = count * 2;
	$: quadrupled = doubled * 2;

	function handleClick() {
		count += 1;
	}

  function incrementStore () {
    $data.counter$ += 1
  }

  $: doubledCounter = $data.counter$ * 2;
	$: quadrupledCounter = doubledCounter * 2;
</script>
