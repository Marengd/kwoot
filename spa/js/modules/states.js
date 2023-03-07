import { $ } from "./helper.js";

export function loading() {
  const loader = $('#loader');
  loader.classList.add('active');
}

// Error state
export function showError() {
    const errorDiv = $('#error');
    errorDiv.classList.add('active');
  }