import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type CatAtom = {
  id: number
  name: string
  age: number
}

const catAtom = atom<CatAtom>({ id: 1, name: 'Lali', age: 2 })

const persistCatAtom = atomWithStorage<CatAtom>('cat', {
  id: 1,
  name: 'Lali',
  age: 2,
})

export { catAtom, persistCatAtom }
