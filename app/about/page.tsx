import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import Image from "next/image";

export default function About() {
  const bios = [
    {
      name: "Maël Delattre",
      role: "Visionnaire et storyteller, est la plume et la voix qui donnent vie aux récits captivants d&apos;Amara",
    },
    {
      name: "Kylian Dupouy-Peron",
      role: "Génie du code, conçoit les moteurs et systèmes qui repoussent les limites de l&apos;interactivité",
    },
    {
      name: "Gaël Voineau",
      role: "Artiste numérique et architecte des mondes, transforme les pixels en univers spectaculaires",
    },
    {
      name: "Daniel Vincent",
      role: "Stratège et designer gameplay, assure que chaque moment dans un jeu Amara soit une expérience mémorable",
    },
  ];

  const sections = [
    {
      imageAttributes: {
        src: "/images/bordeaux.jpg",
        width: 1280,
        height: 853,
        alt: "bordeaux",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-2xl font-bold">
              <span className="font-heading font-extrabold">Amara Game</span> : La révolution du gaming commence à Bordeaux
            </h2>
          </RevealOnScroll>
          <div className="mt-4">
            <RevealOnScroll>
              <p>
                Dans une ville où l&apos;histoire rencontre l&apos;innovation, Bordeaux, quatre esprits brillants partageant une passion commune pour
                les jeux vidéo ont décidé de transformer leur rêve en réalité. Maël Delattre, Kylian Dupouy-Peron, Gaël Voineau, et Daniel Vincent ont
                uni leurs forces pour fonder Amara Game, un studio indépendant au potentiel explosif.
              </p>
            </RevealOnScroll>
          </div>
        </>
      ),
    },
    {
      imageAttributes: {
        src: "/images/study-room.jpg",
        width: 1280,
        height: 902,
        alt: "Gaming controller",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-bold">Les origines : Quatre talents, une vision commune</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-4">
              L&apos;histoire d&apos;Amara Game commence dans une petite pièce d&apos;un appartement bordelais, où des nuits blanches et des litres de
              café ont donné naissance à une idée audacieuse : créer un label qui ne se contenterait pas de faire des jeux, mais qui raconterait des
              histoires capables de toucher l&apos;âme des joueurs.
            </p>
          </RevealOnScroll>
          <ul className="list-disc mt-4 space-y-2">
            {bios.map((founder, index) => (
              <RevealOnScroll key={index}>
                <li>
                  {founder.name}, {founder.role}.
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </>
      ),
    },
    {
      imageAttributes: {
        src: "/images/gaming-room.png",
        width: 1280,
        height: 731,
        alt: "Gaming controller",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-bold">Le studio à Bordeaux : Un atelier de création d&apos;univers</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-4">
              Amara Game a pris racine dans un studio en plein cœur de Bordeaux, entouré par l&apos;énergie créative de la ville. Cet espace, à la
              fois modeste et chaleureux, est devenu une véritable forge où idées, concepts et prototypes prennent vie. Les murs sont tapissés de
              croquis, de scripts et de cartes conceptuelles, chaque recoin respirant l&apos;innovation et la passion.
            </p>
          </RevealOnScroll>
        </>
      ),
    },
    {
      imageAttributes: {
        src: "/images/philosophy.jpg",
        width: 1280,
        height: 865,
        alt: "Gaming controller",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-bold">Une philosophie : Créer l&apos;inoubliable</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-4">
              Le cœur d&apos;Amara Game repose sur une philosophie unique : “Le jeu n&apos;est pas une simple distraction, c&apos;est une porte vers
              un autre monde”. Nos quatre fondateurs partagent une vision commune : concevoir des jeux qui ne se contentent pas d&apos;amuser, mais
              qui laissent une trace indélébile dans le cœur des joueurs.
            </p>
          </RevealOnScroll>
          <ul className="list-disc mt-4 space-y-2">
            {[
              {
                principle: "Immersion émotionnelle",
                definition: "Chaque jeu raconte une histoire profondément connectée à l&apos;expérience humaine.",
              },
              {
                principle: "Créativité sans limite",
                definition: "Les joueurs deviennent eux-mêmes des architectes de l&apos;univers qu&apos;ils explorent.",
              },
              {
                principle: "Technologie innovante",
                definition:
                  "Grâce à l&apos;expertise technique de Kylian et Gaël, Amara Game utilise des outils avancés pour repousser les limites du réalisable.",
              },
            ].map((philosophy, index) => (
              <RevealOnScroll key={index}>
                <li>
                  {philosophy.principle}: {philosophy.definition}
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </>
      ),
    },
    {
      imageAttributes: {
        src: "/images/futur-realite-virtuelle.jpg",
        width: 1000,
        height: 618,
        alt: "Gaming controller",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-bold">L&apos;avenir : Le prochain grand projet</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-4">
              Aujourd&apos;hui, Amara Game travaille sur un projet secret, surnommé “Project Aurora”, qui promet de bouleverser l&apos;industrie. Les
              rumeurs parlent d&apos;un jeu en réalité augmentée prenant place dans les rues de Bordeaux, où les joueurs pourront interagir avec leur
              environnement réel transformé en terrain de jeu virtuel.
            </p>
          </RevealOnScroll>
        </>
      ),
    },
    {
      imageAttributes: {
        src: "/images/avenir_gaming.jpg",
        width: 1280,
        height: 851,
        alt: "Gaming controller",
      },
      content: (
        <>
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-bold">Amara Game : Le futur commence maintenant</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mt-4">
              Avec leur studio à Bordeaux et leur ambition sans limites, nos quatre fondateurs ne se contentent pas de créer des jeux, ils bâtissent
              une nouvelle ère du gaming. Leur aventure ne fait que commencer, et les joueurs du monde entier attendent avec impatience ce
              qu&apos;Amara Game leur réserve.
            </p>
          </RevealOnScroll>
        </>
      ),
    },
  ];

  return (
    <main>
      {sections.map((section, index) => (
        <section className="py-16 px-5 odd:bg-secondary group" key={index}>
          <div className="flex flex-col gap-10 lg:flex-row items-center justify-center w-full max-w-7xl mx-auto group-odd:lg:flex-row-reverse">
            <RevealOnScroll>
              <Image
                src={section.imageAttributes.src}
                width={section.imageAttributes.width}
                height={section.imageAttributes.height}
                alt={section.imageAttributes.alt}
                className="rounded-lg w-full max-w-lg"
              />
            </RevealOnScroll>
            <div className="flex flex-col text-left md:px-8 max-w-3xl">{section.content}</div>
          </div>
        </section>
      ))}
    </main>
  );
}
