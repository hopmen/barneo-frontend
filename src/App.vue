<template>
	<div id="app">
		<div class="container">
			<br>
			
			<button class="waves-effect waves-light btn" @click="showModal = true">Написать отзыв</button>
			
			<Popup v-if="showModal" @close="showModal = false">
				<Feedback></Feedback>
			</Popup>
		</div>
	</div>
</template>

<script>
  import Feedback from "./components/Feedback";
	import Popup from "./components/Popup";
  
  export default {
    name: 'app',
	  data:()=>({
      showModal: false
	  }),
    components: {
      Feedback,
      Popup
    }
  }
</script>

<style lang="scss">
	
	@import "assets/materialize-css/sass/materialize";
	

</style>
