import React, { useState, useEffect } from 'react';
import { curry } from 'ramda';
export const trace = curry((str, value) => (console.log(str, value), value));
export const getParent = curry((parentNodeName, target) => (
    target && target.nodeName !== parentNodeName
            ? getParent(parentNodeName)(target.parentElement)
            : target
));
export const isTimePassed = time => startTime => startTime < Date.now() - time;
export const isObject = val =>  Object.prototype.toString.call(val) === '[object Object]';
export const hasClass = curry((className, elem) => elem.classList.contains(className));
export const mapToObj = curry((value, arr) => arr.reduce((acc, step) => ({...acc, [step[value]]: step}), {}));
export const renderItems = curry((items = [], Component, props={}) => 
	Array.isArray(items) && items.map((item, i) => (
		<Component
			{...item}
			{...props}
			index={i}
			key={ item.id ? item.id : i }/>)));
export const setHeaders = params => ({
	headers: {
		'accept': 'application/json',
		'Content-Type': 'application/json',
		...params
	}
});
export const useClickOutsideOfComponent = (fn, selector) => {

	const [state, setState] = useState(true)

	const handleOutsideClick = (e) => {
		return state && fn(e);
	};

	useEffect(() => {
		const target = selector ? document.querySelector(selector) : document;
		target.addEventListener('click', handleOutsideClick);
		return () => target.removeEventListener('click', handleOutsideClick);
	});

	return [state, setState];
};

export const useLocalStorage = (key, initialValue) => {

	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
	  try {
		// Get from local storage by key
		const item = window.localStorage.getItem(key);
		// Parse stored json or if none return initialValue
		return item ? JSON.parse(item) : initialValue;
	  } catch (error) {
		// If error also return initialValue
		console.log(error);
		return initialValue;
	  }
	});
  
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = value => {
	  try {
		// Allow value to be a function so we have same API as useState
		const valueToStore =
		  value instanceof Function ? value(storedValue) : value;
		// Save state
		setStoredValue(valueToStore);
		// Save to local storage
		window.localStorage.setItem(key, JSON.stringify(valueToStore));
	  } catch (error) {
		// A more advanced implementation would handle the error case
		console.log(error);
	  }
	};


	return [storedValue, setValue];
};

export const createTableData = (columnsTitle=[], rowTitle=[]) => {
	const countOfColumns = columnsTitle.length - 1;
	let from = 0;
	let to = countOfColumns;
	return (cellsArray=[]) => {
		const meal = rowTitle.map((item) => {
			const result = [{type: 'row-head', value: item}, ...cellsArray.slice(from, to).map(cell => ({...cell, type: 'cell', hover: false}))];
			from = from + countOfColumns;
			to = to + countOfColumns;
			return result.length && result;
		});
		return [columnsTitle.map(str => ({type: 'column-head', value: str})), ...meal];
	}
};

export const replaceElementInArrayByIndex = curry((index, arr, item) => {
	let cloneOfArr = [...arr];
	cloneOfArr.length > 1 && cloneOfArr.splice(index, 1, item);
	return cloneOfArr;
});

export const addHover = (arrayOfArrays, targetId, isHover, setIsHover) => {
	const targetPlace = arrayOfArrays.map(arr => arr.find((obj) => obj.id === targetId));
	const indexOfRow = targetPlace.findIndex(val => isObject(val));

	if (indexOfRow > 0) {
		const indexOfColumn = arrayOfArrays[indexOfRow].findIndex(obj => obj.id === targetId );

		setIsHover(preveState => {
			return preveState.map((arr, index) => {
				return (
					index === indexOfRow	? arr.map( element => ({...element, hover: isHover})) 
					: arr[indexOfColumn]	? replaceElementInArrayByIndex(indexOfColumn, arr, {...arr[indexOfColumn], hover: isHover})
											: arr
				)
			})
		});
	}
};

export const useIntersect = (ref, handler) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.intersectionRatio > 0.5) {
				handler(false)
				}
			else {
				handler(true)
				}
		},
		{
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		}
	)
	useEffect(() => {
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.unobserve(ref.current);
		}
	}, [])
};