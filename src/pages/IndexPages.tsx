import { useAppStore } from "../store/useAppStore"

export default function IndexPages() {
  useAppStore((state)=>state.categories)
  return (
    <>
      <h1>Inicio hola</h1>
    </>
  )
}
