// Inherited from https://github.com/grammyjs/debug/blob/502f75667a64391adb9a73b1312a52a8e9ba5f64/colors.ts

// https://github.com/debug-js/debug/blob/4.3.7/src/browser.js
const colors = [
	0x0000cc, 0x0000ff, 0x0033cc, 0x0033ff, 0x0066cc, 0x0066ff, 0x0099cc, 0x0099ff, 0x00cc00, 0x00cc33, 0x00cc66,
	0x00cc99, 0x00cccc, 0x00ccff, 0x3300cc, 0x3300ff, 0x3333cc, 0x3333ff, 0x3366cc, 0x3366ff, 0x3399cc, 0x3399ff,
	0x33cc00, 0x33cc33, 0x33cc66, 0x33cc99, 0x33cccc, 0x33ccff, 0x6600cc, 0x6600ff, 0x6633cc, 0x6633ff, 0x66cc00,
	0x66cc33, 0x9900cc, 0x9900ff, 0x9933cc, 0x9933ff, 0x99cc00, 0x99cc33, 0xcc0000, 0xcc0033, 0xcc0066, 0xcc0099,
	0xcc00cc, 0xcc00ff, 0xcc3300, 0xcc3333, 0xcc3366, 0xcc3399, 0xcc33cc, 0xcc33ff, 0xcc6600, 0xcc6633, 0xcc9900,
	0xcc9933, 0xcccc00, 0xcccc33, 0xff0000, 0xff0033, 0xff0066, 0xff0099, 0xff00cc, 0xff00ff, 0xff3300, 0xff3333,
	0xff3366, 0xff3399, 0xff33cc, 0xff33ff, 0xff6600, 0xff6633, 0xff9900, 0xff9933, 0xffcc00, 0xffcc33,
];

// https://github.com/debug-js/debug/blob/4.3.4/src/common.js#L41
export function selectColour(ns: string): number {
	let hash = 0;

	for (let i = 0; i < ns.length; i++) {
		hash = (hash << 5) - hash + ns.charCodeAt(i);
		hash |= 0; // Convert to 32bit integer
	}

	return colors[Math.abs(hash) % colors.length];
}

export const colourNs = (ns: string): string => {
	const color = selectColour(ns);
	const r = color >> 16;
	const g = (color >> 8) & 0xff;
	const b = color & 0xff;
	return `\x1b[38;2;${r};${g};${b}m${ns}\x1b[1;0m`;
};
