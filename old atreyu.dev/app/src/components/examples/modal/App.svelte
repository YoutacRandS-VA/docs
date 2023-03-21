<style>
  button{
    border: 1px rgba(0, 0, 0, 0.2) solid;
    padding: 1rem .2rem;
    border-radius: 2px;
  }

  .atreyu-btn{
    background-color: rgba(0,255,255,.2)
  }
</style>

<div>
  <button on:click={toggleModal} class="atreyu-btn">
  	show modal
  </button>

  {#if $ui.modal}
  	<Modal on:close="{()=>toggleModal()}">
  		<h2 slot="header">
  			modal
  			<small><em>adjective</em>  mod·al \ˈmō-dəl\</small>
  		</h2>

  		<ol class="definition-list">
  			<li>of or relating to modality in logic</li>
  			<li>containing provisions as to the mode of procedure or the manner of taking effect —used of a contract or legacy</li>
  			<li>of or relating to a musical mode</li>
  			<li>of or relating to structure as opposed to substance</li>
  			<li>of, relating to, or constituting a grammatical form or category characteristically indicating predication</li>
  			<li>of or relating to a statistical mode</li>
  		</ol>

  		<a href="https://www.merriam-webster.com/dictionary/modal">merriam-webster.com</a>
  	</Modal>
  {/if}
</div>

<script>
	import Modal from './Modal.svelte'
  import { ui } from '../../../stores'

  function toggleModal() {
    ui.update('modal', !$ui.modal)
  }

	let showModal = false;
</script>
