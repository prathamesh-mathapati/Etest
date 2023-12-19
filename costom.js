import React, { useState } from 'react'

export function useConsumeHooks () {
  const [count, setCount] = useState(0)
  const constHandle = () => {
    setCount(count + 1)
  }
  return {
    count,
    constHandle
  }
}
