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
  	Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>

  <button on:click={incrementStore} class='atreyu-btn'>
  	Clicked {$data.counter$} {$data.counter$ === 1 ? 'time' : 'times'}
  </button>
</div>

<script>
  import { data } from '../../stores'

  let count = 0;

	$: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}

  function incrementStore () {
    $data.counter$ += 1
  }

  $: if ($data.counter$ >= 10) {
		alert(`Atreyu store count is dangerously high!`)
		$data.counter$ = 9
	}
</script>
