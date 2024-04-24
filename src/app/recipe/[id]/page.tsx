export default function Recipe({ params }: { params: { id: number } }) {
  return <div>Minha receita: {params.id}</div>
}