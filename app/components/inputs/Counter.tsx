import React, { useCallback } from 'react'

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange:(value: number) => void;
}

const Counter:React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value - 1)
  }, [value, onChange])

  return (
    <div>
      
    </div>
  )
}

export default Counter