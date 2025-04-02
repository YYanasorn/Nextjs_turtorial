"use client"

import React from 'react'
import { Button } from '../ui/button'
import { IconLogout } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const AppLogoutButton = () => {

    const router = useRouter();

    const handleLogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("./login");
                }
            }
        });
    }
  return (
    <div>
      <Button onClick={handleLogOut} className="inline-flex justify-center gap-0.5 overflow-hidden rounded-full bg-zinc-900 px-3 py-1 text-sm/6 font-medium text-white transition hover:bg-zinc-700">
            <IconLogout/>
            Log out
      </Button>
    </div>
  )
}

export default AppLogoutButton
