export const getApiResource = async (url: string) => {
	try {
	const res = await fetch(url);
		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}
		return await res.json();
	} catch (error) {
		console.error('	Could not fetch.', error);
		return false;
	}
};

export const makeConCorrentRequest = async (url:any) => {
	const res:any = await Promise.all(url.map((res:any) => {
			return fetch(res).then(res => res.json())
	}))
	return res
}


