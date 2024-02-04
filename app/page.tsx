

import MainUI from './components/MainUI'

export default async function Home() {
  let data;

  try {
    const response = await fetch("http://localhost:8080/getConfession", {method: 'POST', cache: "no-cache"})
    data = await response.json();
  } catch (error) {
    data = {success: false,confession: {confession: "Impossible de récupérer une confession. Merci de réessayer."}}
  }

  return (
    <MainUI originalConfession={data}></MainUI>
  )
}