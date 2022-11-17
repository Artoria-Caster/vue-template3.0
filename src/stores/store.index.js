//全局的store  需要放在这里
import { defineStore } from 'pinia'
/*
	ref()s become state properties
	computed()s become getters
	function()s become actions
*/
export const useMainStore = defineStore('main', () => {})
