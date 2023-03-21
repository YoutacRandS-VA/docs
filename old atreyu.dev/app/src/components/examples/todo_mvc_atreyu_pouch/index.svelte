<style type='text/scss'>
  @import 'todo-mvc';
</style>

<script>
  import { data } from '../../../stores'
  import { router } from 'atreyu'
  import VirtualList from '@sveltejs/svelte-virtual-list'

  let currentView
  
  $: currentView = $router.todos.view || 'all'
  
  let editing = null

  const emojis = [
	'😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
]
  let y = Number(localStorage.testIndex) || 1
  function add100 () {
    for (let i = 0; i < 100; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)]
      $data.create(`${emoji} ${y} Todo`)
      y++
    }
    localStorage.testIndex = y
  }
</script>

<button on:click={add100}>add 100</button>

{#if !$data.all.length._loading}
  <section class="todoapp">
    <h1>todos</h1>
    <header class="header">
      <input
        class="new-todo"
        on:keydown={e => {
          if (e.key === 'Enter' && e.target.value && e.target.value.length > 0) {
            $data.create(e.target.value)
            e.target.value = ''
          }
        }}
        placeholder="What needs to be done?"
        autofocus />
    </header>

    {#if $data.all.length > 0}
      <section class="main">
        <div
          id="toggle-all"
          class="toggle-all"
          class:checked={$data.completed.length === $data.all.length}
          on:click={e => $data.toggleAll(true)}>
          Mark all as complete
        </div>

        <ul class="todo-list">
          <VirtualList
            scrollKey={currentView}
            perPage={15}
            items={$data[currentView]}
            height="calc(100vh - 414px)"
            let:item
            let:index
            let:length>
            <li
              class:completed={item.completed$ === true}
              class:editing={editing === item._id$}>
              <div class="view">
                <div
                  class="toggle"
                  class:completed={item.completed$ === true}
                  on:click={() => {
                    $data.toggle(item._id$, currentView, index, length);
                  }} />
                <label on:dblclick={() => (editing = item._id$)}>
                  {item.description$}&nbsp;
                </label>
                <button
                  class="btn destroy"
                  on:click={() => $data.remove(item._id$)} />
              </div>

              {#if editing === item._id$}
                <input
                  value={item.description$}
                  id="edit"
                  class="edit"
                  on:keydown={e => {
                    if (e.key === 'Enter') {
                      e.target.blur();
                    } else if (e.key === 'Escape') {
                      editing = null;
                    }
                  }}
                  on:blur={e => {
                    $data.byId[editing].description$ = e.target.value;
                    editing = null;
                  }}
                  autofocus />
              {/if}
            </li>
          </VirtualList>
        </ul>

        <footer class="footer">
          <ul class="filters">
            <li>
              <a
                class="btn"
                class:selected={currentView === 'all'}
                href="{$router.todos.link({ view: 'all' })}">
                All {$data.all.length}
              </a>
            </li>
            <li>
              <a
                class="btn"
                class:selected={currentView === 'active'}
                href="{$router.todos.link({ view: 'active' })}">
                Active {$data.active.length}
              </a>
            </li>
            <li>
              <a
                class="btn"
                class:selected={currentView === 'completed'}
                href="{$router.todos.link({ view: 'completed' })}">
                Completed {$data.completed.length}
              </a>
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
{/if}
