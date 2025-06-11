function GameTestPage() {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <p className="text-white text-2xl  font-bold">Oyun Testi</p>
      <p className="text-white/60 capitalize mt-4">
        Hangi oyun türünü oynaman gerektiğini ya da sana göre
      </p>
      <p className="text-white/60 capitalize">
        olduğunu merak ediyorsan, seni teste alalım!
      </p>
      <GameTestCard question="1. Öncelikle cinsiyetini öğrenerek başlayalım!" />
      <GameTestCard question="2. Peki yaşını da öğrenebilir miyiz?" />
      <GameTestCard question="3. Peki yaşını da öğrenebilir miyiz?" />
      <GameTestCard question="4. Peki yaşını da öğrenebilir miyiz?" />
    </div>
  );
}

function GameTestCard({ question }: { question: string }) {
  return (
    <div className="bg-white/5 py-4 px-8 rounded-lg mt-10 w-2/3">
      <p className="text-white text-base font-bold">{question}</p>
      <div className="w-full h-[1px] bg-white/15 mt-4"></div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div className="bg-white/5 py-4 px-8 h-[188px] rounded-lg">
          <p className="text-white text-base font-bold">Erkek</p>
        </div>
        <div className="bg-white/5 py-4 px-8 h-[188px] rounded-lg"></div>
      </div>
    </div>
  );
}

export default GameTestPage;
