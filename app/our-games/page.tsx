import Image from "next/image";

export default function OurGames() {
  const games = [
    <>
      <h2 className="text-2xl font-bold">Labyrinthe</h2>
      <Image src="/images/maze.gif" width={572} height={480} alt="Kasylian" className="rounded-lg" />
      <p className="text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda error aliquam recusandae ducimus neque labore vel a provident
        quaerat quibusdam voluptas omnis unde aperiam, officiis, expedita nobis ad pariatur.
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold">Course de chevaux</h2>
      <Image src="/images/course-de-chevaux.gif" width={800} height={371} alt="Course de chevaux" className="rounded-lg" />
      <p className="text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda error aliquam recusandae ducimus neque labore vel a provident
        quaerat quibusdam voluptas omnis unde aperiam, officiis, expedita nobis ad pariatur.
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold">Kasylian</h2>
      <Image src="/images/kasylian.gif" width={652} height={480} alt="Kasylian" className="rounded-lg" />
      <p className="text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda error aliquam recusandae ducimus neque labore vel a provident
        quaerat quibusdam voluptas omnis unde aperiam, officiis, expedita nobis ad pariatur.
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold">Snake</h2>
      <Image src="/images/snake.gif" width={480} height={502} alt="Snake" className="rounded-lg" />
      <p className="text-muted-foreground">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia assumenda error aliquam recusandae ducimus neque labore vel a provident
        quaerat quibusdam voluptas omnis unde aperiam, officiis, expedita nobis ad pariatur.
      </p>
    </>,
  ];
  return (
    <main className="flex flex-col gap-5 items-center py-5 pr-2">
      <h1 className="text-3xl font-bold">Nos Jeux</h1>
      <div className="pl-10 xl:pl-0 relative">
        <div className="bottom-0 w-1 bg-foreground absolute left-2 -top-16 xl:-top-5 xl:left-1/2 xl:-translate-x-1/2 rounded">
          <div className="z-10 absolute top-0 w-[calc(100%+5px)] -translate-x-[2.5px] bg-[linear-gradient(220deg,hsl(var(--background))_10%,_rgba(255,255,255,0)_90%)] h-16"></div>
        </div>
        <div className="flex flex-col gap-5 xl:w-[76rem]">
          {games.map((game, index) => (
            <div
              className={`bg-muted p-3 flex flex-col gap-2 rounded relative max-w-xl group even:self-end ${index !== 0 ? "xl:-mt-28" : ""}`}
              key={index}
            >
              <div className="flex flex-col items-center gap-2 absolute xl:group-odd:-right-[calc(2rem+.1rem)] xl:-left-[calc(2rem+.1rem)] xl:group-odd:left-auto xl:translate-x-0 top-5 h-16 w-16 left-0 -translate-x-1/2 -z-10 border-foreground border-b-[.25rem] border-x-[.2rem] rounded-b-[20px]"></div>
              {game}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <p className="bg-foreground text-background px-5 py-2 mt-5 rounded-md">Plus à venir...</p>
        </div>
      </div>
    </main>
  );
}
