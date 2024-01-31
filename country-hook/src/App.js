// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const useField = (type) => {
//   const [value, setValue] = useState('')

//   const onChange = (event) => {
//     setValue(event.target.value)
//   }

//   return {
//     type,
//     value,
//     onChange
//   }
// }

// const useCountry = (name) => {
//   const [country, setCountry] = useState(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios
//           .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
//           .then((response) => response.data)
//         setCountry(response.data[0])
//       } catch (error) {
//         console.error('Error fetching country:', error)
//         setCountry(null)
//       }
//     }
//     if (name) {
//       fetchData()
//     } else {
//       setCountry(null)
//     }
//   }, [name])

//   return country
// }

// const Country = ({ country }) => {
//   if (!country) {
//     return null
//   }

//   if (!country.found) {
//     return <div>not found...</div>
//   }

//   return (
//     <div>
//       <h3>{country.name.common} </h3>
//       <div>capital {country.capital[0]} </div>
//       <div>population {country.population}</div>
//       <img
//         src={country.data.flag}
//         height="100"
//         alt={`flag of ${country.data.name}`}
//       />
//     </div>
//   )
// }

// const App = () => {
//   const nameInput = useField('text')
//   const [name, setName] = useState('')
//   const country = useCountry(name)

//   const fetch = (e) => {
//     e.preventDefault()
//     setName(nameInput.value)
//   }

//   return (
//     <div>
//       <form onSubmit={fetch}>
//         <input {...nameInput} />
//         <button>find</button>
//       </form>

//       <Country country={country} />
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        )
        setCountry(response.data[0])
      } catch (error) {
        console.error('Error fetching country:', error)
        setCountry(null)
      }
    }

    if (name) {
      fetchData()
    } else {
      setCountry(null)
    }
  }, [name])

  return country
}

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.name) {
    return (
      <div>
        not found...
      </div>
    );
  }

  return (
    <div>
      <h3>{country.name.common} </h3>
      <div>capital {country.capital[0]} </div>
      <div>population {country.population}</div>
      <img src={country.flags.svg} height='100' alt={`flag of ${country.name.common}`} />
    </div>
  );
};


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
