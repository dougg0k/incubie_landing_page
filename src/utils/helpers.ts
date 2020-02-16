export const scrollToHashId = (hashId: string, minusInPx: number) => {
	const el = document?.querySelector(hashId) as HTMLElement;
	const location = el?.offsetTop - minusInPx;
	window.scroll({ top: location, behavior: "smooth" });
};
