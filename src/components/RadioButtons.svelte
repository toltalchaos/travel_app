<script>

export let nameValue;
export let buttonGroup;
export let changeMethod;
export let checkedVal = false;



</script>

<label class = {checkedVal ? "checked":null}>
    <input on:change={changeMethod} checked={checkedVal} type="radio" name={buttonGroup} value={nameValue} /> {nameValue}
</label>

<style>

  input{
    display: none;
  }
  label{
    text-align: center;
    padding:1rem;
    margin:1rem;
    background-color: royalblue;
    border-radius: 1rem;
  }
  label:hover{
    border: 1px solid black;
    cursor: pointer;
  }
  .checked{
    background-color: aqua;
  }
</style>