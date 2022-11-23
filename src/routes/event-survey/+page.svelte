<script>
	import RadioButtons from '../../components/RadioButtons.svelte';
	import NavButton from '../../components/navButton.svelte';
	import GlobalTravelObject from '../../models/store';
	let selected = null;
	let buttonGroup = null;

	function changeGlobalValue(value) {
		GlobalTravelObject.update((current) => {
			return current.setEventSurvey(value);
		});
	}

	function onChange(e) {
		selected = e.currentTarget.value;
		buttonGroup = e.currentTarget.name;
		document.getElementsByName(buttonGroup).forEach((element) => {
			element.parentElement.classList.remove('checked');
		});
		e.target.parentElement.classList.add('checked');
		changeGlobalValue({ [buttonGroup]: (selected === 'true') });
	}
</script>

<main>
	<h1>eventSurvey</h1>
	<section>
		<NavButton location={'events'} text={'Skip'} />
	</section>
	<section>
		<div>
			<h4>hiking</h4>
			<p>would you like to see some options and go hiking?</p>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'hiking'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'hiking'} />
		</div>
		<div>
			<h4>concerts</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'concerts'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'concerts'} />
		</div>
		<div>
			<h4>Fine Dining</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'dining'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'dining'} />
		</div>
		<div>
			<h4>art</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'art'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'art'} />
		</div>
		<div>
			<h4>museums</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'museums'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'museums'} />
		</div>
		<div>
			<h4>zoo</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'zoo'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'zoo'} />
		</div>
		<div>
			<h4>science</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'science'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'science'} />
		</div>
		<div>
			<h4>sports</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'sports'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'sports'} />
		</div>
		<div>
			<h4>theater</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'theater'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'theater'} />
		</div>
		<div>
			<h4>open air markets</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'markets'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'markets'} />
		</div>
		<div>
			<h4>learning</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'learning'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'learning'} />
		</div>
		<div>
			<h4>kids experiences</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'kids'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'kids'} />
		</div>
		<div>
			<h4>racing</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'racing'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'racing'} />
		</div>
		<div>
			<h4>sight seeing</h4>
			<RadioButtons changeMethod={onChange} nameValue={true} buttonGroup={'sight_seeing'} />
			<RadioButtons changeMethod={onChange} nameValue={false} buttonGroup={'sight_seeing'} />
		</div>
	</section>

  {#if Object.keys($GlobalTravelObject.event_survey).length !== 0}
  <section>
    <NavButton location={"events"} text={"Next"}/>
  </section>
{/if}
</main>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	h4,
	p {
		width: 100%;
	}
	main {
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	section {
		margin: 1rem;
	}
	@media (min-width: 640px) {
	}
</style>
