'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileTab } from './profileTab'


type Props = {}

const Profile = (props: Props) => {
    return (
        <div className='container py-8'>
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className='border-px border-[#D7D7D7] bg-white rounded-2xl px-4 mb-6'>
                    <TabsTrigger value="profile" className='text-black rounded-xl'>Profile</TabsTrigger>
                    <TabsTrigger className='text-black rounded-xl' value="tasks">Tasks</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <ProfileTab />
                </TabsContent>
                <TabsContent value="tasks">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}

export default Profile