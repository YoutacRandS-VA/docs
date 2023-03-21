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
  <button on:click={incrementLocal} class='local-btn'>
  	Local {count} {count === 1 ? 'time' : 'times'}
  </button>
  <button on:click={incrementStore} class='atreyu-btn'>
  	Atreyu {$data.counter$} {count === 1 ? 'time' : 'times'}
  </button>
</div>

<script>
  import { data } from '../../stores'

	let count = 0;

	function incrementLocal () {
		count += 1;
  }

  function incrementStore () {
    $data.counter$ += 1
  }
</script>
