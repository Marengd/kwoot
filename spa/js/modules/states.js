import { $ } from "./helper.js";

// Error state
export function showError() {
    const errorDiv = $('#error');
    errorDiv.classList.add('active');
  }