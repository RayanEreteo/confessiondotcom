

import MainUI from './components/MainUI'

export default async function Home() {
  const response = await fetch("http://localhost:8080/getConfession", {method: 'POST', cache: "no-cache"})
  const data = await response.json();

  return (
    <MainUI originalConfession={data.confession}></MainUI>
  )
}