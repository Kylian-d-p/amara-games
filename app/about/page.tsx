import RevealOnScroll from "@/components/ui/reveal-on-scroll"
import Image from "next/image"


export default function About() {
  return (
    <main>
      <section className="py-16 flex flex-row items-center bg-secondary">
  <Image
    src="/images/bordeaux.jpg"
    width={1280}
    height={853}
    alt="bordeaux"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
  <div className="flex flex-col items-center mt-8 text-left px-4 md:px-8">
    <h2 className="text-xl md:text-2xl font-bold">
      <span className="font-heading font-extrabold">Amara Game</span> : La révolution du gaming commence à Bordeaux
    </h2>
    <div className="mt-4 text-sm md:text-base max-w-4xl">
      <RevealOnScroll>
      <p>
        Dans une ville où l’histoire rencontre l’innovation, Bordeaux, quatre esprits brillants partageant une passion commune
        pour les jeux vidéo ont décidé de transformer leur rêve en réalité. Maël Delattre, Kylian Dupouy-Peron, Gaël Voineau,
        et Daniel Vincent ont uni leurs forces pour fonder Amara Game, un studio indépendant au potentiel explosif.
      </p>
      </RevealOnScroll>
    </div>
  </div>
</section>

<section className="py-16 flex flex-col lg:flex-row items-center gap-8">
  <div className="flex flex-col items-center text-left px-4 md:px-8 max-w-4xl">
    <h2 className="text-xl md:text-2xl font-bold">Les origines : Quatre talents, une vision commune</h2>
    <RevealOnScroll>
    <p className="mt-4 text-sm md:text-base">
      L’histoire d’Amara Game commence dans une petite pièce d’un appartement bordelais, où des nuits blanches et des litres
      de café ont donné naissance à une idée audacieuse : créer un label qui ne se contenterait pas de faire des jeux, mais qui
      raconterait des histoires capables de toucher l’âme des joueurs.
      <br />
      Les quatre cofondateurs avaient des profils complémentaires :
    </p>
    </RevealOnScroll>
    <ul className="list-disc mt-4 text-sm md:text-base space-y-2">
      {[
        {
          name: "Maël Delattre",
          role: "visionnaire et storyteller, est la plume et la voix qui donnent vie aux récits captivants d’Amara",
        },
        {
          name: "Kylian Dupouy-Peron",
          role: "génie du code, conçoit les moteurs et systèmes qui repoussent les limites de l'interactivité",
        },
        {
          name: "Gaël Voineau",
          role: "artiste numérique et architecte des mondes, transforme les pixels en univers spectaculaires",
        },
        {
          name: "Daniel Vincent",
          role: "stratège et designer gameplay, assure que chaque moment dans un jeu Amara soit une expérience mémorable",
        },
      ].map((founder, index) => (
        <RevealOnScroll key={index}>
          <li>
            {founder.name}, {founder.role}.
          </li>
        </RevealOnScroll>
      ))}
    </ul>
  </div>
  <Image
    src="/images/study-room.jpg"
    width={1280}
    height={902}
    alt="Gaming controller"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
</section>

<section className="py-16 flex flex-col lg:flex-row items-center gap-8 bg-secondary">
  <Image
    src="/images/gaming-room.png"
    width={1280}
    height={731}
    alt="Gaming controller"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
  <div className="flex flex-col items-center text-left px-4 md:px-8 max-w-4xl">
    <h2 className="text-xl md:text-2xl font-bold">Le studio à Bordeaux : Un atelier de création d'univers</h2>
    <RevealOnScroll>
    <p className="mt-4 text-sm md:text-base">
      Amara Game a pris racine dans un studio en plein cœur de Bordeaux, entouré par l’énergie créative de la ville. Cet
      espace, à la fois modeste et chaleureux, est devenu une véritable forge où idées, concepts et prototypes prennent vie.
      Les murs sont tapissés de croquis, de scripts et de cartes conceptuelles, chaque recoin respirant l'innovation et la
      passion. Le studio s'est rapidement démarqué dans l'industrie, non seulement par ses idées révolutionnaires, mais aussi
      par son approche collaborative.
    </p>
    </RevealOnScroll>
  </div>
</section>

<section className="py-16 flex flex-col lg:flex-row items-center gap-8">
  <div className="flex flex-col items-center text-left px-4 md:px-8 max-w-4xl">
    <h2 className="text-xl md:text-2xl font-bold">Une philosophie : Créer l’inoubliable</h2>
    <RevealOnScroll>
    <p className="mt-4 text-sm md:text-base">
      Le cœur d’Amara Game repose sur une philosophie unique : “Le jeu n’est pas une simple distraction, c’est une porte vers
      un autre monde”. Nos quatre fondateurs partagent une vision commune : concevoir des jeux qui ne se contentent pas
      d’amuser, mais qui laissent une trace indélébile dans le cœur des joueurs.
    </p>
    </RevealOnScroll>
    <ul className="list-disc mt-4 text-sm md:text-base space-y-2">
      {[
        {
          principle: "Immersion émotionnelle",
          definition: "Chaque jeu raconte une histoire profondément connectée à l’expérience humaine.",
        },
        {
          principle: "Créativité sans limite",
          definition: "Les joueurs deviennent eux-mêmes des architectes de l’univers qu’ils explorent.",
        },
        {
          principle: "Technologie innovante",
          definition: "Grâce à l'expertise technique de Kylian et Gaël, Amara Game utilise des outils avancés pour repousser les limites du réalisable.",
        },
      ].map((philosophy, index) => (
        <RevealOnScroll key={index}>
          <li>
            {philosophy.principle}: {philosophy.definition}
          </li>
        </RevealOnScroll>
      ))}
    </ul>
  </div>
  <Image
    src="/images/philosophy.jpg"
    width={1280}
    height={865}
    alt="Gaming controller"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
</section>

<section className="py-16 flex flex-col lg:flex-row items-center gap-8 bg-secondary">
  <Image
    src="/images/futur-realite-virtuelle.jpg"
    width={1000}
    height={618}
    alt="Gaming controller"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
  <div className="flex flex-col items-center text-left px-4 md:px-8 max-w-4xl">
    <h2 className="text-xl md:text-2xl font-bold">L’avenir : Le prochain grand projet</h2>
    <RevealOnScroll>
    <p className="mt-4 text-sm md:text-base">
      Aujourd’hui, Amara Game travaille sur un projet secret, surnommé “Project Aurora”, qui promet de bouleverser
      l’industrie. Les rumeurs parlent d’un jeu en réalité augmentée prenant place dans les rues de Bordeaux, où les joueurs
      pourront interagir avec leur environnement réel transformé en terrain de jeu virtuel.
    </p>
    </RevealOnScroll>
  </div>
</section>

<section className="py-16 flex flex-row items-center">
  <div className="text-left px-4 md:px-8 max-w-4xl">
    <h2 className="text-xl md:text-2xl font-bold">Amara Game : Le futur commence maintenant</h2>
    <RevealOnScroll>
      <p className="mt-4 text-sm md:text-base">
        Avec leur studio à Bordeaux et leur ambition sans limites, nos quatre fondateurs ne se contentent pas de créer des
        jeux, ils bâtissent une nouvelle ère du gaming. Leur aventure ne fait que commencer, et les joueurs du monde entier
        attendent avec impatience ce qu’Amara Game leur réserve.
      </p>
    </RevealOnScroll>
  </div>
  <Image
    src="/images/avenir_gaming.jpg"
    width={1280}
    height={851}
    alt="Gaming controller"
    className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-xl"
  />
</section>

      
    </main>
  )
}