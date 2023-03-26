<script>
  import {todos, views} from './stores'

	const ENTER_KEY = 13
	const ESCAPE_KEY = 27

	let currentView = 'all'
	let editing = null

  function handleEdit (event) {
		if (event.which === ENTER_KEY) {
      event.target.blur()
    } else if (event.which === ESCAPE_KEY) {
      editing = null
    }
	}
</script>

<section class="todoapp">
  <header class="header">
  	<h1>todos</h1>
  	<input
  		class="new-todo"
  		on:keydown={e => {
  	   if (e.which === ENTER_KEY) {
          todos.create(e.target.value)
          e.target.value = ''
        }
  		}}
  		placeholder="What needs to be done?"
  		autofocus
  	>
  </header>

  {#if $views.all.length > 0}
  	<section class="main">
  		<input id="toggle-all" class="toggle-all" type="checkbox" on:change={e => todos.toggleAll(e.target.checked) } checked="{$views.completed.length === $views.all.length}">
  		<label for="toggle-all">Mark all as complete</label>

  		<ul class="todo-list">
  			{#each $views[currentView] as item, index (item._id)}
  				<li class:completed={item.completed} class:editing={editing === item._id }>
  					<div class="view">
  						<input class="toggle" type="checkbox" checked={item.completed} on:click={() => { todos.toggle(item._id) }}>
  						<label on:dblclick={() => editing = item._id}>{item.description}</label>
  						<button class="destroy btn" on:click={() => todos.remove(item._id)}></button>
  					</div>

  					{#if editing === item._id}
  						<input
  							value="{item.description}"
  							id="edit"
  							class="edit"
  							on:keydown={handleEdit}
  							on:blur={e => {
              		$todos[editing].description = e.target.value
              		editing = null
              	}}
  							autofocus
  						>
  					{/if}
  				</li>
  			{/each}
  		</ul>

  		<footer class="footer">
  			<span class="todo-count">
  				<strong>{$views.active.length}</strong> {$views.active.length === 1 ? 'todo' : 'todos'} left
  			</span>

  			<ul class="filters">
          <li>
            <button class:selected={currentView === 'all'} on:click={() => {currentView = 'all'}}>All</button>
          </li>
          <li>
            <button class:selected={currentView === 'active'} on:click={() => {currentView = 'active'}}>Active</button>
          </li>
          <li>
            <button class:selected={currentView === 'completed'} on:click={() => {currentView = 'completed'}}>Completed</button>
          </li>
  			</ul>

  			{#if $views.completed.length}
  				<button class="btn clear-completed" on:click={todos.clearCompleted}>
  					Clear completed
  				</button>
  			{/if}
  		</footer>
  	</section>
  {/if}
</section>

<style type='text/scss'>
  @import 'todo-mvc';
</style>
