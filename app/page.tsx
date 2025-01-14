import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative flex flex-col gap-5 h-[calc(100vh-4rem)] justify-center items-center">
        <h2 className="font-heading font-extrabold text-4xl md:text-6xl drop-shadow-[#ffffff90_0_0_20px]">Amara Games</h2>
        <TextAnimate className="font-thin drop-shadow-[#fff_0_0_20px]" animation="blurInUp" by="character">
          Amara, c&apos;est bien en vrai
        </TextAnimate>
        <video className="absolute -z-20 top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/videos/home-background.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="bg-secondary py-16 flex justify-center">
        <article className="px-5 lg:px-10 flex flex-col gap-8 max-w-3xl lg:max-w-6xl">
          <h2 className="text-2xl font-bold">Un projet ambitieux</h2>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="flex flex-col gap-3">
              <p>
                Chez <span className="font-heading font-extrabold">Amara Games</span>, nous rêvons grand et jouons encore plus grand.
              </p>
              <p>
                Notre mission ? Redéfinir les frontières du jeu vidéo en soutenant des créateurs audacieux et des univers uniques qui marquent les
                esprits.
              </p>
              <p>
                Animés par une passion insatiable pour l&apos;innovation et la narration immersive, nous accompagnons chaque projet avec une attention
                méticuleuse et une vision claire : offrir des expériences qui transcendent le simple divertissement pour devenir de véritables œuvres
                d&apos;art interactives.
              </p>
              <p>
                Rejoignez-nous dans cette aventure épique où chaque pixel, chaque note et chaque ligne de code sont au service d&apos;une seule
                ambition : redonner au jeu vidéo sa place de rêveur et de raconteur d&apos;histoires. Ensemble, bâtissons le futur du gaming.
              </p>
            </div>
            <Image src="/images/gaming-controller.jpg" width={1280} height={851} alt="Gaming controller" className="rounded-lg md:max-w-md" />
          </div>
        </article>
      </section>
      <section className="py-16 flex justify-center">
        <article className="px-5 lg:px-10 flex flex-col gap-8 max-w-3xl lg:max-w-6xl">
          <h2 className="text-2xl font-bold">Des talents visionnaires</h2>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
            <Image src="/images/esport.webp" width={1800} height={1200} alt="Gaming controller" className="rounded-lg md:max-w-md" />
            <div className="flex flex-col gap-3">
              <p>
                Chez <span className="font-heading font-extrabold">Amara Games</span>, nous croyons que derrière chaque grand jeu se cache une équipe
                de talents exceptionnels.
              </p>
              <p>
                Notre priorité ? Identifier, soutenir et mettre en lumière des créateurs visionnaires capables de repousser les limites du possible.
              </p>
              <p>
                Qu’il s’agisse de studios indépendants ou de jeunes développeurs au potentiel éclatant, nous leur offrons les outils, les ressources
                et la liberté créative nécessaires pour donner vie à leurs idées les plus audacieuses.
              </p>
              <p>
                Ici, chaque voix compte, chaque innovation est célébrée, et chaque projet est l’occasion d’écrire une nouvelle page de l’histoire du
                jeu vidéo. Vous avez une vision ? Nous sommes là pour la propulser.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
