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
      <section className="h-screen"></section>
    </main>
  );
}
