import AlbumCardComponent from '@/components/AlbumCardComponent'
import LayoutComponent from '@/components/LayoutComponent'
import SongCardComponent from '@/components/SongCardComponent'
import { DEFAULT_FRONT_END_URL } from '@/lib/constants'
import { AlbumEntityInterface, ResourceInterface, SongEntityInterface } from '@/lib/interfaces/server.interfaces'


interface PropsInterface {
  content: {
    success?: ResourceInterface[]
  }
}


export default function Home(props: PropsInterface) {


  return (
    <LayoutComponent>
      <div className='my-8 flex flex-col gap-5'>
        <h1 className='text-3xl font-bold block'>For You</h1>
        <div className='flex flex-wrap gap-12'>
          {
            props?.content?.success?.map((item, index) => {
              switch (item.contentType) {
                case "album":
                  return (
                    <AlbumCardComponent
                      album={item as AlbumEntityInterface}
                      key={index}
                      onClick={({ song }) => console.log(song)}
                    />
                  )
                case "song":
                  return (
                    <SongCardComponent
                      song={item as SongEntityInterface}
                      key={index}
                      onClick={({ song }) => console.log(song)}
                    />
                  )
              }
            })
          }
        </div>

      </div>
    </LayoutComponent>
  )
}


export const getServerSideProps = (async () => {
  const res = await fetch(`${DEFAULT_FRONT_END_URL}/api/contents`)
  const content = await res.json()
  return { props: { content } }
}) 