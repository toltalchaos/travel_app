<script>
	import { text } from "svelte/internal";
import NavButton from "./navButton.svelte";


</script>

<nav>
  <ul>
    <li><NavButton location={"/"} text={"home"}/></li>
    <li><NavButton location={"locations"} text={"locations"}/></li>
    <li><NavButton location={"travel-methods"} text={"travel-methods"}/></li>
    <li><NavButton location={"accomidations"} text={"accomidations"}/></li>
    <li><NavButton location={"events"} text={"events"}/></li>
    <li><NavButton location={"finalize"} text={"FINALIZE"}/></li>
  </ul>
</nav>

<style>

  @media (min-width: 650px) {
  }
</style>