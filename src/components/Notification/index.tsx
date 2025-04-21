import { StatusNotification } from '@/src/interfaces'

interface Props {
  status: StatusNotification
  msj: string | null
}

export const Notification = ({ status, msj }: Props) => {
  return (
    <div className={`notification ${[status!]}`}>
      <p>{msj}</p>
    </div>
  )
}