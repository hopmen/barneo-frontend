<template>
	<div class="modal">
		<div class="modal__mask">
			<div class="modal__wrapper">
				<div class="modal__container">
					<div class="modal__close-button" @click="$emit('close')"></div>
					<div class="modal__body">
						<slot></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Popup"
  }
</script>


<style lang="scss" scoped>
	.modal {
		&__mask {
			position: fixed;
			z-index: 9998;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .7);
			display: block;
			transition: opacity .3s ease;
		}
		
		&__wrapper {
			display: flex;
			height: 100%;
		}
		
		&__container {
			max-width: 500px;
			margin: auto;
			padding: 10px 100px 10px;
			background-color: #fff;
			position: relative;
			border-radius: 4px;
			box-shadow: 0 2px 5px rgba(0, 0, 0, .33);
			transition: all .2s ease;
		}
		
		&__body {
			margin: 20px 0;
		}
		
		&__close-button {
			position: absolute;
			width: 15px;
			height: 15px;
			right: 15px;
			top: 15px;
			cursor: pointer;
			background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZD0iTTI4LjIgMjRMNDcuMSA1LjFjMS4yLTEuMiAxLjItMy4xIDAtNC4yIC0xLjItMS4yLTMuMS0xLjItNC4yIDBMMjQgMTkuNyA1LjEgMC45Yy0xLjItMS4yLTMuMS0xLjItNC4yIDAgLTEuMiAxLjItMS4yIDMuMSAwIDQuMmwxOC45IDE4LjlMMC45IDQyLjljLTEuMiAxLjItMS4yIDMuMSAwIDQuMkMxLjUgNDcuNyAyLjIgNDggMyA0OHMxLjUtMC4zIDIuMS0wLjlsMTguOS0xOC45TDQyLjkgNDcuMWMwLjYgMC42IDEuNCAwLjkgMi4xIDAuOXMxLjUtMC4zIDIuMS0wLjljMS4yLTEuMiAxLjItMy4xIDAtNC4yTDI4LjIgMjR6Ii8+PC9zdmc+);
		}
	}
	
	@media only screen and (max-width : 600px) {
		.modal {
			&__container {
				padding: 10px 25px;
			}
		}
	}
</style>
