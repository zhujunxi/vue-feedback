<template>
	<div class="me-modal-wrap">
		<transition name="slide-fade">
			<div class="me-modal" v-show="visible">
				<h1>hello world</h1>
			</div>
		</transition>
		<transition name="fade-in">
			<div class="me-mask" @click.stop="close" v-show="visible"></div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			visible: false
		}
	},
	methods: {}
}
</script>

<style lang="less" scoped>
.me-modal-wrap {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
	.me-modal {
		z-index: 10000;
		background: #fff;
		padding: 20px;
		border-radius: 5px;
	}
	.me-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
	}
}
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
	transform: scale(1.1);
	transform: translateY(20px);
	opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
	transition: all 0.3s ease;
}

.fade-in-enter,
.fade-in-leave-to {
	opacity: 0;
}
</style>
