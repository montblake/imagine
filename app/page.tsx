import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto bg-neutral-100 flex flex-col justify-start items-center">
      <div className="p-4">
        <Image
          className="rounded-2xl"
          src="/blake_headshot.jpg"
          alt="Next.js logo"
          width={500}
          height={800}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 max-w-lg p-4">
        <h1 className="text-4xl font-bold text-neutral-700">Hello World</h1>
        <div className="flex flex-col gap-4">
          <p className="text-neutral-500 text-sm">
            <span className="font-bold text-neutral-700">Blake Montgomery</span>{" "}
            began his career in Chicago directing ensemble clown theater and
            performing with a variety of non-naturalistic Chicago theaters, most
            notably Redmoon with whom he collaborated for more than a decade. In
            2005, Montgomery founded The Building Stage, a theater company and
            performance space, where he served as Artistic Director until its
            closing in 2013. The company was known for its ensemble-devised,
            director-driven creations, particularly in literary adaptations like
            their Jeff Award-winning <span className="italic">Moby-Dick</span>{" "}
            and the poetic, clown-inspired{" "}
            <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s
            artistic approach draws on his training at the École Jacques Lecoq,
            the Dell&apos;Arte School of Physical Theater, and Middlebury
            College. A member of Actors&apos; Equity, his performances in
            Chicago include work with The House Theatre, The Hypocrites, Remy
            Bumppo Theatre Company, Court Theatre, Chicago Shakespeare,
            Steppenwolf, and Writers Theatre.
          </p>
          <p className="text-neutral-500 text-sm">
            <span className="font-bold text-neutral-700">Blake Montgomery</span>{" "}
            began his career in Chicago directing ensemble clown theater and
            performing with a variety of non-naturalistic Chicago theaters, most
            notably Redmoon with whom he collaborated for more than a decade. In
            2005, Montgomery founded The Building Stage, a theater company and
            performance space, where he served as Artistic Director until its
            closing in 2013. The company was known for its ensemble-devised,
            director-driven creations, particularly in literary adaptations like
            their Jeff Award-winning <span className="italic">Moby-Dick</span>{" "}
            and the poetic, clown-inspired{" "}
            <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s
            artistic approach draws on his training at the École Jacques Lecoq,
            the Dell&apos;Arte School of Physical Theater, and Middlebury
            College. A member of Actors&apos; Equity, his performances in
            Chicago include work with The House Theatre, The Hypocrites, Remy
            Bumppo Theatre Company, Court Theatre, Chicago Shakespeare,
            Steppenwolf, and Writers Theatre.
          </p>
          <p className="text-neutral-500 text-sm">
            <span className="font-bold text-neutral-700">Blake Montgomery</span>{" "}
            began his career in Chicago directing ensemble clown theater and
            performing with a variety of non-naturalistic Chicago theaters, most
            notably Redmoon with whom he collaborated for more than a decade. In
            2005, Montgomery founded The Building Stage, a theater company and
            performance space, where he served as Artistic Director until its
            closing in 2013. The company was known for its ensemble-devised,
            director-driven creations, particularly in literary adaptations like
            their Jeff Award-winning <span className="italic">Moby-Dick</span>{" "}
            and the poetic, clown-inspired{" "}
            <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s
            artistic approach draws on his training at the École Jacques Lecoq,
            the Dell&apos;Arte School of Physical Theater, and Middlebury
            College. A member of Actors&apos; Equity, his performances in
            Chicago include work with The House Theatre, The Hypocrites, Remy
            Bumppo Theatre Company, Court Theatre, Chicago Shakespeare,
            Steppenwolf, and Writers Theatre.
          </p>
        </div>
      </div>
    </main>
  );
}
