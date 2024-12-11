import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
 
 export const Profile = () => {
   return (
    <div className='max-w-4xl mx-auto my-24 px-4'>
        <h1 className='font-bold text-2xl text-center md:text-left'>PROFILE</h1>
    <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
        <div className='flex flex-col items-center'>
        <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-300'>
                    Name:
                    <span className='font-normal text-gray-700 dark:text-gray-100 ml-2'>Abhijeet Nagpure</span>
                </h1>
            </div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-300'>
                    Email:
                    <span className='font-normal text-gray-700 dark:text-gray-100 ml-2'>abhi@gmail.com</span>
                </h1>
            </div>
            <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-300'>
                    Role:
                    <span className='font-normal text-gray-700 dark:text-gray-100 ml-2'>INSTRUCTOR</span>
                </h1>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="sm" className="mt-2">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label>Name</Label>
                            <Input type="text" placeholder="Name" className="col-span-3" />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                            <Label>Profile photo</Label>
                            <Input type="file" accept="image/*" className="col-span-3" />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    </div>
     </div>
   )
 }
