import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Icons } from "@/components/icons"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type Props = {}

export const ProfileTab = (props: Props) => {
    return (
        <>
            <div className='flex flex-col gap-y-10 w-full'>
                <div className='bg-white border-[1px solid rgba(22, 42, 86, 0.15)] rounded-xl m-[3rem 0px] p-8'>
                    <div className='flex justify-between items-start flex-wrap'>
                        <div className='text-primary font-semibold border-2 border-red-400 w-[50%] p-4'>
                            <div className='ml-2 mb-1'>
                                <Icons.user />
                            </div>
                            <div>
                                <h2 className='text-xl opacity-80'>
                                    Personal Information
                                </h2>
                            </div>
                        </div>
                        <div className='text-black border-2 border-green-400 flex-grow p-4'>
                            <Card className='bg-inherit border-0 shadow-none'>
                                <CardContent className='border-0'>
                                    <form>
                                        <div className="grid w-full items-center gap-4 max-w-[350px] mt-9">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label className='text-black' htmlFor="name">Name</Label>
                                                <Input id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label className='text-black' htmlFor="name">Surname</Label>
                                                <Input id="name" placeholder="Enter your surname" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label className='text-black' htmlFor="name">Email</Label>
                                                <Input id="name" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-end w-full">
                                    <Button disabled>Deploy</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-[1px solid rgba(22, 42, 86, 0.15)] rounded-xl m-[3rem 0px] p-8 '>
                    <div className='flex justify-between items-start flex-wrap'>
                        <div className='text-primary font-semibold border-2 border-red-400 w-[50%] p-4'>
                            <div className='ml-2 mb-1'>
                                <Icons.building />
                            </div>
                            <div>
                                <h2 className='text-xl opacity-80'>
                                    Business Information
                                </h2>
                            </div>
                        </div>
                        <div className='text-black border-2 border-green-400 flex-grow p-4'>
                            <Card className='bg-inherit border-0 shadow-none'>
                                <CardContent className='border-0'>
                                    <form>
                                        <div className="grid w-full items-center gap-4 max-w-[350px] mt-9">
                                            <div className="flex flex-row gap-x-4">
                                                <div>
                                                    <p className='text-black'>Change Profile Picture</p>
                                                </div>
                                                <button className='w-[60px] h-[60px] outline-none'>
                                                    <Image className='h-[60px] w-[60px] bg-[#c4c4c4] border-[50%] object-cover' src=''  alt='profile pic'/>
                                                </button>
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label className='text-black' htmlFor="name">Company Name</Label>
                                                <Input id="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label className='text-black' htmlFor="name">Company Email</Label>
                                                <Input id="name" placeholder="Enter your email" />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-end w-full">
                                    <Button disabled>Deploy</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}