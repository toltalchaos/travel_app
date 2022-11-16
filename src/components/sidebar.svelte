<!-- sidebar component to track progress, loads in data from global stores -->
<script>
  import GlobalObject from '../models/store'
  import Drawer from './Drawer.svelte'
  let open = false
  let placement = 'right'

</script>


<aside>

  <button class="drawer-button static-button" on:click={() => open = true}>Open</button>

  <Drawer { open } { placement } on:clickAway={() => open = false} size='600px'>
      <button class="drawer-button" on:click={() => open = false}>Close</button>
      <!-- the below should be componentized -->
      <h2>Store Data => {JSON.stringify($GlobalObject)}</h2>
  </Drawer>

</aside>

<style>
  .drawer-button{
    padding: 1rem 1rem;
    border-radius: 0 1rem 1rem 0;
    transition: 0.2s;
  }
  .drawer-button:hover{
    padding: 1.5rem 1.5rem;
    cursor: pointer;

  }
  .static-button{
    position:fixed;
    border-radius: 1rem 0 0 1rem;
  }
  aside{
    display: flex;
    flex-direction: column;;
    align-items: flex-end;
  }
  aside :global(.drawer .panel) {
      background: rgb(63, 50, 78);
      color: rgb(4, 255, 0);
  }

  aside :global(.drawer .overlay) {
      background: rgba(154, 73, 253, 0.279);
  }

</style>