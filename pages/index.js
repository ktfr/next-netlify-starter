import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kai Ferrer</title>
        <link rel="icon" href="/hello-kitty.svg" />
      </Head>

      <main>
        <Header title="Kai Ferrer" />

        <Hero
          imageUrl="/test-hero.jpg"
          title="Kai Ferrer"
          description="Data & Communications Professional"
        />
      </main>

      <Footer />
    </div>
  )
}
