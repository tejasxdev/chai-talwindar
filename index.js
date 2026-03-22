const supportedClasses = {
	// paddings
	"p-ekdum-thodi": { padding: "0.5rem" },
	"p-thodi-thodi": { padding: "1rem" },
	"p-thodi": { padding: "1.5rem" },
	"p-thik": { padding: "2rem" },
	"p-zyada": { padding: "2.5rem" },
	"p-thodi-zyada": { padding: "3rem" },
	"p-thodi-aur-zyada": { padding: "3.5rem" },
	"p-bohot-zyada": { padding: "4rem" },
	"p-bohot-hi-zyada": { padding: "4.5rem" },

	// margins
	"m-ekdum-thodi": { margin: "0.5rem" },
	"m-thodi-thodi": { margin: "1rem" },
	"m-thodi": { margin: "1.5rem" },
	"m-thik": { margin: "2rem" },
	"m-zyada": { margin: "2.5rem" },
	"m-thodi-zyada": { margin: "3rem" },
	"m-thodi-aur-zyada": { margin: "3.5rem" },
	"m-bohot-zyada": { margin: "4rem" },
	"m-bohot-hi-zyada": { margin: "4.5rem" },

	// bg colors
	"bg-ekdum-light": { backgroundColor: "oklch(97.1% 0.014 343.198)" },
	"bg-thoda-light": { backgroundColor: "oklch(94.8% 0.028 342.258)" },
	"bg-light": { backgroundColor: "oklch(89.9% 0.061 343.231)" },
	"bg-thik-light": { backgroundColor: "oklch(82.3% 0.12 346.018)" },
	"bg-neutral": { backgroundColor: " oklch(71.8% 0.202 349.761)" },
	"bg-thoda-dark": { backgroundColor: " oklch(65.6% 0.241 354.308)" },
	"bg-thik-dark": { backgroundColor: "oklch(59.2% 0.249 0.584)" },
	"bg-thoda-zyada-dark": { backgroundColor: "oklch(52.5% 0.223 3.958)" },
	"bg-bohot-zyada-dark": { backgroundColor: "oklch(45.9% 0.187 3.815)" },
	"bg-bohot-hi-zyada-dark": { backgroundColor: "oklch(28.4% 0.109 3.907)" },

	//text colors
	"color-ekdum-light": { color: "oklch(97.1% 0.014 343.198)" },
	"color-thoda-light": { color: "oklch(94.8% 0.028 342.258)" },
	"color-light": { color: "oklch(89.9% 0.061 343.231)" },
	"color-thik-light": { color: "oklch(82.3% 0.12 346.018)" },
	"color-neutral": { color: " oklch(71.8% 0.202 349.761)" },
	"color-thoda-dark": { color: " oklch(65.6% 0.241 354.308)" },
	"color-thik-dark": { color: "oklch(59.2% 0.249 0.584)" },
	"color-thoda-zyada-dark": { color: "oklch(52.5% 0.223 3.958)" },
	"color-bohot-zyada-dark": { color: " oklch(45.9% 0.187 3.815)" },

	// font size
	"font-ekdum-chhote": { fontSize: "0.75rem" },
	"font-thode-chhote": { fontSize: "0.875rem" },
	"font-chhote": { fontSize: "1rem" },
	"font-thik": { fontSize: "1.125rem" },
	"font-bade": { fontSize: "1.5rem" },
	"font-thode-bade": { fontSize: "2rem" },
	"font-thode-zyada-bade": { fontSize: "3rem" },
	"font-bohot-zyada-bade": { fontSize: "3rem" },
	"font-bohot-zyada-hi-bade": { fontSize: "4rem" },

	// font color
	"font-ekdum-light": { color: "oklch(97.1% 0.014 343.198)" },
	"font-thoda-light": { color: "oklch(94.8% 0.028 342.258)" },
	"font-light": { color: "oklch(89.9% 0.061 343.231)" },
	"font-thik-light": { color: "oklch(82.3% 0.12 346.018)" },
	"font-neutral": { color: "oklch(71.8% 0.202 349.761)" },
	"font-thoda-dark": { color: "oklch(65.6% 0.241 354.308)" },
	"font-thik-dark": { color: "oklch(59.2% 0.249 0.584)" },
	"font-thoda-zyada-dark": { color: "oklch(52.5% 0.223 3.958)" },
	"font-bohot-zyada-dark": { color: "oklch(45.9% 0.187 3.815)" },

	// text align
	"text-center": { textAlign: "center" },

	// borders
	"border-1-ekdum-light": { border: "1px solid oklch(97.1% 0.014 343.198)" },
	"border-1-thoda-light": { border: "1px solid oklch(94.8% 0.028 342.258)" },
	"border-1-light": { border: "1px solid oklch(89.9% 0.061 343.231)" },
	"border-1-thik-light": { border: "1px solid oklch(82.3% 0.12 346.018)" },
	"border-1-neutral": { border: "1px solid oklch(71.8% 0.202 349.761)" },
	"border-1-thoda-dark": { border: "1px solid oklch(65.6% 0.241 354.308)" },
	"border-1-thik-dark": { border: "1px solid oklch(59.2% 0.249 0.584)" },
	"border-1-thoda-zyada-dark": {
		border: "1px solid oklch(52.5% 0.223 3.958)",
	},
	"border-1-bohot-zyada-dark": {
		border: "1px solid oklch(45.9% 0.187 3.815)",
	},

	"border-2-ekdum-light": { border: "2px solid oklch(97.1% 0.014 343.198)" },
	"border-2-thoda-light": { border: "2px solid oklch(94.8% 0.028 342.258)" },
	"border-2-light": { border: "2px solid oklch(89.9% 0.061 343.231)" },
	"border-2-thik-light": { border: "2px solid oklch(82.3% 0.12 346.018)" },
	"border-2-neutral": { border: "2px solid oklch(71.8% 0.202 349.761)" },
	"border-2-thoda-dark": { border: "2px solid oklch(65.6% 0.241 354.308)" },
	"border-2-thik-dark": { border: "2px solid oklch(59.2% 0.249 0.584)" },
	"border-2-thoda-zyada-dark": {
		border: "2px solid oklch(52.5% 0.223 3.958)",
	},
	"border-2-bohot-zyada-dark": {
		border: "2px solid oklch(45.9% 0.187 3.815)",
	},

	// radius
	"r-ekdum-thodi": { margin: "0.125rem" },
	"r-thodi-thodi": { margin: "0.25rem" },
	"r-thodi": { margin: "0.5rem" },
	"r-thik": { margin: "0.75rem" },
	"r-zyada": { margin: "1rem" },
	"r-thodi-zyada": { margin: "1.5rem" },
	"r-thodi-aur-zyada": { margin: "2rem" },
	"r-bohot-zyada": { margin: "2.5rem" },
	"r-bohot-hi-zyada": { margin: "10rem" },
};

function applyChaiTalwindar() {
	const elements = document.querySelectorAll(".chai");

	elements.forEach((e) => {
		e.classList.forEach((c) => {
			if (supportedClasses[c]) {
				Object.assign(e.style, supportedClasses[c]);
			}
		});
	});
}

function initChai() {
	applyChaiTalwindar();

	const observer = new MutationObserver(() => {
		applyChaiTalwindar();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
}

if (typeof window !== "undefined") {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initChai);
	} else {
		initChai();
	}
}
