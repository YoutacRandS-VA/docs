<p>{$data.nonexsisting$}</p>

<p>{$data.user.nonexsiting$}</p>


<p>user age (should not be logged, no $): {$data.user.age}</p>
<p>user address street: {$data.user.address.street$}</p>
<p>user address city: {$data.user.address.city$}</p>

<p>counter: {$data.counter$}</p>

<button on:click={increment}>increment</button>

<button on:click={changeUser}>change userdata</button>
<hr>

{#each $data.todos as todo (todo.id)}
	<!-- <ChangeContainer {todo} /> -->
{/each}

<hr>

{#each $data.todos as todo (todo.id)}
	<!-- <ChangeContainer {todo} on:click="{() => toggle(todo.id$)}" /> -->
{/each}

{#each $data.noexist as nono}
	should never render and not crash
	{nono.text$}
{/each}

<p>no more inspiration but also {$data.inspiration.xxx['a'].b[2]['1$']}</p>

<script>
import { data } from '../../stores'
// import ChangeContainer from './ChangeContainer.svelte'

function toggle(id) {
	console.log('toggle')
	data.update((state) => {
		state.todos = state.todos.map(todo => {
			if (todo.id === id) {
				// return a new object
				return {
					id,
					done: !todo.done,
					text: todo.text
				};
			}

			// return the same object
			return todo;
		})
		return state
	})
}

function changeUser () {
	data.update((state) => {
		state.user.name = 'Burt'
		state.user.address.street = 'No Street'
		state.user.address.city = 'NoWhere'
		return state
	})
}

function increment () {
	data.update((state) => {
		state.counter += 1
		return state
	})
}

</script>
