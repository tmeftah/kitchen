import { writable, derived } from "svelte/store";

export const isAuthenticated = writable(false);
export const token = writable();
export const user = writable({});

export const error = writable();
