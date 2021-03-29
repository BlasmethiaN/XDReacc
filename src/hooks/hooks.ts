import { useRouter } from "next/router"
import { useEffect } from "react"
import { useCurrentUser } from "../api/routes"

export const useRedirectIfLoggedOut = () => {
  const router = useRouter()
  const { data: currentUser } = useCurrentUser()

  useEffect(() => {
    if (!currentUser) {
      router.replace('/')
    }
  }, [currentUser])
}

