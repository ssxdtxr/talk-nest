export const parseBoolean = (value: string): boolean => {
	if (typeof value === 'boolean') {
		return value
	}

	if (typeof value === 'string') {
		const lowerValue = value.trim().toLocaleLowerCase()
		if (lowerValue === 'true') {
			return true
		} else {
			return false
		}
	}

	throw new Error(
		`Не удалось преобразовать значение ${value} в логическое значение`
	)
}
