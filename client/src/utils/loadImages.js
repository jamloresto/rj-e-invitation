const images = Object.values(
	import.meta.glob("../assets/images/gallery/*.{jpg,jpeg,png,svg}", {
		eager: true,
	})
).map((module) => module.default);

export default images;
