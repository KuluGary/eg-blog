---
title: Use localStorage in React with usePersistedStorage
description: Use this custom React hook to deal with localStorage and sessionStorage.
author: Gary Cuétara
date: 2022-06-05T23:51:12.940Z
tags:
  - post
  - featured
image: /assets/blog/carbon.png
imageAlt: Image of the usePersistedStorage function
---
When working in any type of Javascript project, you most likely will use your localStorage in some capacity. In some simples To-do apps it would be instead of a database; and in some fullstack apps could be used to store a JWT to authenticate a user.

In React, if you can do something with hooks you most likely should. In order to accomplish this, let's make a React hook that allows us to work with it.

```javascript
function usePersistedStorage(key, initialValue, storage) {
  const [value, setValue] = useState();

  return [value, setValue];
}

export { usePersistedStorage };
```

With this we've declared a basic hook. We've added a `useState` hook inside our custom hook, which is gonna return these same values.

Inside our `useState` we're gonna set our default value as a callback.

```javascript
const [value, setValue] = useState(() => {
    const jsonValue = storage?.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return initialValue();

    return initialValue;
  });
```

This does the following:

1. Get the json value from storage.
2. Check if the value is not null, and in that case parse it and return it.
3. Check if the initialValue is a function, and in that case return it.
4. If nothing else, return the initialValue.

Next, we're gonna add a `useEffect` hook inside our custom hook.

```javascript
  useEffect(() => {
    storage?.setItem(key, JSON.stringify(value));
  }, [key, value]);
```

With this, every time the key or initialValue changes we set the new value in the storage.

Finally, we're gonna add a couple of details for better QoL. 

```javascript
// Change .env variable for each project or use blank prefix
const PREFIX = process.env.NEXT_PUBLIC_STORAGE_PREFIX ?? "";

// For NextJS, check that the window exists (is in Browser and not server) to get storage
const defaultStorage = typeof window !== "undefined" ? localStorage : null;
```

The PREFIX variable is mostly used for development. When developing in localhost, all apps save into the same localStorage and it can get messy. Using a prefix in each save, you can encapsulate each app's localStorage.

The defaultStorage variable saves which is the defaultStorage. Through the storage key passed to the hook you can choose between localStorage or sessionStorage, but since I developed this hook for a NextJS app, I also check if localStorage exists in the window global object, as it only exists in the client.

The final hook component looks like this.

```javascript
import { useState, useEffect } from "react";

// Change .env variable for each project or use blank prefix
const PREFIX = process.env.NEXT_PUBLIC_STORAGE_PREFIX ?? "";

// For NextJS, check that the window exists (is in Browser and not server) to get storage
const defaultStorage = typeof window !== "undefined" ? localStorage : null;

function usePersistedStorage(key, initialValue, storage = defaultStorage) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = storage?.getItem(prefixedKey);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") return initialValue();

    return initialValue;
  });

  useEffect(() => {
    storage?.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

export { usePersistedStorage };
```

\* This hook is based on a tutorial by [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified).