<div>
	<ContactCard>
		<span slot="name">
			P. Sherman
		</span>

		<span slot="address">
			42 Wallaby Way<br>
			Sydney
		</span>
	</ContactCard>

	<ContactCard>
	  <span slot="name">
	    { $data.user.name$ }
	  </span>
	  <span slot="address">
	    { $data.user.address.street$ }<br>
	    { $data.user.address.city$ }
	  </span>
	  <span slot="email">
	    { $data.user.email$ }
	  </span>

	</ContactCard>
</div>

<script>
	import ContactCard from './ContactCard.svelte';
  import { data } from '../../../stores'

</script>
