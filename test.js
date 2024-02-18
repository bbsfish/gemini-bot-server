async function main() {
  const data = { message: 'hello' };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  };
  const res = await fetch('https://script.google.com/macros/s/AKfycbxPBl6lgCrs2PHNhQEcJkFSz0A0R-reH-m1exfXYHCZd30jy9shoBFz5-gxvIMK_Xk6/exec', options);
  const resData = await res.json();
  console.log(resData);
}

main();