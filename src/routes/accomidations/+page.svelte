<script>
	import RadioButtons from "../../components/RadioButtons.svelte";
  import GlobalObject from '../../models/store';
	let selected = null;
  
  function changeGlobalValue(value) {
		GlobalObject.update((current) => {
			return current.setAccommodations(value);
		});
	}

  function onChange(e) {
		selected = e.currentTarget.value;
    document.getElementsByName('accomidations-price').forEach(element => {
      element.parentElement.classList.remove('checked')
    });
    e.target.parentElement.classList.add('checked')
    changeGlobalValue({price : selected})
	}
</script>

<main>
	<h1>Accomidations</h1>
  <RadioButtons checkedVal={$GlobalObject.accommodations.price == "$"} changeMethod={onChange} nameValue={"$"} buttonGroup={"accomidations-price"} />
  <RadioButtons  checkedVal={$GlobalObject.accommodations.price == "$$"} changeMethod={onChange} nameValue={"$$"} buttonGroup={"accomidations-price"} />
  <RadioButtons  checkedVal={$GlobalObject.accommodations.price == "$$$"} changeMethod={onChange} nameValue={"$$$"} buttonGroup={"accomidations-price"} />
</main>

<style>
    main{
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 640px) {
  }
</style>