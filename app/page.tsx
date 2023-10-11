'use client'

import { Box, Button } from '@chakra-ui/react'
import { useAtom, useSetAtom } from 'jotai'

import BottomBox from '@/components/BottomBox'
import { catAtom, persistCatAtom } from '@/lib/jotai/atom'

export default function Home() {
  const [cat, setCat] = useAtom(catAtom)
  const setPersistCat = useSetAtom(persistCatAtom)

  function changeAge() {
    setCat(cat => ({ ...cat, age: cat.age + 1 }))

    setPersistCat(cat => ({ ...cat, age: cat.age + 4 }))
  }

  return (
    <Box>
      <Box>Esto es una Página Home</Box>
      <Button onClick={changeAge}>Mostrar Datos</Button>
      <BottomBox />
    </Box>
  )
}
