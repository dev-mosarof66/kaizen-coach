'use client'
import { OutlineButton } from "../common/button"
import { Input } from "../ui/input"
import { useTranslation } from "../../contexts/translation-context"

const TabHeader = () => {
    const { t } = useTranslation()
    return (
      <div className='w-full flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between'>
        <h1 className='text-white text-xl font-semibold'>{t('teamsOverviewPage.tabHeader.players')}</h1>
        <div className='flex items-center justify-between gap-2'>
          <Input className='w-full max-w-md border border-gray-800 text-white' type={'text'} placeholder={t('teamsOverviewPage.tabHeader.searchPlayerPlaceholder')} />
          <div className='flex items-center justify-between gap-2'>
            <OutlineButton>
              {t('teamsOverviewPage.tabHeader.allPositions')}
            </OutlineButton>
            <OutlineButton>
              {t('teamsOverviewPage.tabHeader.allPositions')}
            </OutlineButton>
          </div>
        </div>
      </div>
    )
  }

  
export default TabHeader