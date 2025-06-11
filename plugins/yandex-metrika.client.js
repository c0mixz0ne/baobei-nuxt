export default defineNuxtPlugin(() => {
	const initMetrika = () => {
		if (typeof window === 'undefined') return;
		if (window['ym']) return;

		(function (m, e, t, r, i, k, a) {
			m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
			m[i].l = 1 * new Date();
			k = e.createElement(t), a = e.getElementsByTagName(t)[0];
			k.async = 1; k.src = r;
			a.parentNode.insertBefore(k, a);
		})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

		ym(import.meta.env.VITE_YMETRIKA, "init", {
			clickmap: true,
			trackLinks: true,
			accurateTrackBounce: true,
		});

		console.log('Yandex Metrika инициализирована');
	}

	return {
		provide: {
			initMetrika
		}
	}
})