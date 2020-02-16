/* eslint-disable */
import _throttle from "lodash.throttle";
import { useEffect, useState } from "react";

let supportsPassive = false;
try {
	if (typeof window !== "undefined") {
		const opts = Object.defineProperty({}, "passive", {
			get: function() {
				supportsPassive = true;
			},
		});
		(<any>window).addEventListener("testPassive", null, opts);
		(<any>window).removeEventListener("testPassive", null, opts);
	}
} catch (e) {}

const getPosition = () => {
	if (typeof window === "undefined") {
		return { x: 0, y: 0 };
	}
	return {
		x: window.pageXOffset,
		y: window.pageYOffset,
	};
};

const defaultOptions = {
	throttle: 100,
};

function useWindowScrollPosition(options: any) {
	const opts = Object.assign({}, defaultOptions, options);

	const [position, setPosition] = useState(getPosition());

	useEffect(() => {
		const handleScroll = _throttle(() => {
			setPosition(getPosition());
		}, opts.throttle);

		window.addEventListener(
			"scroll",
			handleScroll,
			supportsPassive ? { passive: true } : false,
		);

		return () => {
			handleScroll.cancel();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return position;
}

export default useWindowScrollPosition;
