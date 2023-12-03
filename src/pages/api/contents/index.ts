// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        success: [
            {
                name: "The fat of the land",
                artist: [
                    {
                        name: "The Prodigy",
                        nationality: "English",
                        contentType: "artist"
                    }
                ],
                songs: [
                    {
                        "name": "Smack My Bitch Up",
                        "contentType": "song"
                    },
                    {
                        "name": "Breathe",
                        "contentType": "song"
                    },
                    {
                        "name": "Diesel Power",
                        "contentType": "song"
                    },
                    {
                        "name": "Funky Shit",
                        "contentType": "song"
                    },
                    {
                        "name": "Serial Thrilla",
                        "contentType": "song"
                    },
                    {
                        "name": "Mindfields",
                        "contentType": "song"
                    },
                    {
                        "name": "Narayan",
                        "contentType": "song"
                    },
                    {
                        "name": "Firestarter",
                        "contentType": "song"
                    },
                    {
                        "name": "Climbatize",
                        "contentType": "song"
                    },
                    {
                        "name": "Fuel My Fire",
                        "contentType": "song"
                    }
                ],
                image: "https://m.media-amazon.com/images/I/81LiY2q+x9L._UF1000,1000_QL80_.jpg",
                contentType: "album"
            },
            {
                name: "Kamikaze",
                artist: [{
                    name: "Eminem"
                }],
                image: "https://i.redd.it/sop728hvt5n61.jpg",
                contentType: "album"
            },
            {
                name: "Minfields",
                artist: [
                    {
                        name: "The Prodigy",
                        nationality: "English",
                        contentType: "artist"
                    }
                ],
                image: "https://m.media-amazon.com/images/I/81LiY2q+x9L._UF1000,1000_QL80_.jpg",
                contentType: "song"
            }
        ]
    })
}
