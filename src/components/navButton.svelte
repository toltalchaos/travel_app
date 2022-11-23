<script>
    export let location;
    export let text;

</script>


<a href={location}>{text}</a>


<style>
      a{ 
    display: block;
    background-color: tomato;
    border: 1px solid black;
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: 0.2s;
      text-decoration: none;
      color: black; 
      text-align: center;
    }
  a:hover{
    background-color: aqua;
    padding: 1.75rem 0.5rem;
    border-radius: 3rem;
  }
</style>