import { TextAnimate } from "@/components/ui/text-animate";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-5 h-[calc(100vh-4rem)] justify-center items-center">
        <span className="font-heading font-extrabold text-4xl">Amara Games</span>
        <TextAnimate className="font-thin" animation="blurInUp" by="character">
          Amara, c&apos;est bien en vrai
        </TextAnimate>
      </section>
      <section className="bg-secondary py-16 flex justify-center">
        <article className="px-10 flex flex-col gap-10 max-w-4xl">
          <h2 className="text-2xl font-bold">Un projet ambitieux</h2>
          <div className="flex flex-col gap-2">
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
              Rejoignez-nous dans cette aventure épique où chaque pixel, chaque note et chaque ligne de code sont au service d&apos;une seule ambition
              : redonner au jeu vidéo sa place de rêveur et de raconteur d&apos;histoires. Ensemble, bâtissons le futur du gaming.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
