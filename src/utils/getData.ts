// type getData = {
// 	resource?:string,
// 	query?:string
// }

// export const getData = async ({resource,query}:getData) => {
// 	const response = await fetch(`${process.env.BASE_URL}/${resource}/${query}`);
// 	// The return value is *not* serialized
// 	// You can return Date, Map, Set, etc.

// 	if (!response.ok) {
// 		// This will activate the closest `error.js` Error Boundary
// 		throw new Error('Failed to fetch data');
// 	}

// 	const data = await response.json();
// 	return data
// };

export const getData = async () => {
	const response = await fetch('');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!response.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();
	return data
};


