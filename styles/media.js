const breakpoints = {
	lg: 1285,
	md: 768,
	sm: 576,
};

function getBreakpoint(value) {
	if (Number.isInteger(value)) {
		return value;
	}
	if (breakpoints[value]) {
		return breakpoints[value];
	}

	throw new Error('Invalid breakpoint');
}

export const below = (breakpoint, css) =>
	`@media (max-width: ${getBreakpoint(breakpoint)}px) {
        ${css}
    }`;

export const above = (breakpoint, css) =>
	`@media (min-width: ${getBreakpoint(breakpoint) + 1}px) {
        ${css}
    }`;