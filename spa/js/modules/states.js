import { $ } from "./helper.js";

const loader = $('#loader');

export function loading() {
  loader.classList.add('active');
}

export function loaded() {
  loader.classList.remove('active');
}

// Error state
export function showError() {
    const errorDiv = $('#error');
    errorDiv.classList.add('active');
  }