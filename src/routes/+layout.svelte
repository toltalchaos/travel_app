<script>
import Footer from '../components/footer.svelte';
import Header from '../components/header.svelte';
	import Sidebar from '../components/sidebar.svelte';

</script>


<div>
  <Header/>
  <Sidebar/>
  <slot/>
  <Footer/>
</div>

<style lang="scss">
  div{
    background-color: chocolate;
  }
  
</style>