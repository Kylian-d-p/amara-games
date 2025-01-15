import Image from "next/image";
import Game from "./game";

export default function OurGames() {
  const games = [
    <>
      <h2 className="text-2xl font-bold self-start">Labyrinthe</h2>
      <Image src="/images/maze.gif" width={572} height={480} alt="Kasylian" className="rounded-lg" />
      <p className="text-muted-foreground">
        Plongez dans le jeu du Labyrinthe, un jeu de type puzzle où chaque seconde compte ! Votre mission : trouver la sortie le plus rapidement
        possible à travers un dédale complexe. Mais ce n&apos;est pas tout ! Personnalisez votre expérience en changeant la couleur de fond pour une
        ambiance unique, et relevez le défi grâce à trois niveaux de difficulté adaptés à tous les joueurs. Saurez-vous battre le chronomètre et
        atteindre la sortie avant que le temps ne s&apos;écoule ?
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold self-start">Course de chevaux</h2>
      <Image src="/images/course-de-chevaux.gif" width={800} height={371} alt="Course de chevaux" className="rounded-lg" />
      <p className="text-muted-foreground">
        Préparez-vous à vivre une expérience de course multijoueur intense avec la course de chevaux ! Jusqu&apos;à 4 joueurs peuvent s&apos;affronter
        en simultané pour prouver qui est le plus rapide à franchir la ligne d&apos;arrivée. Créez vos propres parties grâce à un système de code
        personnalisé, invitez vos amis, et que la meilleure stratégie de frappe l&apos;emporte ! Et pour couronner le tout, un classement
        (leaderboard) met en lumière les meilleurs joueurs.
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold self-start">Kasylian</h2>
      <Image src="/images/kasylian.gif" width={652} height={480} alt="Kasylian" className="rounded-lg" />
      <p className="text-muted-foreground">
        Plongez dans l&apos;univers palpitant des jeux de hasard avec Kasylian Casino, une simulation immersive qui propose trois expériences uniques.
        Dans le Jeu des Bombes, choisissez des cases sans tomber sur la bombe pour multiplier vos gains. La Roulette vous permet de parier sur un
        numéro ou une couleur, tandis que la Slot Machine vous offre une chance de décrocher le jackpot en alignant les bons symboles. Un jeu de
        chance et de stratégie qui vous promet de vibrer à chaque tour !
      </p>
    </>,
    <>
      <h2 className="text-2xl font-bold self-start">Snake</h2>
      <Image src="/images/snake.gif" width={480} height={502} alt="Snake" className="rounded-lg" />
      <p className="text-muted-foreground">
        Redécouvrez le jeu du Snake dans une version revisitée pour les compétiteurs d&apos;aujourd&apos;hui. Faites grandir votre serpent en
        ramassant des points, mais attention à ne pas vous mordre la queue ! Chaque partie est l&apos;occasion d&apos;améliorer votre score et de
        grimper dans le leaderboard. Affrontez vos amis et devenez le maître du serpent dans cette aventure rétro et addictive.
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
            <Game key={index} className={`${index !== 0 ? "xl:-mt-28" : ""}`}>
              {game}
              </Game>
          ))}
        </div>
        <div className="flex justify-center">
          <p className="bg-foreground text-background px-5 py-2 mt-5 rounded-md">Plus à venir...</p>
        </div>
      </div>
    </main>
  );
}
