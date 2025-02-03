const isErrorValue = (val: unknown) => val !== undefined && val !== null && val !== false && val !== 0;

export default isErrorValue;
