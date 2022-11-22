<script>
  import RadioButtons from '../../components/RadioButtons.svelte';
import GlobalObject from '../../models/store';
	let selected = null;

  function changeGlobalValue(value) {
		GlobalObject.update((current) => {
			return current.setMainTravel(value);
		});
	}
	
	function onChange(e) {
		selected = e.currentTarget.value;
    document.getElementsByName('travel-method').forEach(element => {
      element.parentElement.classList.remove('checked')
    });
    e.target.parentElement.classList.add('checked')
    changeGlobalValue({primary : selected})
	}
</script>

<main>
	<h1>Travel Methods</h1>

  <RadioButtons checkedVal={$GlobalObject.travel_methods.primary == "Driving"} changeMethod={onChange} nameValue={"Driving"} buttonGroup={"travel-method"} />
   <RadioButtons checkedVal={$GlobalObject.travel_methods.primary == "Flying"} changeMethod={onChange} nameValue={"Flying"} buttonGroup={"travel-method"} />
   <RadioButtons checkedVal={$GlobalObject.travel_methods.primary == "Bus"} changeMethod={onChange} nameValue={"Bus"} buttonGroup={"travel-method"} />
   <RadioButtons checkedVal={$GlobalObject.travel_methods.primary == "Train"} changeMethod={onChange} nameValue={"Train"} buttonGroup={"travel-method"} />
   <RadioButtons  checkedVal={$GlobalObject.travel_methods.primary == "Walking"} changeMethod={onChange} nameValue={"Walking"} buttonGroup={"travel-method"} />


</main>

<style>
  main{
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 640px) {
  }
</style>