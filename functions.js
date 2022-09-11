function capitalize(string) {
  return string[0].toUpperCase() + Array.from(string).slice(1).join('');
}

export { capitalize };
