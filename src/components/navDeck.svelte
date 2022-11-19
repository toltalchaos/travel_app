<script>

</script>

<nav>
  <ul>
    <li><a href='/'>home</a></li>
    <li><a href='locations'>locations</a></li>
    <li><a href='travel-methods'>travel-methods</a></li>
    <li><a href='accomidations'>accomidations</a></li>
    <li><a href='events'>events</a></li>
    <li><a href='finalize'>FINALIZE</a></li>
  </ul>
</nav>

<style>
  nav{
    margin: 0.5rem 0;
  }
  ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  li{
    background-color: tomato;
      border-radius: 1rem;
      padding: 1rem;
      transition: 0.2s;
  }
  a{ 
      text-decoration: none;
      color: black; 
    }
  li:hover{
    background-color: aqua;
    padding: 1.75rem 0.5rem;
    border-radius: 3rem;
  }

  @media (min-width: 650px) {
  }
</style>