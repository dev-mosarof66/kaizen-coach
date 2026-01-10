'use client'
import React from "react"
import { Card } from "../ui/card"
import { FaPlus } from "react-icons/fa"
import { OutlineButton, PrimaryButton } from "../common/button"
import { useTranslation } from "../../contexts/translation-context"

const WelcomeCard = () => {
    const { t } = useTranslation()


    const handleAddMatch = () => {
        console.log('add match')
    }

    const handleViewSchedule = () => {
        console.log('view schedule')
    }

    return (
        <Card className="w-full bg-transparent border-none text-white">
            <div className="flex flex-col gap-4 bg-linear-to-br from-gray-800 via-gray-800 to-blue-500/50  border border-gray-500/20 p-6 rounded-md">

                <div className="w-full flex flex-col gap-1">
                    <h1 className="text-2xl xl:text-3xl font-semibold tracking-tight">
                        {t('hero.welcome.greetingDefault')}
                    </h1>
                    <p className="text-gray-500 text-sm xl:text-base">
                        {t('hero.welcome.subtitle')}
                    </p>
                </div>

                <div className="w-full flex items-center gap-3">


                    <PrimaryButton onClick={handleAddMatch}>
                        <FaPlus className="text-sm" />
                        {t('hero.welcome.addMatch')}
                    </PrimaryButton>


                    <OutlineButton onClick={handleViewSchedule}>
                        {t('hero.welcome.viewSchedule')}
                    </OutlineButton>

                </div>
            </div>
        </Card>
    )
}

export default WelcomeCard
