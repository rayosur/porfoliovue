<template>
	<article class="media">
		<figure class="media-left">
			<font-awesome-icon :icon="['fas', icon]" fixed-width :style="{ color: '#7957d5' }" size="4x"></font-awesome-icon>
			</figure>
		<div class="media-content">
			<div class="content">
				<p class="title is-4">{{title}}</p>
				<p class="subtitle is-5">{{content}}</p>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		props: {
			icon: {type: String},
			title: {type: String},
			content: {type: String}
		}
	}
</script>

<style scoped>
/*	.media-left {
		background: black;
		padding: 10px;
		border-radius: 10%;
	}*/
</style>