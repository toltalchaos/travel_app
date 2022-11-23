<script>
	import NavButton from '../../components/navButton.svelte';
	import GlobalTravelObject from '../../models/store';

  function changeGlobalValue(value) {
		GlobalTravelObject.update((current) => {
			// return current.setEventSurvey(value);
		});
	}

	function onChange(e) {
		document.getElementsByName(buttonGroup).forEach((element) => {
			element.parentElement.classList.remove('checked');
		});
		e.target.parentElement.classList.add('checked');
		changeGlobalValue({ [buttonGroup]: (selected === 'true') });
	}
</script>

<main>
	<h1>Events</h1>
</main>

<style>
  @media (min-width: 640px) {
  }
</style>