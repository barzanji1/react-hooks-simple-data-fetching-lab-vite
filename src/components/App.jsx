import { useEffect, useState } from "react"

function App() {
  const [dogImage, setDogImage] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchDogImage = async () => {
    setLoading(true)

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await response.json()
      setDogImage(data.message)
    } catch (error) {
      console.error("Failed to fetch dog image:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDogImage()
  }, [])

  return (
    <main>
      <h1>Random Dog Image</h1>

      {loading ? <p>Loading...</p> : <img src={dogImage} alt="Random dog" />}

      <button onClick={fetchDogImage}>Get New Dog</button>
    </main>
  )
}

export default App