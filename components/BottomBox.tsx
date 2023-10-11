import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'

import { catAtom, persistCatAtom } from '@/lib/jotai/atom'

export default function Home() {
  const [cat] = useAtom(catAtom)
  const [persistCat] = useAtom(persistCatAtom)

  return (
    <Box marginTop={'10px'}>
      <Box>{cat.id.toString()}</Box>
      <Box>{cat.name.toString()}</Box>
      <Box>{cat.age.toString()}</Box>

      <Box marginTop={'10px'}>{persistCat.id.toString()}</Box>
      <Box>{persistCat.name.toString()}</Box>
      <Box>{persistCat.age.toString()}</Box>
    </Box>
  )
}
