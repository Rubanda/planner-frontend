"use client"

import * as React from "react";
import { signIn, signOut } from "next-auth/react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }


export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const handleResize = () => setWidth(window.innerWidth);
  React.useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  const [width, setWidth] = React.useState(0);
  async function handleSendEmail() {
    setIsLoading(true)
  }
  const [error, setError] = React.useState<string | null>(null)
  const responseSuccessGoogle = async (response: any) => {
    console.log('response::', response)
    const tokenId = response.credential
    await signIn('credentials', {
      tokenId: tokenId,
      status: 'google',
      redirect: false,
      callbackUrl: "/"
    }).then((res: any) => {
      if (res.error) {
        console.log(res.error)
        toast({ description: 'Error:' + res.error })
      } else {
        console.log('res::',res)
        toast({ description: 'login success ✔️' })
      }
    }).catch((err) => {
      setError(err)
      // toast('can not login')
    })
  };

  return (
    <div className="grid  justify-center gap-6 p-5" {...props}>
      {/* <div className="border-2 border-solid border-black mt-5"> */}
        <GoogleOAuthProvider clientId="107423939805-33hnhoc23rbkk17lahs0t6l0j4sg76s3.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(response)=>{
              console.log('success',response)
              toast({ description: 'login success ✔️' })
            }}
            locale="en"
            theme="outline"
            width={width >= 650 ? "385px" : "250px"}
          />
        </GoogleOAuthProvider>

      {/* </div> */}
      {/* <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), className)}
        onClick={() => {
          setIsGoogleLoading(true)
          signIn('google', { callbackUrl: '/dashboard' })
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}Google
      </button> */}
    </div>
  )
}