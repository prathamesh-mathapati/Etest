import React, { useEffect, useState } from 'react'

function Dropdown () {
  const [data, setData] = useState([])
  const [selectedValue, setSelectedValue] = useState(1)
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50
  const pageDisplayDuration = 1000 // 10 seconds in milliseconds

  const token = 'Bearer 41|U4khD9nvLQ2gXZ4girfTdQzfIABV7KoSNQp1kQCq262dadfc' //
  // Replace with your actual access token
  const apiEndpoint = 'https://haslit.tech/api/our-apis' // Replace with your API endpoint
  const apiEndpoinusr = 'https://haslit.tech/api/user'
  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          Authorization: token
        }
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        let userRespose = await fetch(apiEndpoinusr, {
          method: 'GET',
          headers: {
            Authorization: token
          }
        })
        const userResposeData = await userRespose.json()
        console.log(userResposeData)
      }

      const responseData = await response.json()
      if (Array.isArray(responseData.data)) {
        // Check if data in the response is an array before sorting
        const jsonData = responseData.data // Extract the array of data
        const latestItems = jsonData.sort((a, b) => a.id - b.id).slice(-20)
        /* console.log(latestItems); */
        setData(latestItems)
      } else {
        console.error('Received data is not an array:', responseData.data)
        // Handle the non-array data here, or set an appropriate default value for data.
        // For example, you can set an empty array:½
        setData([])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(
    () => {
      const selectedItem = data.find(item => item.id === selectedValue)
      setSelectedItem(selectedItem)
    },
    [selectedValue, data]
  )
  const handleDropdownChange = event => {
    setSelectedValue(parseInt(event.target.value))
  }
  const paginateData = (data, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return data.slice(startIndex, endIndex)
  }
  const handlePageChange = page => {
    setCurrentPage(page)
  }
  const paginatedData = paginateData(data, currentPage, itemsPerPage)
  useEffect(
    () => {
      const timer = setTimeout(() => {
        if (currentPage * itemsPerPage >= data.length) {
          setCurrentPage(1)
        } else {
          setCurrentPage(currentPage + 1)
        }
      }, pageDisplayDuration)
      return () => clearTimeout(timer)
    },
    [currentPage, data]
  )
  const dataFields = Object.keys(data[0] || {}) // Get all field names dynamically
  console.log(dataFields, 'dataFields')
  return (
    <div>
      <div style={{ width: '1200px', height: '1200px', overflow: 'auto' }}>
        <table
          className='table table-striped table-bordered'
          style={{ width: '100%' }}
        >
          <thead>
            <tr>
              {dataFields.map((field, index) =>
                <th key={index}>
                  {field}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, itemIndex) =>
              <tr key={itemIndex}>
                {dataFields.map((field, fieldIndex) =>
                  <td key={fieldIndex}>
                    {item[field]}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default Dropdown
