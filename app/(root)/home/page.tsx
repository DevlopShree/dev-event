async function Home() {
   const response = await fetch("https://jsonplaceholder.typicode.com/albums");
   if (!response.ok) throw new Error("Network response was not ok");

   const albums = await response.json();

   return (
      <div className="grid grid-cols-3 gap-4 m-3"> 
         {albums.map((album: {id: number, title: string}) => (
            <div
               key={album.id}
               className="bg-blue-300 text-black p-5 min-h-25 flex flex-col items-center justify-center rounded-md"
            >
               <p>Album ID: {album.id}</p>
               <h3 className="text-center">{album.title}</h3>
            </div>
         ))}
      </div>
   );
}

export default Home;


// 'use client';

// import { useEffect, useState, useRef } from 'react';

// type Album = {
//    id: number;
//    title: string;
// };

// export default function Home() {
//    const [albums, setAlbums] = useState<Album[]>([]);
//    const [page, setPage] = useState(1);
//    const [loading, setLoading] = useState(false);
//    const [hasMore, setHasMore] = useState(true);

//    const loaderRef = useRef<HTMLDivElement | null>(null);

//    const fetchAlbums = async () => {
//       if (loading || !hasMore) return;

//       setLoading(true);

//       const res = await fetch(
//          `https://jsonplaceholder.typicode.com/albums?_limit=30&_page=${page}`
//       );

//       const data: Album[] = await res.json();

//       if (data.length === 0) {
//          setHasMore(false);
//       } else {
//          setAlbums((prev) => [...prev, ...data]);
//          setPage((prev) => prev + 1);
//       }

//       setLoading(false);
//    };

//    useEffect(() => {
//       if (!loaderRef.current) return;

//       const observer = new IntersectionObserver(
//          (entries) => {
//             if (entries[0].isIntersecting && !loading && hasMore) {
//                fetchAlbums();
//             }
//          },
//          { threshold: 1 }
//       );

//       observer.observe(loaderRef.current);

//       return () => observer.disconnect();
//    }, [loading, hasMore]);


//    return (
//       <div className="m-3">
//          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {albums.map((album) => (
//                <div
//                   key={album.id}
//                   className="bg-blue-300 text-black p-5 min-h-25 flex flex-col items-center justify-center rounded-md"
//                >
//                   <p>Album ID: {album.id}</p>
//                   <h3 className="text-center">{album.title}</h3>
//                </div>
//             ))}
//          </div>

//          {/* Observer target */}
//          <div ref={loaderRef} className="h-16 flex justify-center items-center">
//             {loading && <p className="text-gray-500">Loading more...</p>}
//             {!hasMore && <p className="text-gray-400">No more albums</p>}
//          </div>
//          <button
//             onClick={fetchAlbums}
//             disabled={loading}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//          >
//             {loading ? 'Loading...' : 'Load More'}
//          </button>

//       </div>
//    );
// }

