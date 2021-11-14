const useChunks = (arr , itemsChunck) => {
  const length = Math.max(arr.length / itemsChunck, 1);
  const chunks = [];
  for (var i = 0; i < itemsChunck; i++) {
    if (length * (i + 1) <= arr.length) chunks.push(arr.slice(length * i, length * (i + 1)));
  }

  return chunks;
}

export { useChunks };