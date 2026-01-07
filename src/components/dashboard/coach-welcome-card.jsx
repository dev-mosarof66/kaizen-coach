'use client'
import React from "react"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { FaPlus } from "react-icons/fa"
import { OutlineButton } from "../common/button"
import { cn } from "../../lib/utils"
import { constClassName } from "../../constants/constants"
import { useTranslation } from "../../contexts/translation-context"

const WelcomeCard = () => {
    const { t } = useTranslation()
    
    return (
        <Card className="w-full bg-transparent border-none text-white">
            <div className="flex flex-col gap-4 bg-linear-to-br from-gray-800 via-gray-800 to-blue-500/50  border border-gray-700 p-6 rounded-2xl">

                <div className="w-full flex flex-col gap-1">
                    <h1 className="text-2xl xl:text-3xl font-semibold tracking-tight">
                        {t('hero.welcome.greetingDefault')}
                    </h1>
                    <p className="text-gray-500 text-sm xl:text-base">
                        {t('hero.welcome.subtitle')}
                    </p>
                </div>

                <div className="w-full flex items-center gap-4">

                    <Button className={cn("flex items-center gap-2", constClassName.primaryButton)}>
                        <FaPlus className="text-sm" />
                        {t('hero.welcome.addMatch')}
                    </Button>

                    <Button
                        variant="outline"
                        className={cn(constClassName.outlineButton)}
                    >
                        {t('hero.welcome.viewSchedule')}
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default WelcomeCard
