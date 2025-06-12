import CommentIcon from "@/assets/img/comment_icon.png";
import StarIcon from "@/assets/img/rate_star_icon.png";
import UpIcon from "@/assets/img/up_icon.png";
import Rating from "@/components/Rating/Rating";
import { useGetGameDetails } from "@/hooks/useGetGameDetails";
import { format } from "date-fns";
import { MessageSquareMore, Plus, Star } from "lucide-react";
import { useParams } from "react-router";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Platform {
  id: number;
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

function GameDetailsPage() {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGetGameDetails(id);

  if (isLoading) return <div className="text-white">Yükleniyor...</div>;
  if (error) return <div className="text-white">Hata: {error.message}</div>;
  if (!game) return <div className="text-white">Oyun bulunamadı</div>;

  return (
    <div className="flex flex-col bg-white/5 rounded-xl p-4">
      <div className="flex flex-row items-end justify-between w-full">
        {/* Header Section One */}
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <div className="w-[5px] h-[23px] bg-[#342489]" />
            <h1 className="text-white text-3xl font-bold">{game.name}</h1>
          </div>
          <div className="flex flex-row items-center mt-3">
            {game.genres.map((genre: Genre, index: number) => (
              <div key={genre.id} className="flex flex-row">
                <p className="text-white/50 text-sm">{genre.name}</p>
                {index !== game.genres.length - 1 && (
                  <p className="text-white/50 text-sm mr-1">,</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-white/50 text-sm">
              {format(new Date(game.released), "yyyy")}
            </p>
            <p className="text-white/50 text-sm">|</p>
            <p className="text-white/50 text-sm">{game.esrb_rating?.name}</p>
          </div>
        </div>
        {/* Header Section Two */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl">{game.metacritic}</p>
            <div className="flex flex-row items-center gap-1">
              <img
                src={StarIcon}
                alt="Star Icon"
                className="w-3 h-3 object-contain"
              />
              <p className="text-white/50 text-xs">MC</p>
            </div>
          </div>
          <div className="w-[1px] h-[47px] bg-[#363636]" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl">{game.rating}</p>
            <div className="flex flex-row items-center gap-1">
              <img
                src={UpIcon}
                alt="Star Icon"
                className="w-3 h-3 object-contain"
              />
              <p className="text-white/50 text-xs">Rating</p>
            </div>
          </div>
          <div className="w-[1px] h-[47px] bg-[#363636]" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl">{game.reviews_count}</p>
            <div className="flex flex-row items-center gap-1">
              <img
                src={CommentIcon}
                alt="Star Icon"
                className="w-3 h-3 object-contain"
              />
              <p className="text-white/50 text-xs">Reviews</p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7">
          <div className="lg:col-span-2">
            <img
              src={game.background_image}
              alt="Game Image"
              className="w-full h-[540px] rounded-[5px] object-cover"
            />
            <div
              className="text-white/70 mt-4 mr-20 [&>p]:mb-4"
              dangerouslySetInnerHTML={{
                __html: game.description
                  .split("\n")
                  .map(
                    (paragraph: HTMLParagraphElement) => `<p>${paragraph}</p>`
                  )
                  .join(""),
              }}
            />
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white/50">Geliştiriciler:</p>
                {game.developers.map((developer: Developer, index: number) => (
                  <div key={developer.id} className="flex flex-row">
                    <p className="text-white">{developer.name}</p>
                    {index !== game.developers.length - 1 && (
                      <p className="text-white">,</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white/50">Yayıncılar:</p>
                {game.publishers.map((publisher: Publisher, index: number) => (
                  <div key={publisher.id} className="flex flex-row">
                    <p className="text-white">{publisher.name}</p>
                    {index !== game.publishers.length - 1 && (
                      <p className="text-white">,</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-white/50">Türler:</p>
                {game.genres.map((genre: Genre, index: number) => (
                  <div key={genre.id} className="flex flex-row">
                    <p className="text-white">{genre.name}</p>
                    {index !== game.genres.length - 1 && (
                      <p className="text-white">,</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white/50">Platformlar:</p>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform: Platform) => (
                    <span
                      key={platform.id}
                      className="bg-white/10 px-3 py-1 rounded-full text-white text-xs"
                    >
                      {platform.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <img
              src={game.background_image_additional}
              alt="Game Image"
              className="w-full h-[540px] rounded-[5px] object-cover"
            />
            <div className="flex flex-col gap-3 mt-5">
              <Card
                iconContent={<Star className="w-8 h-8 text-white fill-white" />}
                title="Puanla"
                info={game.ratings_count}
                rightContent={
                  <Rating
                    initialRating={3}
                    maxRating={5}
                    onRatingChange={(rating) => console.log(rating)}
                    size="md"
                  />
                }
              />
              <Card
                iconContent={<Plus className="w-8 h-8 text-white" />}
                title="Listene Ekle"
                info={`${game.suggestions_count} Kişi Listesine Ekledi`}
              />
              <Card
                iconContent={
                  <MessageSquareMore className="w-8 h-8 text-white" />
                }
                title="Yorum Yaz"
                info={game.reviews_count}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  iconContent,
  title,
  info,
  rightContent,
}: {
  iconContent: React.ReactNode;
  title: string;
  info: string;
  rightContent?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row justify-between items-center bg-[#5739F2] px-6 py-3 rounded-[5px]">
      <div className="flex flex-row items-center gap-4">
        {iconContent}
        <div className="flex flex-col">
          <p className="text-white text-base font-bold">{title}</p>
          <p className="text-white/50 text-xs">{info} </p>
        </div>
      </div>
      <div>{rightContent}</div>
    </div>
  );
};

export default GameDetailsPage;
