
import axios, { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { Usuario } from '@/src/interfaces'
import NotificationContext from '@/src/context/NotificationContext'

interface AuthFetchProps {
  endpoint: string
  redirectRoute?: string
  formData: Usuario | null
  options?: AxiosRequestConfig<any>
}

export function useAuthFetch () {
  const { showNotification } = useContext(NotificationContext)
  const router = useRouter()

  const authRouter = async ({
    endpoint,
    formData,
    redirectRoute,
    options
  }: AuthFetchProps) => {
    try {
      const { data } = await axios.post(
        endpoint == 'register' ? `http://localhost:3600/api/auth/${endpoint}` : `/api/auth/${endpoint}` ,
        formData,
        options
      )
      showNotification({
        msj: data.message,
        open: true,
        status: 'success'
      })

      if (redirectRoute) router.push(redirectRoute)
    } catch (error: any) {
      showNotification({
        msj: endpoint == 'register' ? error.response.data.error : error.response.data.message as string,
        open: true,
        status: 'error'
      })
    }
  }

  return authRouter
}