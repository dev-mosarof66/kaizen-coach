'use client'
import { cn } from "../../lib/utils";
import Image from "next/image";
import { useTranslation } from "../../contexts/translation-context";

const PlayerCard = ({ index, image, name, team, age, position, rating, value, club, selectedPlayer, setSelectedPlayer }) => {
    const { t } = useTranslation()
    return (
        <div onClick={() => setSelectedPlayer(index)} className={cn("w-full bg-gray-800/30 rounded-2xl border border-[#1e3a8a] overflow-hidden shadow-lg p-0 relative hover:bg-gray-800/70 active:scale-95 cursor-pointer transition-all duration-300 delay-75", selectedPlayer === index && "border border-purple-600/50 bg-purple-500/10 hover:bg-purple-500/10")}>

            <div className="w-full h-48 flex items-end justify-center">
                <Image
                    src={image}
                    alt="Player"
                    width={170}
                    height={150}
                    className="object-cover"
                />
            </div>

            <div className="p-4 w-full flex flex-col gap-4">

                <div>
                    {/* Name + Badge */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-white font-semibold text-lg">{name}</h2>

                        <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold">
                            {position}
                        </span>
                    </div>

                    {/* club + age */}
                    <p className="text-sm text-gray-400 mt-1">
                        {team} • {t('playersPage.playerCard.age')} {age}
                    </p>

                </div>
                {/* Stats */}
                <div className="w-full flex items-center justify-between text-xs gap-2">

                    {/* Rating */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 py-0.5">{t('playersPage.playerCard.rating')}</span>
                        <span className="text-white text-sm font-medium">{rating}</span>
                    </div>

                    {/* Value */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 py-0.5">{t('playersPage.playerCard.value')}</span>
                        <span className="text-green-400 font-medium">{value}</span>
                    </div>

                    {/* Team */}
                    <div className="flex flex-col">
                        <span className="text-gray-500 py-0.5">{t('playersPage.playerCard.team')}</span>
                        <span className="text-white text-sm font-medium">{club}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
