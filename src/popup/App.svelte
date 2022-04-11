<script lang="ts">
  import logo from "../assets/svelte.png";
  import Counter from "./Counter.svelte";
  import GInput from '../components/g-input/index.svelte';
</script>

  <div class="wrapper">
    <div class="header-main">

    </div>
    <img src={logo} alt="Svelte Logo" style="width:100px" />
    <Counter />
    <GInput />
  </div>
  
<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width:  500px;
  height:  300px;
  border: 2px solid red;
}
</style>
