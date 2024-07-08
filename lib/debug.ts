function debug(value: any) {
  const str = JSON.stringify(value, null, 4); // (Optional) beautiful indented output.
  console.log(str); // Logs output to dev tools console.
}

export { debug };
