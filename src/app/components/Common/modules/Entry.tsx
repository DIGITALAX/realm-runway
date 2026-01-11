"use client";

import { CARDS } from "@/app/lib/constants";
import { FunctionComponent } from "react";

const Entry: FunctionComponent<{ dict: any }> = ({ dict }) => {
  return (
    <main className="relative min-h-screen text-white">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        poster="/images/runway-midnight-room.png"
        loop
        autoPlay
        muted
        playsInline
        draggable={false}
      >
        <source src="/videos/runway-midnight-room.mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[1]"></div>
      <header className="mx-auto flex w-full items-start justify-between px-10 pt-7 relative z-10">
        <div className="flex items-center">
          <span className="ml-2 select-none text-lg text-realm-pink">
            REALM RUNWAY
          </span>
        </div>
      </header>

      <section className="mx-auto w-full px-4 sm:px-6 md:px-10 pb-14 pt-10 relative z-10">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10">
          <aside className="col-span-12 lg:col-span-4">
            <div className="w-full max-w-xl">
              <div className="relative">
                <div className="h-full overflow-y-auto pr-10">
                  <p className="p-4 text-sm leading-relaxed tracking-wider text-white/90">
                    {dict?.copy}
                  </p>
                  <p className="px-4 pb-4 text-sm leading-relaxed tracking-wider text-white/90">
                    {dict?.copy1}
                  </p>
                  <p className="px-4 pb-4 text-sm leading-relaxed tracking-wider text-white/90">
                    {dict?.copy2}
                  </p>
                  <p className="px-4 pb-4 text-sm leading-relaxed tracking-wider text-white/90">
                    {dict?.copy3}
                  </p>
                  <p className="px-4 pb-4 text-sm leading-relaxed tracking-wider text-white/90">
                    {dict?.copy4}
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-span-12 lg:col-span-8 w-full max-w-full">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 w-full">
              {CARDS.map((c, i) => (
                <div key={i} className="group flex relative flex-col w-full max-w-full min-w-0" aria-label={`${c.title}`}>
                  <div className="overflow-hidden rounded-sm bg-gradient-to-br from-realm-pink/30 to-realm-purple/30 w-full">
                    <div className="relative aspect-video bg-gradient-to-br from-realm-indigo/40 to-realm-crimson/40 w-full">
                      <video
                        poster={`/images/${c.imagen}`}
                        draggable={false}
                        muted
                        loop
                        autoPlay
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', maxWidth: '100%' }}
                        className="transition-transform duration-300 group-hover:scale-105 mix-blend-overlay opacity-70"
                      >
                        <source src={`/videos/${c.video}`} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <div className="mt-3 text-sm tracking-widest text-white">
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Entry;
