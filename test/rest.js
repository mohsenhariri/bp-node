const res = await fetch('http://127.0.0.1:4000/')
if (res.ok) {
  const data = await res.json()
  console.log(data)
}
