<style type='text/scss'>
  @import 'todo-mvc';
</style>

<script>
  import data from './store'

	let currentView = 'all'
	let editing = null
</script>

<section class="todoapp">
  <header class="header">
  	<h1>todos</h1>
  	<input
  		class="new-todo"
  		on:keydown={e => {
  	   if (e.key === 'Enter' && e.target.value && e.target.value.length > 0) {
          $data.create(e.target.value)
          e.target.value = ''
        }
  		}}
  		placeholder="What needs to be done?"
  		autofocus
  	>
  </header>

  {#if $data.all.length > 0}
  	<section class="main">
  		<div id="toggle-all" class="toggle-all" class:checked="{$data.completed.length === $data.all.length}" on:click={e => $data.toggleAll(true) } >Mark all as complete</div>

  		<ul class="todo-list">
  			{#each $data[currentView] as item (item._id$)}
  				<li class:completed={item.completed$} class:editing={editing === item._id$ }>
  					<div class="view">
  						<div class="toggle" class:completed={item.completed$} on:click={() => { $data.toggle(item._id$) }}></div>
  						<label on:dblclick={() => editing = item._id$}>{item.description$}</label>
  						<button class="btn destroy" on:click={() => $data.remove(item._id$)}></button>
  					</div>

  					{#if editing === item._id$}
  						<input
  							value="{item.description$}"
  							id="edit"
  							class="edit"
  							on:keydown={e => {
              		if (e.key === 'Enter') {
                    e.target.blur()
                  } else if (e.key === 'Escape') {
                    editing = null
                  }
              	}}
  							on:blur={e => {
              		$data.byId[editing].description$ = e.target.value
              		editing = null
              	}}
  							autofocus
  						>
  					{/if}
  				</li>
  			{/each}
  		</ul>

  		<footer class="footer">
  			<ul class="filters">
          <li>
            <button class="btn" class:selected={currentView === 'all'} on:click={() => {currentView = 'all'}}>All {$data.all.length}</button>
          </li>
          <li>
            <button class="btn" class:selected={currentView === 'active'} on:click={() => {currentView = 'active'}}>Active {$data.active.length}</button>
          </li>
          <li>
            <button class="btn" class:selected={currentView === 'completed'} on:click={() => {currentView = 'completed'}}>Completed {$data.completed.length}</button>
          </li>
  			</ul>

  			{#if $data.completed.length}
  				<button class="btn clear-completed" on:click={$data.clearCompleted}>
  					Clear completed
  				</button>
  			{/if}
  		</footer>
  	</section>
  {/if}
</section>
