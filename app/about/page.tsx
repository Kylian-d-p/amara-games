import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function About() {
  return (
    <main>
      <h1>A Propos</h1>
      <p>Bonjour, 
      <Link href={"/"}>
        <Button variant={"link"} size={"nopad"}>Clique</Button>
      </Link> sur ce bouton</p>
    </main>
  )
}