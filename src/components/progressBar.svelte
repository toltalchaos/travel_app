
<script>
	export let progress = 0
	
	$: cssVarStyles = `--background:radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${360 * progress}deg, gainsboro ${360 * progress}deg 360deg),
    conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green);`
</script>

<style>
#progress-circle {
  background: var(--background);
  border-radius: 50%;
  width: 120px;
  height: 120px;
	transition: all 500ms ease-in;
	will-change: transform;
}
</style>

<div id="progress-circle" style="{cssVarStyles}"></div>