// Import necessary modules
import { $ } from "./helper.js";

// VARS
const loader = $('#loader');
const errorDiv = $('#error');

// LOGIC

// Loading state
export function loading() {
  loader.classList.add('active');
}

export function loaded() {
  loader.classList.remove('active');
}

// Error state
export function showError() {
  errorDiv.classList.add('active');
}

export function hideError() {
  errorDiv.classList.remove('active');
}