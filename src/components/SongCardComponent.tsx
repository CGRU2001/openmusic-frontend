import { SongCardComponentInterface } from "@/lib/interfaces/components.interfaces"
import { Image } from "@nextui-org/react"

const SongCardComponent: React.FC<SongCardComponentInterface> = ({
    onClick,
    song
}) => {


    return (
        <div
            className="d-flex flex-col gap-5 w-[200px] cursor-pointer"
            onClick={() => onClick({ song })}
        >
            <Image
                className="w-100"
                src={song.image}
                height={200}
                isBlurred
                shadow="lg"
            />
            <h3 className="font-bold mt-3 text-xl">{song.name}</h3>
            <p className="text-gray-600">{song.artist.map(artist => artist.name).join(", ")}</p>
        </div>
    )

}


export default SongCardComponent