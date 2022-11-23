<script>
	import RadioButtons from "../../components/RadioButtons.svelte";
  import NavButton from "../../components/navButton.svelte";
  import GlobalTravelObject from '../../models/store';
	let selected = null;
  let buttonGroup = null;
  
  function changeGlobalValue(value) {
		GlobalTravelObject.update((current) => {
			return current.setAccommodations(value);
		});
	}

  function onChange(e) {
		selected = e.currentTarget.value;
		buttonGroup = e.currentTarget.name;
		document.getElementsByName(buttonGroup).forEach((element) => {
      element.parentElement.classList.remove('checked')
    });
    e.target.parentElement.classList.add('checked')
    changeGlobalValue({price : selected})
	}
</script>

<main>
	<h1>Accomidations</h1>
  <RadioButtons checkedVal={$GlobalTravelObject.accommodations.price == "$"} changeMethod={onChange} nameValue={"$"} buttonGroup={"accomidations-price"} />
  <RadioButtons  checkedVal={$GlobalTravelObject.accommodations.price == "$$"} changeMethod={onChange} nameValue={"$$"} buttonGroup={"accomidations-price"} />
  <RadioButtons  checkedVal={$GlobalTravelObject.accommodations.price == "$$$"} changeMethod={onChange} nameValue={"$$$"} buttonGroup={"accomidations-price"} />

  {#if $GlobalTravelObject.accommodations.price !== ""}
  <section>
    <NavButton location={"event-survey"} text={"Next"}/>
  </section>
{/if}
</main>

<style>
    main{
    display: flex;
    flex-direction: column;
  }
  section{
    margin: 1rem;
  }
  @media (min-width: 640px) {
  }
</style>