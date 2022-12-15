<script>
	import RadioButtons from '../../components/RadioButtons.svelte';
	import NavButton from '../../components/navButton.svelte';
	import GlobalTravelObject from '../../models/store';
	import FlightMethod from './flightMethod.svelte';
	let selected = null;
	let buttonGroup = null;
	function changeGlobalValue(value) {
		GlobalTravelObject.update((current) => {
			return current.setMainTravel(value);
		});
	}

	function onChange(e) {
		selected = e.currentTarget.value;
		buttonGroup = e.currentTarget.name;
		document.getElementsByName(buttonGroup).forEach((element) => {
			element.parentElement.classList.remove('checked');
		});
		e.target.parentElement.classList.add('checked');
		changeGlobalValue({ primary: selected });
	}
</script>

<main>
	<h1>Travel Methods</h1>

	<RadioButtons
		checkedVal={$GlobalTravelObject.travel_methods.primary == 'Driving'}
		changeMethod={onChange}
		nameValue={'Driving'}
		buttonGroup={'travel-method'}
	/>
	<RadioButtons
		checkedVal={$GlobalTravelObject.travel_methods.primary == 'Flying'}
		changeMethod={onChange}
		nameValue={'Flying'}
		buttonGroup={'travel-method'}
	/>
	<RadioButtons
		checkedVal={$GlobalTravelObject.travel_methods.primary == 'Bus'}
		changeMethod={onChange}
		nameValue={'Bus'}
		buttonGroup={'travel-method'}
	/>
	<RadioButtons
		checkedVal={$GlobalTravelObject.travel_methods.primary == 'Train'}
		changeMethod={onChange}
		nameValue={'Train'}
		buttonGroup={'travel-method'}
	/>
	<RadioButtons
		checkedVal={$GlobalTravelObject.travel_methods.primary == 'Walking'}
		changeMethod={onChange}
		nameValue={'Walking'}
		buttonGroup={'travel-method'}
	/>

  <!-- the below may be better as a switch case -->
	{#if $GlobalTravelObject.travel_methods.primary === 'Flying'}
		<FlightMethod />
	{/if}

	{#if $GlobalTravelObject.travel_methods.primary !== undefined}
		<section>
			<NavButton location={'accomidations'} text={'Next'} />
		</section>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
	section {
		margin: 1rem;
	}
	@media (min-width: 640px) {
	}
</style>
