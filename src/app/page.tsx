import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className='text-foreground'>Wedding Planner</h1>
      <Button>Save</Button>
      <Checkbox />
      <Skeleton>
        <Image src="" width={500} height={500} alt='Hero'/>
        <Button />
      </Skeleton>
    </main>
  )
}
